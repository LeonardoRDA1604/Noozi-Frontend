export interface NewProductForm {
    sku: string;
    name: string;
    description?: string;
    category?: string;
    brand?: string;
    item_price: number;
    stock_quantity: string;
    unit_measure?: string;
    low_stock_level?: number;
    over_stock_level?: number;
    batch_code?: string;
    expiration_date?: string;
}