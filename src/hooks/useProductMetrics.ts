import { useEffect, useState } from "react";
import { productService } from "@/services/product.service";
import type { ProductMetrics } from "@/types/ProductMetrics.types";
import type { Product } from "@/types/Product.types";

export function useProductMetrics() {
  const [metrics, setMetrics] = useState<ProductMetrics>({
    total: 0, lowStock: 0, overStock: 0, expiringSoon: 0, expired: 0, active: 0, inactive: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        setIsLoading(true);
        // Dispara todas as requisições em paralelo — mais rápido que sequencial
        const [all, lowStock, overStock, expiringSoon, expired, active, inactive] = await Promise.all([
          productService.getAll(),
          productService.getLowStock(),
          productService.getOverStock(),
          productService.getExpiringSoon(),
          productService.getExpired(),
          productService.getActive(),
          productService.getInactive()
        ]);
        // Armazena apenas as contagens — os produtos em si não são necessários aqui
        setMetrics({
          total: all.length,
          lowStock: lowStock.length,
          overStock: overStock.length,
          expiringSoon: expiringSoon.length,
          expired: expired.length,
          active: active.length,
          inactive: inactive.length,
        });
      } catch {
        setError("Erro ao carregar métricas.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMetrics();
  }, []);      // executa uma vez na montagem do componente

  return { metrics, isLoading, error };
}