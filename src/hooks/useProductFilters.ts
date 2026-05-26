import { useState, useMemo } from "react";
import type { Product } from "@/types/Product.types";
import { type ProductFilters, DEFAULT_FILTERS } from "@/types/ProductFilters.types";

/**
 * Calcula a distância mínima do estoque atual até qualquer um dos limites
 * (low_stock_level ou over_stock_level).
 *
 * Score positivo  → dentro da faixa normal, valor = folga até o limite mais próximo
 * Score negativo  → fora da faixa (estoque abaixo do mínimo ou acima do máximo)
 * Score Infinity  → produto sem limites cadastrados (sem critério de comparação)
 */
function getStockLevelScore(product: Product): number {
  const { stock_quantity, low_stock_level, over_stock_level } = product;

  const hasLow = low_stock_level != null;
  const hasHigh = over_stock_level != null;

  if (!hasLow && !hasHigh) return Infinity;

  const distToLow = hasLow ? stock_quantity - low_stock_level! : Infinity;
  const distToHigh = hasHigh ? over_stock_level! - stock_quantity : Infinity;

  return Math.min(distToLow, distToHigh);
}

export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // ── Filtros booleanos ────────────────────────────────────────────────────

    if (filters.onlyActive) {
      result = result.filter((p) => p.is_active);
    }

    // Filtro de validade:
    // - onlyExpired ativo → apenas vencidos
    // - sortExpiry ativo sem onlyExpired → apenas válidos (faz sentido ordenar por validade)
    // - nenhum dos dois → sem filtro de validade
    if (filters.onlyExpired) {
      result = result.filter(
        (p) => p.expiration_date && new Date(p.expiration_date) < today
      );
    } else if (filters.sortExpiry !== null) {
      result = result.filter(
        (p) => p.expiration_date && new Date(p.expiration_date) >= today
      );
    }

    // Faixa de preço (centavos → reais)
    if (filters.priceFrom > 0) {
      result = result.filter((p) => p.item_price >= filters.priceFrom / 100);
    }
    if (filters.priceTo > 0) {
      result = result.filter((p) => p.item_price <= filters.priceTo / 100);
    }

    // ── Multi-ordenação ──────────────────────────────────────────────────────
    // Cada categoria é independente. Quando mais de uma estiver ativa, a ordem
    // de prioridade é: Alfa → Preço → Estoque → Nível de Estoque → Validade.
    // A primeira comparação não-zero vence (sort estável encadeado).

    type Comparator = (a: Product, b: Product) => number;
    const comparators: Comparator[] = [];

    if (filters.sortAlpha) {
      const dir = filters.sortAlpha === "az" ? 1 : -1;
      comparators.push((a, b) => dir * a.name.localeCompare(b.name, "pt-BR"));
    }

    if (filters.sortPrice) {
      const dir = filters.sortPrice === "price-high" ? -1 : 1;
      comparators.push((a, b) => dir * (a.item_price - b.item_price));
    }

    if (filters.sortStock) {
      const dir = filters.sortStock === "stock-high" ? -1 : 1;
      comparators.push((a, b) => dir * (a.stock_quantity - b.stock_quantity));
    }

    if (filters.sortStockLevel) {
      comparators.push((a, b) => {
        const scoreA = getStockLevelScore(a);
        const scoreB = getStockLevelScore(b);

        // Produtos sem limites cadastrados vão para o final
        if (scoreA === Infinity && scoreB === Infinity) return 0;
        if (scoreA === Infinity) return 1;
        if (scoreB === Infinity) return -1;

        // "Mais crítico" = menor score (mais perto ou além de um limite)
        // "Mais normal"  = maior score (mais longe de qualquer limite)
        return filters.sortStockLevel === "stock-level-critical"
          ? scoreA - scoreB
          : scoreB - scoreA;
      });
    }

    if (filters.sortExpiry) {
      const todayMs = today.getTime();

      comparators.push((a, b) => {
        // Produtos sem validade vão para o final
        if (!a.expiration_date && !b.expiration_date) return 0;
        if (!a.expiration_date) return 1;
        if (!b.expiration_date) return -1;

        const dateA = new Date(a.expiration_date).getTime();
        const dateB = new Date(b.expiration_date).getTime();

        if (filters.onlyExpired) {
          // Vencidos: "mais próximo" = venceu mais recentemente (diff menor com hoje)
          //           "mais distante" = venceu há mais tempo (diff maior com hoje)
          const diffA = Math.abs(dateA - todayMs);
          const diffB = Math.abs(dateB - todayMs);
          return filters.sortExpiry === "expiry-nearest"
            ? diffA - diffB
            : diffB - diffA;
        }

        // Válidos: "mais próximo" = vence mais cedo / "mais distante" = vence mais tarde
        return filters.sortExpiry === "expiry-nearest"
          ? dateA - dateB
          : dateB - dateA;
      });
    }

    if (comparators.length > 0) {
      result.sort((a, b) => {
        for (const cmp of comparators) {
          const r = cmp(a, b);
          if (r !== 0) return r;
        }
        return 0;
      });
    }

    return result;
  }, [products, filters]);

  const hasActiveFilters =
    filters.sortAlpha !== null ||
    filters.sortPrice !== null ||
    filters.sortStock !== null ||
    filters.sortExpiry !== null ||
    filters.sortStockLevel !== null ||
    filters.onlyActive ||
    filters.onlyExpired ||
    filters.priceFrom > 0 ||
    filters.priceTo > 0;

  return { filters, setFilters, filteredProducts, hasActiveFilters };
}