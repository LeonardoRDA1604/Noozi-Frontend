import { ActivitySquare } from "lucide-react";
import { BaseEmptyState } from "./BaseEmptyState";
/**
 * Empty state para o painel de atividades recentes.
 */
export function EmptyActivities() {
  return (
    <BaseEmptyState>

      {/* Ícone central + texto */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-noozi-background border border-noozi-border shadow-sm">
          <ActivitySquare size={22} strokeWidth={1.5} className="text-noozi-muted" />
        </div>

        <div className="flex flex-col gap-1 max-w-[220px]">
          <p className="text-sm font-semibold text-noozi-gray-800">
            Nenhuma atividade ainda
          </p>
          <p className="text-xs text-noozi-muted leading-relaxed">
            As alterações feitas no sistema aparecerão aqui em tempo real.
          </p>
        </div>
      </div>

    </BaseEmptyState>
  );
}