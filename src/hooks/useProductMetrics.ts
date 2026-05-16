import { useEffect, useState } from "react";
import { productService } from "@/services/product.service";
import type { Product } from "@/types/Product.types";

interface ProductMetrics {
  total: number;
  lowStock: number;
  expiringSoon: number;
  expired: number;
}

export function useProductMetrics() {
  const [metrics, setMetrics] = useState<ProductMetrics>({
    total: 0, lowStock: 0, expiringSoon: 0, expired: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        setIsLoading(true);
        // Dispara as 4 requisições em paralelo — mais rápido que sequencial
        const [all, lowStock, expiringSoon, expired] = await Promise.all([
          productService.getAll(),
          productService.getLowStock(),
          productService.getExpiringSoon(),
          productService.getExpired(),
        ]);
        // Armazena apenas as contagens — os produtos em si não são necessários aqui
        setMetrics({
          total: all.length,
          lowStock: lowStock.length,
          expiringSoon: expiringSoon.length,
          expired: expired.length,
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