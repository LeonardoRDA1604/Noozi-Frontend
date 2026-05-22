import { useState } from "react";
import {
  Ban,
  CalendarClock,
  Package,
  TriangleAlert,
  CirclePlus,
  Layers,
  Siren,
  CirclePause,
  CirclePlay,
  CircleDollarSign,
  
} from "lucide-react";
import { MetricsCard } from "@/components/Cards/Metrics/MetricsCard/MetricsCard";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { useProductMetrics } from "@/hooks/useProductMetrics";

// Restringe os valores possíveis do modal — evita strings arbitrárias
type ModalType = "estoque-baixo" | "estoque-excessivo" | "vencimento-proximo" | "expirados" | "ativo" | "inativo" | "custo-produtos-expirados" | null;

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null); // null = nenhum modal aberto
  const { metrics, isLoading, error } = useProductMetrics();

  if (error) {
    return <p className="p-4 text-status-danger">{error}</p>;
  }

  return (
    <>
      <div className="p-4">
        {/* <h1 className="text-2xl font-bold text-noozi-text mb-6"></h1> */}
        <h1 className="flex items-center justify-center text-4xl font-bold text-noozi-bright_blue">
          Noozi/home-page
        </h1>

        {/* Cards de métricas — valores vindos da API via useProductMetrics */}
        <div className="flex flex-wrap gap-4 mt-6">
          {/* Navega para listagem completa de produtos */}
          <MetricsCard
            icon={Package}
            title="Total de cadastros"
            value={isLoading ? "..." : metrics.total}
            href="/products"
          />
          {/*Abre Modal com produtos próximos do vencimento */}
          <MetricsCard
            icon={CalendarClock}
            title="Próximos do vencimento"
            value={isLoading ? "..." : metrics.expiringSoon}
            iconColor="yellow"
            onTitleClick={() => setActiveModal("vencimento-proximo")}
          />
          {/*Abre Modal com produtos vencidos */}
          <MetricsCard
            icon={Ban}
            title="Vencidos"
            value={isLoading ? "..." : metrics.expired}
            iconColor="red"
            onTitleClick={() => setActiveModal("expirados")}
          />
          {/*Abre Modal com produtos em estoque baixo */}
          <MetricsCard
            icon={Siren}
            title="Estoque baixo"
            value={isLoading ? "..." : metrics.lowStock}
            iconColor="yellow"
            onTitleClick={() => setActiveModal("estoque-baixo")}
          />
          {/*Exibe valor do custo de produtos expirados */}
          <MetricsCard
            icon={CircleDollarSign}
            title="Custo de produtos vencidos"
            value={isLoading ? "..." : metrics.expiredProductCost}
            iconColor="red"
          />
          {/*Abre Modal com produtos em estoque excessivo */}
          <MetricsCard
            icon={TriangleAlert}
            title="Estoque em excesso"
            value={isLoading ? "..." : metrics.overStock}
            iconColor="yellow"
            onTitleClick={() => setActiveModal("estoque-excessivo")}
          />
          {/*Abre Modal com produtos ativos */}
          <MetricsCard
            icon={CirclePlay}
            title="Total ativos"
            value={isLoading ? "..." : metrics.active}
            iconColor="green"
            onTitleClick={() => setActiveModal("ativo")}
          />
          {/*Abre Modal com produtos inativos */}
          <MetricsCard
            icon={CirclePause}
            title="Total inativos"
            value={isLoading ? "..." : metrics.inactive}
            iconColor="default"
            onTitleClick={() => setActiveModal("ativo")}
          />
        </div>

        {/* Ações rápidas */}
        <div className="flex flex-col gap-2 my-6 max-w-xs">
          <ActionButton
            variant="primary"
            label="Cadastro de Produto"
            icon={CirclePlus}
            href="/products/new"
          />
          <ActionButton
            variant="primary"
            label="Visualizar Estoque"
            icon={Layers}
            href="/products"
          />
        </div>

        {/* Renderiza o modal apenas quando activeModal não é null.
            O componente receberá o tipo para buscar os produtos corretos. */}
        {activeModal && (
          <div>
            {/* <ProductModal type={activeModal} onClose={() => setActiveModal(null)} /> */}
          </div>
        )}
      </div>
    </>
  );
}