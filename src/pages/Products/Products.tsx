import { Pencil, Trash2 } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
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

  if (isLoading) return <p>Carregando...</p>;
  if (error)
    return (
      <p>
        {error} <button onClick={refetch}>Tentar novamente</button>
      </p>
    );

  return (
    <>
      <div className="flex justify-between mt-12">
        <Searchbar currentText={currentText} setCurrentText={setCurrentText} />
        <FilterProductButton
          filters={filters}
          setFilters={setFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      <CreateCardItem products={filteredProducts} filter={currentText} />

      {/* Div dos botões de edição e delete */}
      <div className="gap-2 my-6 max-w-xs">
        <ActionButton
          variant="edit"
          label="Editar"
          icon={Pencil}
          onSuccess={() => {}}
        />
        <ActionButton
          variant="delete"
          label="Apagar"
          icon={Trash2}
          // productId={product.id_product}
          onSuccess={() => {
            // onClose()      // fecha o modal
            // refetch()      // atualiza a lista de produtos
          }}
            // onError={() => toast("Erro ao apagar produto")}
        />
      </div>
    </>
  );
}
