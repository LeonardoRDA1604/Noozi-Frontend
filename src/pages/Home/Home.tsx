import { useState } from "react";
import { Ban, CalendarClock, Package, TriangleAlert, CirclePlus, Layers, Siren, CirclePause, CirclePlay, CircleDollarSign } from "lucide-react";
import { MetricsCard } from "@/components/Cards/Metrics/MetricsCard/MetricsCard";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { MetricsModal } from "@/components/Modals/MetricsModal/MetricsModal";
import { RecentActivities } from "@/components/Activities/RecentActivities/RecentActivities";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { useProductMetrics } from "@/hooks/useProductMetrics";
import type { ModalType } from "@/types/ModalType.types";

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null); // null = nenhum modal aberto
  const { metrics, isLoading, error } = useProductMetrics();

  if (error) {
    return (
      <div className="p-4">
        <p className="text-sm text-status-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 max-w-screen-xl mx-auto">

      {/* ── Linha superior no desktop: métricas + ações lado a lado ── */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Métricas — ocupa toda a largura no mobile, flex-1 no desktop */}
        <SectionTitle title="Resumo Geral" subtitle="Visão geral do seu estoque" className="flex-1">
          {/* Grid: 2 colunas no mobile, 4 no tablet, wrap no desktop */}
          <div className="flex flex-wrap gap-3">
            {/* Cards de métricas — valores vindos da API via useProductMetrics */}
            <MetricsCard icon={Package}          title="Total de cadastros"         value={isLoading ? "..." : metrics.total}              iconColor="default"          href="/products" />
            <MetricsCard icon={CalendarClock}    title="Próximos do vencimento"     value={isLoading ? "..." : metrics.expiringSoon}       iconColor="yellow"           onTitleClick={() => setActiveModal("vencimento-proximo")} />
            <MetricsCard icon={Ban}              title="Vencidos"                   value={isLoading ? "..." : metrics.expired}            iconColor="red"              onTitleClick={() => setActiveModal("expirados")} />
            <MetricsCard icon={Siren}            title="Estoque baixo"              value={isLoading ? "..." : metrics.lowStock}           iconColor="yellow"           onTitleClick={() => setActiveModal("estoque-baixo")} />
            <MetricsCard icon={TriangleAlert}    title="Estoque em excesso"         value={isLoading ? "..." : metrics.overStock}          iconColor="yellow"           onTitleClick={() => setActiveModal("estoque-excessivo")} />
            <MetricsCard icon={CirclePlay}       title="Total ativos"               value={isLoading ? "..." : metrics.active}             iconColor="green"            onTitleClick={() => setActiveModal("ativo")} />
            <MetricsCard icon={CirclePause}      title="Total inativos"             value={isLoading ? "..." : metrics.inactive}           iconColor="default"          onTitleClick={() => setActiveModal("inativo")} />
            <MetricsCard icon={CircleDollarSign} title="Custo de produtos vencidos" value={isLoading ? "..." : metrics.expiredProductCost} iconColor="red" />
          </div>
        </SectionTitle>

        {/* Ações Rápidas — coluna lateral fixa no desktop */}
        <SectionTitle title="Ações Rápidas" subtitle="Acesso direto às funções principais" className="lg:w-56 shrink-0" >
          <div className="flex flex-col gap-2">
            <ActionButton variant="primary"     label="Cadastrar Produto"           icon={CirclePlus}          href="/products/new" />
            <ActionButton variant="primary"     label="Ver Estoque"                 icon={Layers}              href="/products" />
          </div>
        </SectionTitle>

      </div>

      {/* ── Atividades Recentes — largura total ── */}
      <SectionTitle title="Atividades Recentes" subtitle="Últimas alterações no sistema" >
        <RecentActivities limit={10} deletedRetentionDays={30} />
      </SectionTitle>

      {/* Modal de métricas — abre ao clicar no título do MetricsCard (Renderiza o modal apenas quando activeModal não é null. O componente receberá o tipo para buscar os produtos corretos.) */}
      <MetricsModal type={activeModal}        onClose={() => setActiveModal(null)} />
      
    </div>
  );
}