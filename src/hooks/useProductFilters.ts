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

    // Faixa de preço
    const from = parseFloat(filters.priceFrom);
    const to = parseFloat(filters.priceTo);

    if (!isNaN(from)) {
      result = result.filter((p) => p.item_price >= from);
    }
    if (!isNaN(to)) {
      result = result.filter((p) => p.item_price <= to);
    }

    // Ordenação — apenas uma ativa por vez
    switch (filters.sortBy) {
      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
        break;
      case "za":
        result.sort((a, b) => b.name.localeCompare(a.name, "pt-BR"));
        break;
      case "stock-high":
        result.sort((a, b) => b.stock_quantity - a.stock_quantity);
        break;
      case "stock-low":
        result.sort((a, b) => a.stock_quantity - b.stock_quantity);
        break;
      case "expiry-nearest":
        result.sort((a, b) => {
          // Produtos sem validade vão para o fim
          if (!a.expiration_date) return 1;
          if (!b.expiration_date) return -1;
          return new Date(a.expiration_date).getTime() - new Date(b.expiration_date).getTime();
        });
        break;
      case "expiry-furthest":
        result.sort((a, b) => {
          if (!a.expiration_date) return 1;
          if (!b.expiration_date) return -1;
          return new Date(b.expiration_date).getTime() - new Date(a.expiration_date).getTime();
        });
        break;
    }

    return result;
  }, [products, filters]);

  const hasActiveFilters =
    filters.sortBy !== null ||
    filters.onlyActive ||
    filters.priceFrom !== "" ||
    filters.priceTo !== "";

  return {
    filters,
    setFilters,
    filteredProducts,
    hasActiveFilters,
  };
}