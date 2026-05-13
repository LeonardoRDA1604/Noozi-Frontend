import type { MetricsCardProps } from "@/types/MetricsCard.types";

export function MetricsCard({ value, icon: Icon, title, onTitleClick }: MetricsCardProps) {
  return (
    <div className="flex w-40 h-24 flex-col justify-between rounded-lg border border-zinc-100 border-l-4 border-l-cyan-300 p-3 shadow-sm">
      <strong className="text-4xl font-bold text-zinc-900">{value}</strong>
      <div className="flex items-center gap-1.5">
        <Icon className="h-5 w-5 text-zinc-400 shrink-0" />
        {onTitleClick ? (
          <button onClick={onTitleClick} className="text-xs font-medium text-zinc-500 leading-tight text-left hover:text-red-500 hover:underline transition-colors cursor-pointer">{title}
          </button>
        ): (
        <span className="text-xs font-medium text-zinc-500 leading-tight">
          {title}
        </span>
        )}

      </div>
    </div>
  );
}
