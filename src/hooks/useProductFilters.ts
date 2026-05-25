import { useState, useMemo } from "react";
import type { Product } from "@/types/Product.types";
import { type ProductFilters, DEFAULT_FILTERS } from "@/types/ProductFilters.types";

export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Somente ativos
    if (filters.onlyActive) {
      result = result.filter((p) => p.is_active);
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

      // Exibe apenas produtos COM validade cadastrada, do mais próximo ao mais distante
      case "expiry-nearest":
        result = result.filter((p) => Boolean(p.expiration_date));
        result.sort(
          (a, b) =>
            new Date(a.expiration_date!).getTime() -
            new Date(b.expiration_date!).getTime()
        );
        break;

      // Exibe apenas produtos COM validade cadastrada, do mais distante ao mais próximo
      case "expiry-furthest":
        result = result.filter((p) => Boolean(p.expiration_date));
        result.sort(
          (a, b) =>
            new Date(b.expiration_date!).getTime() -
            new Date(a.expiration_date!).getTime()
        );
        break;

      // Exibe apenas produtos com validade vencida (expiration_date < hoje)
      case "expiry-expired": {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        result = result.filter(
          (p) => p.expiration_date && new Date(p.expiration_date) < today
        );
        result.sort(
          (a, b) =>
            new Date(a.expiration_date!).getTime() -
            new Date(b.expiration_date!).getTime()
        );
        break;
      }
    }

    return result;
  }, [products, filters]);

  const hasActiveFilters =
    filters.sortBy !== null ||
    filters.onlyActive ||
    filters.priceFrom > 0 ||
    filters.priceTo > 0;

  return { filters, setFilters, filteredProducts, hasActiveFilters };
}