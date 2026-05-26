export type SortBy =
  | "az"
  | "za"
  | "price-high"
  | "price-low"
  | "stock-high"
  | "stock-low"
  | "expiry-nearest"
  | "expiry-furthest"
  | null;

export interface ProductFilters {
  sortBy: SortBy;
  onlyActive: boolean;
  onlyExpired: boolean;
  priceFrom: number;
  priceTo: number;
}

export const DEFAULT_FILTERS: ProductFilters = {
  sortBy: null,
  onlyActive: false,
  onlyExpired: false,
  priceFrom: 0,
  priceTo: 0,
};