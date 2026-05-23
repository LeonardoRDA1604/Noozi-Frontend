import { PackagePlus, PackageMinus, RefreshCw } from "lucide-react";
import { useRecentActivities } from "@/hooks/useRecentActivities";
import type { RecentActivitiesProps, RecentActivity } from "@/types/ActivityLog.types";
import type { ActivityType } from "@/types/ActivityLog.types";

// Tailwind requer classes completas — não concatenar dinamicamente
const activityConfig: Record<ActivityType, {
  label: string;
  icon: React.ElementType;
  iconClass: string;
  dotClass: string;
}> = {
  created: {
    label:     "Produto cadastrado",
    icon:      PackagePlus,
    iconClass: "text-status-success",
    dotClass:  "bg-status-success",
  },
  updated: {
    label:     "Produto atualizado",
    icon:      RefreshCw,
    iconClass: "text-noozi-sky_blue",
    dotClass:  "bg-noozi-sky_blue",
  },
  deleted: {
    label:     "Produto removido",
    icon:      PackageMinus,
    iconClass: "text-status-danger",
    dotClass:  "bg-status-danger",
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
    <li className="flex items-center gap-3 p-3 rounded-lg border border-noozi-border bg-noozi-surface">

      {/* Ícone do tipo de atividade */}
      <div className="shrink-0 flex items-center justify-center h-8 w-8 rounded-md bg-white border border-noozi-border">
        <Icon size={15} className={config.iconClass} />
      </div>

      {/* Informações */}
      <div className="flex flex-col flex-1 min-w-0">
        <p className="text-xs font-medium text-noozi-text truncate">
          {activity.product_name}
        </p>
        <p className="text-[10px] text-noozi-muted">
          {config.label} · {formatDateTime(activity.occurred_at)}
        </p>
      </div>

      {/* Indicador de cor por tipo */}
      <div className={`shrink-0 w-2 h-2 rounded-full ${config.dotClass}`} />

    </li>
  );
}

export function RecentActivities({
  limit = 5,
  deletedRetentionDays = 30,
}: RecentActivitiesProps) {
  const { activities, isLoading, error } = useRecentActivities({
    limit,
    deletedRetentionDays,
  });

  if (isLoading) {
    return <p className="text-sm text-noozi-muted">Carregando atividades...</p>;
  }

  if (error) {
    return <p className="text-sm text-status-danger">{error}</p>;
  }

  if (activities.length === 0) {
    return (
      <p className="text-sm text-noozi-muted">Nenhuma atividade registrada.</p>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {activities.map((activity) => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}