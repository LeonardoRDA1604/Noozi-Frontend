import { useEffect, useState } from "react";
import { productService } from "@/services/product.service";
import { activityLogService } from "@/services/activityLog.service";
import type { RecentActivity, RecentActivitiesProps } from "@/types/ActivityLog.types";
import type { Product } from "@/types/Product.types";

export function useRecentActivities({ limit = 5, deletedRetentionDays = 30 }: RecentActivitiesProps = {}) {
  const [activities, setActivities] = useState<RecentActivity[]>([]);
  const [isLoading, setIsLoading]   = useState(true);
  const [error, setError]           = useState<string | null>(null);

  async function fetchActivities() {
    try {
      setIsLoading(true);
      setError(null);

      // Limpa logs expirados antes de buscar
      await activityLogService.purgeExpired();

      // Busca produtos e logs de delete em paralelo
      const [products, deletedLogs] = await Promise.all([
        productService.getAll(),
        activityLogService.getAll(),
      ]);

      // Monta atividades de created — usa created_at do produto
      const createdActivities: RecentActivity[] = products.map((p: Product) => ({
        id:            `created-${p.id_product}`,
        id_product:    p.id_product,
        product_name:  p.name,
        activity_type: "created" as const,
        occurred_at:   p.created_at,
      }));

      // Monta atividades de updated — só se updated_at diferente de created_at
      const updatedActivities: RecentActivity[] = products
        .filter((p: Product) => p.updated_at !== p.created_at)
        .map((p: Product) => ({
          id:            `updated-${p.id_product}`,
          id_product:    p.id_product,
          product_name:  p.name,
          activity_type: "updated" as const,
          occurred_at:   p.updated_at,
        }));

      // Monta atividades de deleted — vem dos activity_logs
      const deletedActivities: RecentActivity[] = deletedLogs.map((log) => ({
        id:            log.id,
        id_product:    log.id_product,
        product_name:  log.product_name,
        activity_type: "deleted" as const,
        occurred_at:   log.occurred_at,
      }));

      // Junta tudo, ordena por data decrescente e limita
      const all = [...createdActivities, ...updatedActivities, ...deletedActivities]
        .sort((a, b) => new Date(b.occurred_at).getTime() - new Date(a.occurred_at).getTime())
        .slice(0, limit);

      setActivities(all);
    } catch {
      setError("Erro ao carregar atividades.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchActivities();
  }, [limit, deletedRetentionDays]);

  return { activities, isLoading, error, refetch: fetchActivities };
}