import { useEffect, useState } from "react";
import { productService } from "@/services/product.service";
import type { Product } from "@/types/Product.types";
import { structureSearch } from "@/constants/MiniSearch";

// Define o contrato de retorno do hook — deixa explícito para quem usar
interface UseProductsReturn {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;      // permite recarregar os dados manualmente
}

export function useProducts(): UseProductsReturn {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
  // Declarada fora do useEffect para poder ser exposta como refetch
  async function fetchProducts() {
    try {
      setIsLoading(true);
      setError(null);
      const data = await productService.getAll();
      setProducts(data);

      structureSearch.removeAll();
      structureSearch.addAll(data);

    } catch {
      setError("Erro ao carregar produtos.");
    } finally {
      // Executa sempre — garante que isLoading volta para false
      setIsLoading(false);
    }
  }

  // Executa fetchProducts uma vez quando o componente monta
  useEffect(() => {
    fetchProducts();
  }, []);    // array vazio = só executa na montagem

  return { products, isLoading, error, refetch: fetchProducts };
}