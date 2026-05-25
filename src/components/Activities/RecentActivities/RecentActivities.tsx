import { useRecentActivities } from "@/hooks/useRecentActivities";
import type { RecentActivitiesProps } from "@/types/ActivityLog.types";
import { ActivityItem } from "@/components/Activities/ActivityItem";
import { RefreshCw } from "lucide-react";

export function RecentActivities({ limit = 5, deletedRetentionDays = 30 }: RecentActivitiesProps) {
  const { activities, isLoading, error } = useRecentActivities({ limit, deletedRetentionDays });

  return (
    <div className="flex flex-col gap-2">

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center gap-2 py-6 justify-center">
          <RefreshCw size={14} className="animate-spin text-noozi-muted" />
          <p className="text-sm text-noozi-muted">Carregando atividades...</p>
        </div>
      )}

      {/* Erro — dentro da estrutura, não substitui ela */}
      {error && (
        <div className="px-4 py-3 rounded-xl border border-status-danger/20 bg-status-danger/5">
          <p className="text-sm text-status-danger">{error}</p>
        </div>
      )}

      {/* Lista vazia */}
      {!isLoading && !error && activities.length === 0 && (
        <div className="px-4 py-6 rounded-xl border border-noozi-border bg-white text-center">
          <p className="text-sm text-noozi-muted">Nenhuma atividade registrada.</p>
        </div>
      )}

      {/* Lista de atividades */}
      {!isLoading && !error && activities.length > 0 && (
        <ul className="flex flex-col gap-2">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </ul>
      )}
    </div>
  );
}