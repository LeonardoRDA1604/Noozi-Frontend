import { useState } from "react";
import Searchbar from "@/components/Searchbar/Searchbar";
import { useProducts } from "@/hooks/useProducts";
import { useProductFilters } from "@/hooks/useProductFilters";
import CreateCardItem from "@/components/Cards/ProductCard/ProductCard";
import FilterProductButton from "@/components/Buttons/FilterProductButton/FilterProductButton";

export default function Products() {
  const { products, isLoading, error, refetch } = useProducts();
  const { filters, setFilters, filteredProducts, hasActiveFilters } = useProductFilters(products);
  const [currentText, setCurrentText] = useState("");

  if (isLoading) return <p className="p-4 text-noozi-muted">Carregando...</p>;
  if (error)
    return (
      <p className="p-4 text-status-danger">
        {error} <button onClick={refetch} className="underline ml-2">Tentar novamente</button>
      </p>
    );

  return (
    <>
      <div className="flex justify-between mt-12">
        <Searchbar            currentText={currentText}     setCurrentText={setCurrentText} />
        <FilterProductButton  filters={filters}             setFilters={setFilters}              hasActiveFilters={hasActiveFilters} />
      </div>

      <CreateCardItem         products={filteredProducts}   filter={currentText}                 onProductChange={refetch} />

    </>
  );
};