import { useState } from "react";
import { Ban, CalendarClock, Package, TriangleAlert, CirclePlus, Layers, Siren, CirclePause, CirclePlay } from "lucide-react";
import { MetricsCard } from "@/components/Cards/Metrics/MetricsCard/MetricsCard";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { MetricsModal } from "@/components/Modals/MetricsModal/MetricsModal";
import { useProductMetrics } from "@/hooks/useProductMetrics";
import type { ModalType } from "@/types/ModalType.types";

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null); // null = nenhum modal aberto
  const { metrics, isLoading, error } = useProductMetrics();

  if (error) {
    return <p className="p-4 text-status-danger">{error}</p>;
  }

  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Cards de métricas — valores vindos da API via useProductMetrics */}
      <div className="flex flex-wrap gap-4">
        <MetricsCard icon={Package}       title="Total de cadastros"      value={isLoading ? "..." : metrics.total}         href="/products" />
        <MetricsCard icon={CalendarClock} title="Próximos do vencimento"  value={isLoading ? "..." : metrics.expiringSoon}  iconColor="yellow" onTitleClick={() => setActiveModal("vencimento-proximo")} />
        <MetricsCard icon={Ban}           title="Vencidos"                value={isLoading ? "..." : metrics.expired}       iconColor="red"    onTitleClick={() => setActiveModal("expirados")} />
        <MetricsCard icon={Siren}         title="Estoque baixo"           value={isLoading ? "..." : metrics.lowStock}      iconColor="yellow" onTitleClick={() => setActiveModal("estoque-baixo")} />
        <MetricsCard icon={TriangleAlert} title="Estoque em excesso"      value={isLoading ? "..." : metrics.overStock}     iconColor="yellow" onTitleClick={() => setActiveModal("estoque-excessivo")} />
        <MetricsCard icon={CirclePlay}    title="Total ativos"            value={isLoading ? "..." : metrics.active}        iconColor="green"  onTitleClick={() => setActiveModal("ativo")} />
        <MetricsCard icon={CirclePause}   title="Total inativos"          value={isLoading ? "..." : metrics.inactive}      iconColor="default" onTitleClick={() => setActiveModal("inativo")} />
      </div>

      {/* Botões de Ações rápidas */}
      <div className="flex flex-col gap-2 max-w-xs">
        <ActionButton variant="primary" label="Cadastro de Produto" icon={CirclePlus} href="/products/new" />
        <ActionButton variant="primary" label="Visualizar Estoque"  icon={Layers}     href="/products" />
      </div>

      {/* Modal de métricas — abre ao clicar no título do MetricsCard (Renderiza o modal apenas quando activeModal não é null. O componente receberá o tipo para buscar os produtos corretos.) */}
      <MetricsModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}