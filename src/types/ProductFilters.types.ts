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
  priceFrom: string;
  priceTo: string;
}

export const DEFAULT_FILTERS: ProductFilters = {
  sortBy: null,
  onlyActive: false,
  priceFrom: "",
  priceTo: "",
};