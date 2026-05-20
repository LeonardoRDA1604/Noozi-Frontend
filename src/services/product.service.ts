import { api } from "@/lib/api";
import type {
  Product,
  CreateProductDTO,
  UpdateProductDTO,
} from "@/types/Product.types";

export const productService = {
  // Retorna todos os produtos
  getAll: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data;
  },

  // Retorna um produto pelo id
  getById: async (id: string): Promise<Product> => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },

  // Cria um novo produto — id_product, created_at e updated_at são gerados pelo servidor
  create: async (payload: CreateProductDTO): Promise<Product> => {
    const { data } = await api.post("/products", payload);
    return data;
  },

  // Atualiza um produto — apenas os campos enviados no payload são alterados
  update: async (id: string, payload: UpdateProductDTO): Promise<Product> => {
    const { data } = await api.put(`/products/${id}`, payload);
    return data;
  },

  // Remove um produto pelo id
  remove: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`);
  },

  // Retorna produtos com estoque abaixo ou igual ao nível mínimo
  // ?? 0 — se low_stock_level não estiver definido, considera 0 como limite
  getLowStock: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data.filter(
      (p: Product) => p.stock_quantity <= (p.low_stock_level ?? 0),
    );
  },

  // Retorna produtos com estoque em excesso ou igual ao nível máximo
  getOverStock: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data.filter((p: Product) => p.stock_quantity >= p.over_stock_level);
  },

  // Retorna produtos que vencem dentro do número de dias informado (padrão: 30)
  getExpiringSoon: async (days = 30): Promise<Product[]> => {
    const { data } = await api.get("/products");
    const limit = new Date();
    limit.setDate(limit.getDate() + days);
    return data.filter((p: Product) => {
      if (!p.expiration_date) return false;
      return new Date(p.expiration_date) <= limit; // vence antes do limite
    });
  },

  // Retorna produtos cuja data de validade já passou
  getExpired: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    const today = new Date();
    return data.filter((p: Product) => {
      if (!p.expiration_date) return false;
      return new Date(p.expiration_date) < today; // venceu antes de hoje
    });
  },

  // Retorna produtos ativos
  getActive: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data.filter((p: Product) => p.is_active === true);
  },

  // Retorna produtos inativos
  getInactive: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data.filter((p: Product) => p.is_active === false);
  },
};
