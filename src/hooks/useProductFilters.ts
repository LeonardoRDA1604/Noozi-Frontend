import { useState, useMemo } from "react";
import type { Product } from "@/types/Product.types";
import { type ProductFilters, DEFAULT_FILTERS } from "@/types/ProductFilters.types";

export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Somente ativos
    if (filters.onlyActive) {
      result = result.filter((p) => p.is_active);
    }

    // Filtro de vencidos vs. válidos:
    // - onlyExpired=true  → apenas produtos com validade JÁ expirada
    // - sortBy de validade sem onlyExpired → apenas produtos com validade AINDA válida
    // - nenhum dos dois → nenhum filtro de validade aplicado
    if (filters.onlyExpired) {
      result = result.filter(
        (p) => p.expiration_date && new Date(p.expiration_date) < today
      );
    } else if (
      filters.sortBy === "expiry-nearest" ||
      filters.sortBy === "expiry-furthest"
    ) {
      result = result.filter(
        (p) => p.expiration_date && new Date(p.expiration_date) >= today
      );
    }

    // Faixa de preço — converte centavos para reais na comparação
    if (filters.priceFrom > 0) {
      result = result.filter((p) => p.item_price >= filters.priceFrom / 100);
    }
    if (filters.priceTo > 0) {
      result = result.filter((p) => p.item_price <= filters.priceTo / 100);
    }

    // Ordenação
    switch (filters.sortBy) {
      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
        break;

      case "za":
        result.sort((a, b) => b.name.localeCompare(a.name, "pt-BR"));
        break;

      case "price-high":
        result.sort((a, b) => b.item_price - a.item_price);
        break;

      case "price-low":
        result.sort((a, b) => a.item_price - b.item_price);
        break;

      case "stock-high":
        result.sort((a, b) => b.stock_quantity - a.stock_quantity);
        break;

      case "stock-low":
        result.sort((a, b) => a.stock_quantity - b.stock_quantity);
        break;

      case "expiry-nearest":
        result.sort((a, b) => {
          if (!a.expiration_date) return 1;
          if (!b.expiration_date) return -1;

          const dateA = new Date(a.expiration_date).getTime();
          const dateB = new Date(b.expiration_date).getTime();
          const todayMs = today.getTime();

          if (filters.onlyExpired) {
            // Vencidos: "mais próximo" = venceu mais recentemente (data MAIOR → diff menor)
            return Math.abs(dateA - todayMs) - Math.abs(dateB - todayMs);
          }
          // Válidos: "mais próximo" = vence mais cedo (data MENOR)
          return dateA - dateB;
        });
        break;

      case "expiry-furthest":
        result.sort((a, b) => {
          if (!a.expiration_date) return 1;
          if (!b.expiration_date) return -1;

          const dateA = new Date(a.expiration_date).getTime();
          const dateB = new Date(b.expiration_date).getTime();
          const todayMs = today.getTime();

          if (filters.onlyExpired) {
            // Vencidos: "mais distante" = venceu há mais tempo (data MENOR → diff maior)
            return Math.abs(dateB - todayMs) - Math.abs(dateA - todayMs);
          }
          // Válidos: "mais distante" = vence mais tarde (data MAIOR)
          return dateB - dateA;
        });
        break;
    }

    return result;
  }, [products, filters]);

  const hasActiveFilters =
    filters.sortBy !== null ||
    filters.onlyActive ||
    filters.onlyExpired ||
    filters.priceFrom > 0 ||
    filters.priceTo > 0;

  return { filters, setFilters, filteredProducts, hasActiveFilters };
}