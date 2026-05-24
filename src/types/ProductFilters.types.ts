export type SortBy =
  | "az"
  | "za"
  | "stock-high"
  | "stock-low"
  | "expiry-nearest"
  | "expiry-furthest"
  | null;

export interface ProductFilters {
  sortBy: SortBy;
  onlyActive: boolean;
  priceFrom: number; // em centavos
  priceTo: number;   // em centavos
}

export const DEFAULT_FILTERS: ProductFilters = {
  sortBy: null,
  onlyActive: false,
  priceFrom: 0,
  priceTo: 0,
};