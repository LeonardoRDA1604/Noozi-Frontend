export interface Product {
  id_product: string;
  sku: string;
  name: string;
  description?: string;
  category?: string;
  brand?: string;
  item_price: number;
  stock_quantity: number;
  unit_measure?: string;
  low_stock_level?: number;
  over_stock_level?: number;
  batch_code?: string;
  expiration_date?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  id: string; // chave do json-server — remover ao migrar para API real (temporário)
}

// POST — sem id, id_product, created_at, updated_at (gerados pelo servidor)
export type CreateProductDTO = Omit<Product, "id" | "id_product" | "created_at" | "updated_at">;

// PATCH — todos os campos opcionais exceto as chaves
export type UpdateProductDTO = Partial<Omit<Product, "id" | "id_product" | "created_at" | "updated_at">>;

// // PUT - todos os campos opcionais exceto id
// export type UpdateProductDTO = Partial<CreateProductDTO>