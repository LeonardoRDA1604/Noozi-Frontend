import { useState } from "react";
import Searchbar from "@/components/Searchbar/Searchbar";
import { useProducts } from "@/hooks/useProducts";
import { useProductFilters } from "@/hooks/useProductFilters";
import ProductTable from "@/components/Table/ProductTable/ProductTable";
import FilterProductButton from "@/components/Buttons/FilterProductButton/FilterProductButton";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { LoadingStateBase } from "@/components/LoadingState/LoadingStateBase";

export default function Products() {
  const { products, isLoading, error, refetch } = useProducts();
  const { filters, setFilters, filteredProducts, hasActiveFilters } = useProductFilters(products);
  const [currentText, setCurrentText] = useState("");

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6 max-w-screen-2xl mx-auto">

      {/* Cabeçalho da página */}
      <SectionTitle
        title="Produtos"
        subtitle="Gerencie seu estoque, edite ou remova produtos cadastrados"
      />

      {/* Estado de loading */}
      {isLoading && (
        <LoadingStateBase isLoading={isLoading} variant="fullscreen" label="Carregando página..." />
      )}

      {/* Estado de erro */}
      {error && !isLoading && (
        <div role="alert" className="px-4 py-3 rounded-xl border border-status-danger/20 bg-status-danger/5">
          <p className="text-sm text-status-danger">{error}</p>
          <button onClick={refetch} className="mt-2 text-sm font-medium text-noozi-bright_blue underline hover:opacity-80 transition-opacity">
            Tentar novamente
          </button>
        </div>
      )}

      {/* Conteúdo principal */}
      {!isLoading && !error && (
        <>
          {/* Barra de busca e filtro */}
          <div className="flex items-center gap-2" role="search" aria-label="Buscar e filtrar produtos">
            <Searchbar currentText={currentText} setCurrentText={setCurrentText} />
            <FilterProductButton filters={filters} setFilters={setFilters} hasActiveFilters={hasActiveFilters} />
          </div>

          {/* Contador de resultados */}
          <p className="text-xs text-noozi-muted px-1" aria-live="polite">
            {filteredProducts.length === products.length
              ? `${products.length} produtos cadastrados`
              : `${filteredProducts.length} de ${products.length} produtos`}
          </p>

          {/* Tabela */}
          <ProductTable products={filteredProducts} filter={currentText} onProductChange={refetch} />
        </>
      )}
    </div>
  );
}