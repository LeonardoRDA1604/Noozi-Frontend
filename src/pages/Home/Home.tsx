import { useState } from "react";
import { Ban, CalendarClock, Package, TriangleAlert } from "lucide-react";
import { MetricsCard } from "@/components/Cards/Metrics/MetricsCard/MetricsCard";
import { useProductMetrics } from "@/hooks/useProductMetrics";

type ModalType = "estoque-baixo" | "vencimento-proximo" | "expirados" | null;

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
        <div className="flex flex-wrap gap-4 ">
          {/* Navega para listagem completa de produtos */}
          <MetricsCard
            icon={Package}
            title="Produtos cadastrados"
            value={isLoading ? "..." : metrics.total}
            href="/products"
          />
          {/*Abre Modal com produtos em estoque baixo */}
          <MetricsCard
            icon={TriangleAlert}
            title="Produtos em estoque baixo"
            value={isLoading ? "..." : metrics.lowStock}
            iconColor="yellow"
            onTitleClick={() => setActiveModal("estoque-baixo")}
          />
          {/*Abre Modal com produtos próximos do vencimento */}
          <MetricsCard
            icon={CalendarClock}
            title="Produtos próximos do vencimento"
            value={isLoading ? "..." : metrics.expiringSoon}
            iconColor="yellow"
            onTitleClick={() => setActiveModal("vencimento-proximo")}
          />
          {/*Abre Modal com produtos vencidos */}
          <MetricsCard
            icon={Ban}
            title="Produtos vencidos"
            value={isLoading ? "..." : metrics.expired}
            iconColor="red"
            onTitleClick={() => setActiveModal("expirados")}
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
