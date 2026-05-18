import { ActionButton } from "../Buttons/ActionButton/ActionButton";
import { CheckIcon } from "lucide-react";

interface ModalProps {
    isOpen : boolean;
    onClose : () => void;
}

export default function FilterButtonModal ({isOpen, onClose} : ModalProps) {
    
    if(!isOpen) return null;

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-[100%] h-[100%] flex items-center justify-center bg-gray-300 overflow-y-auto overscroll-none overflow-hidden">
                <div className="bg-white rounded-md w-[30em] shadow-lg py-[2rem]">
                    <div className="flex justify-end text-lg pr-5">
                        <button className="h-6" onClick={onClose}> 
                            &times;
                        </button>                
                    </div>

                    <div className=" flex justify-center mb-5 gap-5">
                        <h2>Selecione o Filtro</h2>
                        <select name="filtros" id="ProductFilters" className="text-center bg-gray-200 rounded-md">
                            <option value="Alphabetic Sorted Asc">A-Z</option>
                            <option value="Alphabetic Sorted Desc">Z-A</option>
                            <option value="Brand">Marca</option>
                            <option value="Newest">Mais Recente</option>
                            <option value="Oldest">Mais Antigo</option>
                            <option value="Expensivest">Maior Preço</option>
                            <option value="Cheapest">Menor Preço</option>
                            <option value="SKU">SKU</option>
                        </select>
                    </div>

                    <div className="flex justify-evenly">
                        <ActionButton
                            variant="edit"
                            label="Aplicar Filtro"
                            icon={CheckIcon}
                            onSuccess={() => {
                                onClose() // fecha o modal
                            }}
                            />                                     
                    </div>
                </div>
            </div>
        </div>
    )
}