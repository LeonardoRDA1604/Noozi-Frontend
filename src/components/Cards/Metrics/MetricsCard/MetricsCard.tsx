import type { MetricsCardProps } from "@/types/MetricsCard.types";


export function MetricsCard({ icon: Icon, title, value }: MetricsCardProps) {
  return (
    <div className="flex w-40 flex-col gap-4 rounded-lg border border-zinc-100 p-3 shadow-sm">
      <Icon className="h-7 w-7 text-black" />
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-medium text-black">{title}</span>
        <strong>
          <span className="text-3xl font-bold text-black">{value}</span>
        </strong>
      </div>
    </div>
  );
}