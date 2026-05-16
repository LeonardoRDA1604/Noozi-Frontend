export interface Product {
    id_produto: string;
    sku: string;
    name: string;
    description?: string;
    category?: string;
    brand?: string;
    item_price: number;
    stock_quantity: number;
    unit_measure?: string;
    min_level?: number;
    max_level?: number;
    batch_code?: string;
    expiration_date?: string;
    is_active: boolean;
    created_at: string;
    update_at: string;
}

// Usado no POST - Sem id, created_at, updated_at (gerados pelo servidor)
export type CreateProductDTO = Omit<Product, "id_product" | "created_at" | "updated_at">;

// Usado no PUT - todos os campos opcionais exceto id
export type UpdateProductDTO = Partial<CreateProductDTO>