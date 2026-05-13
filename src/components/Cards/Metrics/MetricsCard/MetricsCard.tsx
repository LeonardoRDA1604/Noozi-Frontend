import { Link } from "react-router-dom";
import type { MetricsCardProps } from "@/types/MetricsCard.types";

// Cores dos ícones
const iconColorMap = {
  default: "text-zinc-400",
  green: "text-emerald-400",
  yellow: "text-yellow-400",
  red: "text-red-400",
};

export function MetricsCard({
  value,
  icon: Icon,
  title,
  iconColor = "default",
  onTitleClick,
  href,
}: MetricsCardProps) {

  // Estilização do texto do hyperlink
  const clickableTitleStyle =
    "text-xs font-medium text-zinc-500 leading-tight text-left hover:text-blue-500 hover:underline transition-colors cursor-pointer";

  // Condicional ternário para priorização de renderização de Link (navegação) > button (Modal) > span (sem ação, texto normal) 
  const titleElement = href ? (
    <Link to={href} className={clickableTitleStyle}>
      {title}
    </Link>
  ) : onTitleClick ? (
    <button onClick={onTitleClick} className={clickableTitleStyle}>
      {title}
    </button>
  ) : (
    <span className="text-xs font-medium text-zinc-500 leading-tight">
      {title}
    </span>
  );

  return (
    <div className="flex w-40 h-24 flex-col justify-between rounded-lg border border-zinc-100 border-l-4 border-l-blue-500 p-3 shadow-sm">
      <strong className="text-4xl font-bold text-zinc-900">{value}</strong>
      <div className="flex items-center gap-1.5">
        <Icon className={`h-5 w-5 ${iconColorMap[iconColor]} shrink-0`} />
        {titleElement}
      </div>
    </div>
  );
}
