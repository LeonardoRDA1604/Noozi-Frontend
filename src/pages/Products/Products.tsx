import { Pencil, Trash2 } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { useState } from "react";
import Searchbar from "@/components/Searchbar/Searchbar";
import CreateCardItem from "@/components/Cards/ProductCard/ProductCard";


export default function Products() {
    const [ currentText, setCurrentText] = useState("");
  return (
    <>
      <div className="p-4">
        <h1 className="flex items-center justify-center text-4xl font-bold text-noozi-bright_blue">
          Noozi/products-page
        </h1>
      </div>
      
      <Searchbar currentText={currentText} setCurrentText={setCurrentText}/>
      <CreateCardItem filter={currentText}/>

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
    </>
  );
}
