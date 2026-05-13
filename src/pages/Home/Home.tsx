import { useState } from "react";
import { Package } from "lucide-react";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import { MetricsCard } from "@/components/Cards/Metrics/MetricsCard/MetricsCard";

type ModalType = "estoque-baixo" | "vencimento-proximo" | "expirados" | null;

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <>
      {/* <Header /> */}
      <h1 className="flex items-center justify-center text-4xl font-bold text-blue-500">
        Noozi/home-page
      </h1>
      {/* Div para Test Components */}
      <div className="items-center justify-center">
        <div className="flex flex-wrap gap-4 ">
          <MetricsCard
            icon={Package}
            title="Produtos cadastrados"
            value={129}
          />
          <MetricsCard
            icon={Package}
            title="Produtos em estoque baixo"
            value={17}
          />
          <MetricsCard
            icon={Package}
            title="Produtos próximos do vencimento"
            value={14}
          />
          <MetricsCard icon={Package} title="Produtos vencidos" value={2} />
        </div>
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
