import { Link } from "react-router-dom";
import type { MetricsCardProps } from "@/types/MetricsCard.types";

// Cores dos ícones
const iconColorMap = {
  default: "text-noozi-muted",
  green:   "text-status-success",
  yellow:  "text-status-warning",
  red:     "text-status-danger",
};

// Ajusta o tamanho da fonte dinamicamente, com base na quantidade de caracteres para evitar quebra de layout em valores muito longos
function getValueFontSize(value: string | number): string {
  const length = String(value).length;
  if (length <= 6)  return "text-3xl md:text-4xl";
  if (length <= 9)  return "text-2xl md:text-3xl";
  if (length <= 12) return "text-xl md:text-2xl";
  return "text-base md:text-lg";
}

export function MetricsCard({ value, icon: Icon, title, iconColor = "default", onTitleClick, href }: MetricsCardProps) {
  // Estilização do texto do hyperlink. Aplicado em Link e button (extraído para evitar duplicação)
  const clickableTitleStyle = "text-xs font-medium text-noozi-muted leading-tight text-left hover:text-noozi-bright_blue hover:underline transition-colors cursor-pointer";

  // Condicional ternário para priorização de renderização de Link. ── Prioridade: navegação (href) > ação/modal (onTitleClick) > texto estático
  const titleElement = href ? (
    <Link to={href} className={clickableTitleStyle}>{title}</Link>
  ) : onTitleClick ? (
    <button onClick={onTitleClick} className={clickableTitleStyle}>{title}</button>
  ) : (
    <span className="text-xs font-medium text-noozi-muted leading-tight">{title}</span>
  );

  return (
    <div className="bg-noozi-background flex flex-col justify-between rounded-xl border border-noozi-border border-l-4 border-l-noozi-bright_blue p-3 shadow-card w-[calc(50%-8px)] sm:w-40 md:w-44 h-24 md:h-28 transition-shadow hover:shadow-md">
      <strong className={`${getValueFontSize(value)} font-bold text-noozi-text leading-none`}>{value}</strong>
      <div className="flex items-center gap-1.5 mt-2">
        <Icon className={`h-4 w-4 shrink-0 ${iconColorMap[iconColor]}`} />
        {titleElement}
      </div>
    </div>
  );
}