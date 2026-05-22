import { Pencil, Trash2 } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { useState } from "react";
import Searchbar from "@/components/Searchbar/Searchbar";
import { useProducts } from "@/hooks/useProducts";
import CreateCardItem from "@/components/Cards/ProductCard/ProductCard";
import FilterProductButton from "@/components/Buttons/FilterProductButton/FilterProductButton";

export default function Products() {
  const { products, isLoading, error, refetch } = useProducts();
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
      <div>
        <div className="flex w-[100%] justify-between mt-12">
          <Searchbar currentText={currentText} setCurrentText={setCurrentText} />
          <FilterProductButton/>
        </div>
        <CreateCardItem products={products} filter={currentText} />

        {/* Div dos botões de edição e delete */}
        <div className="gap-2 my-6 max-w-xs ">
          <ActionButton
            variant="edit"
            label="Editar"
            icon={Pencil}
            onSuccess={() => {
              // abre formulário de edição
              // setEditMode(true)
            }}
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
      </div>
    </>
  );
}
