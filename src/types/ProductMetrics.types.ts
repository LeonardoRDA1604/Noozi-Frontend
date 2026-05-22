export interface ProductMetrics {
  total: number;
  lowStock: number;
  overStock: number;
  expiringSoon: number;
  expired: number;
  active: number;
  inactive: number;
  expiredProductCost: string
}