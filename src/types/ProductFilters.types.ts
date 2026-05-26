export type SortAlpha = "az" | "za" | null;
export type SortPrice = "price-high" | "price-low" | null;
export type SortStock = "stock-high" | "stock-low" | null;
export type SortExpiry = "expiry-nearest" | "expiry-furthest" | null;
export type SortStockLevel = "stock-level-critical" | "stock-level-normal" | null;

export interface ProductFilters {
  sortAlpha: SortAlpha;
  sortPrice: SortPrice;
  sortStock: SortStock;
  sortExpiry: SortExpiry;
  sortStockLevel: SortStockLevel;
  onlyActive: boolean;
  onlyExpired: boolean;
  priceFrom: number;
  priceTo: number;
}

export const DEFAULT_FILTERS: ProductFilters = {
  sortAlpha: null,
  sortPrice: null,
  sortStock: null,
  sortExpiry: null,
  sortStockLevel: null,
  onlyActive: false,
  onlyExpired: false,
  priceFrom: 0,
  priceTo: 0,
};