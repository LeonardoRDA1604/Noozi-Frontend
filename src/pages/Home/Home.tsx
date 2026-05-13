import { useState } from "react";
import {
  Ban,
  CalendarClock,
  Package,
  TriangleAlert,
} from "lucide-react";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import { MetricsCard } from "@/components/Cards/Metrics/MetricsCard/MetricsCard";

// Restringe os valores possíveis do modal — evita strings arbitrárias
type ModalType = "estoque-baixo" | "vencimento-proximo" | "expirados" | null;

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null); // null = nenhum modal aberto

  return (
    <>
      {/* <Header /> */}
      <h1 className="flex items-center justify-center text-4xl font-bold text-blue-500">
        Noozi/home-page
      </h1>
      {/* Div para Test Components */}
      <div className="items-center justify-center">
        <div className="flex flex-wrap gap-4 ">
          {/* Navega para listagem completa de produtos */}
          <MetricsCard
            icon={Package}
            title="Produtos cadastrados"
            value={129}
            href="/products"
          />
          {/*Abre Modal com produtos em estoque baixo */}
          <MetricsCard
            icon={TriangleAlert}
            title="Produtos em estoque baixo"
            value={17}
            iconColor="yellow"
            onTitleClick={() => setActiveModal("estoque-baixo")}
          />
          {/*Abre Modal com produtos próximos do vencimento */}
          <MetricsCard
            icon={CalendarClock}
            title="Produtos próximos do vencimento"
            value={14}
            iconColor="yellow"
            onTitleClick={() => setActiveModal("vencimento-proximo")}
          />
          {/*Abre Modal com produtos vencidos */}
          <MetricsCard
            icon={Ban}
            title="Produtos vencidos"
            value={2}
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
      {/* <Footer /> */}
    </>
  );
}
