import { PackagePlus, PackageMinus, RefreshCw } from "lucide-react";
import { useRecentActivities } from "@/hooks/useRecentActivities";
import type { RecentActivitiesProps, RecentActivity, ActivityType } from "@/types/ActivityLog.types";

const activityConfig: Record<ActivityType, {
  label: string;
  icon: React.ElementType;
  iconClass: string;
  badgeClass: string;
  badgeText: string;
}> = {
  created: {
    label:      "Produto cadastrado",
    icon:       PackagePlus,
    iconClass:  "text-status-success",
    badgeClass: "bg-status-success/10 text-status-success",
    badgeText:  "Cadastrado",
  },
  updated: {
    label:      "Produto atualizado",
    icon:       RefreshCw,
    iconClass:  "text-noozi-sky_blue",
    badgeClass: "bg-noozi-sky_blue/10 text-noozi-sky_blue",
    badgeText:  "Atualizado",
  },
  deleted: {
    label:      "Produto removido",
    icon:       PackageMinus,
    iconClass:  "text-status-danger",
    badgeClass: "bg-status-danger/10 text-status-danger",
    badgeText:  "Removido",
  },
};

// Formata ISO → "01/01/2024 às 14:30"
function formatDateTime(iso: string): string {
  return new Date(iso)
    .toLocaleString("pt-BR", {
      day:    "2-digit",
      month:  "2-digit",
      year:   "numeric",
      hour:   "2-digit",
      minute: "2-digit",
    })
    .replace(",", " às");
}

function ActivityItem({ activity }: { activity: RecentActivity }) {
  const config = activityConfig[activity.activity_type];
  const Icon   = config.icon;

  return (
    <li className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-noozi-border hover:border-noozi-gray-300 hover:shadow-sm transition-all duration-150">
      {/* Ícone do tipo de atividade */}
      <div className="shrink-0 flex items-center justify-center h-9 w-9 rounded-lg bg-noozi-surface border border-noozi-border">
        <Icon size={16} className={config.iconClass} /> AUMENTAR SIZE (TAVA 25)
      </div>

      {/* Nome + data */}
      <div className="flex flex-col flex-1 min-w-0 gap-0.5">
        <p className="text-sm font-medium text-noozi-text truncate leading-tight">
          {activity.product_name}
        </p>
        <p className="text-[11px] text-noozi-muted leading-tight">
          {formatDateTime(activity.occurred_at)}
        </p>
      </div>

      {/* Badge de tipo */}
      <span className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${config.badgeClass}`}>
        {config.badgeText}
      </span>
    </li>
  );
}

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