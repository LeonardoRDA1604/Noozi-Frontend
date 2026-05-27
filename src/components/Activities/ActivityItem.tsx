import { ACTIVITY_CONFIG } from "@/constants/activityConfig";
import type { RecentActivity } from "@/types/ActivityLog.types";
import { formatDateTime } from "@/utils/date/formatDateTime";
import { StatusBadge } from "@/components/Status/StatusBadge";

export function ActivityItem({ activity }: { activity: RecentActivity }) {
  const config = ACTIVITY_CONFIG[activity.activity_type];
  const Icon   = config.icon;

  return (
    <li className="flex items-center gap-3 px-4 py-3 bg-noozi-background rounded-xl border border-noozi-border hover:border-noozi-muted/40 hover:shadow-sm transition-all duration-150">
      {/* Ícone do tipo de atividade */}
      <div className="shrink-0 flex items-center justify-center h-9 w-9 rounded-lg bg-noozi-surface border border-noozi-border">
        <Icon size={18} className={config.iconClass} />
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
      <StatusBadge badgeClass={config.badgeClass} badgeText={config.badgeText} />
    </li>
  );
}