import { api } from "@/lib/api";
import type { Product, CreateProductDTO, UpdateProductDTO } from "@/types/Product.types";
import { formatCurrency } from "@/utils/currency/formatCurrency";
import { activityLogService } from "@/services/activityLog.service";

export const productService = {
  // Retorna todos os produtos
  getAll: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data;
  },

  // Retorna um produto pelo id do json-server
  // Ao migrar para API real: trocar para /products/:id_product
  getById: async (id: string): Promise<Product> => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },

  // Cria um novo produto com id_product auto-incrementado
  // Ao migrar para API real: remover o bloco de nextId — o servidor vai gerar id_product
  create: async (payload: CreateProductDTO): Promise<Product> => {
    const { data: allProducts } = await api.get("/products");

    const nextId =
      allProducts.length > 0
        ? String(
            Math.max(
              ...allProducts
                .map((p: Product) => Number(p.id_product))
                .filter((n: number) => !isNaN(n)) // ignora produtos sem id_product válido
            ) + 1
          )
        : "1";

    const now = new Date().toISOString();

    const { data } = await api.post("/products", {
      id_product: nextId,
      ...payload,
      item_price: parseFloat(payload.item_price.toFixed(2)),
      created_at: now,
      updated_at: now,
    });

    return data;
  },

  // Atualiza um produto — PATCH preserva campos não enviados — apenas os campos enviados no payload são alterados
  // Ao migrar para API real: continuar usando PATCH /products/:id_product
  update: async (id: string, payload: UpdateProductDTO): Promise<Product> => {
    const now = new Date().toISOString();
    const { data } = await api.patch(`/products/${id}`, {
      ...payload,
      updated_at: now, // atualiza o timestamp automaticamente
    });
    return data;
  },

  // Remove um produto pelo id e salva snapshot no activity_logs antes de deletar
  // Ao migrar para API real: trocar product.id por product.id_product na URL
  remove: async (id: string, retentionDays = 30): Promise<void> => {
    // Busca nome antes de deletar — após o delete o produto não existe mais
    const { data: product } = await api.get(`/products/${id}`);

    await api.delete(`/products/${id}`);

    // Calcula até quando o log fica visível nas atividades recentes
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + retentionDays);

    // Guarda snapshot mínimo do produto deletado
    await activityLogService.create({
      id_product:    product.id_product,
      product_name:  product.name,
      activity_type: "deleted",
      occurred_at:   new Date().toISOString(),
      expires_at:    expiresAt.toISOString(),
    });
  },

  // Retorna produtos com estoque abaixo ou igual ao nível mínimo
  getLowStock: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data.filter(
      (p: Product) => p.stock_quantity <= (p.low_stock_level ?? 0),
    );
  },

  // Retorna produtos com estoque em excesso ou igual ao nível máximo
  getOverStock: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data.filter(
      (p: Product) => p.over_stock_level != null && p.stock_quantity >= p.over_stock_level,
    );
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
      return new Date(p.expiration_date) < today; // venceu antes do dia atual (hoje)
    });
  },

    // Retorna o custo total dos produtos vencidos (preço do item * quantidade em estoque)
  getExpiredProductCost: async (): Promise<string> => {
    const { data } = await api.get("/products");
    const today = new Date();
    const totalCost = data
      .filter((p: Product) => {
        if (!p.expiration_date) return false;
        return new Date(p.expiration_date) < today;
      })
      .reduce((total: number, p: Product) => {
        return total + (p.item_price || 0) * (p.stock_quantity || 0); // 0 é o valor inicial da soma
      }, 0);
    return formatCurrency(totalCost);
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