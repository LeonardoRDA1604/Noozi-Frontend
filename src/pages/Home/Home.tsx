import { Package } from "lucide-react";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import { MetricsCard } from "@/components/Cards/Metrics/MetricsCard/MetricsCard";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <h1 className="flex items-center justify-center align-middle text-4xl font-bold text-blue-500">
        Noozi/home-page
      </h1>
      {/* Div para Test Components */}
      <div className="items-center justify-center">
        <div className="flex gap-4 ">
          <MetricsCard icon={Package} title="Produtos cadastrados" value={129} />
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
          <MetricsCard
            icon={Package}
            title="Produtos vencidos"
            value={2}
          />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
