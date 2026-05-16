export interface NewProductForm{
    name: string;
    brand: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    price: string;
    date: string;
    batch: string;
    sku: string;
    status: boolean;
    image: File | null;
}