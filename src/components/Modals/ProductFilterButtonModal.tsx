import { ActionButton } from "../Buttons/ActionButton/ActionButton";
import { CheckIcon } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}



export default function FilterButtonModal({ isOpen, onClose }: ModalProps) {

    if (!isOpen) return null;

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-[100%] h-[100%] flex items-center justify-center bg-gray-300 overflow-y-auto overscroll-none overflow-hidden">
                <div className="bg-white rounded-md w-[30em] shadow-lg py-[2rem]">
                    <div className="flex justify-end text-lg pr-5">
                        <button className="h-6" onClick={onClose}>
                            &times;
                        </button>
                    </div>

                    {/* Separa as seções de cada uma das opções de ordenamento dos itens na tela*/}
                    <div id="OrderBySection"> 
                        <label htmlFor="">Ordenar Por:</label>
                        <div id="OrderByText">
                            <label htmlFor="">Ordem alfabética</label>
                            <button>A-Z</button>
                            <button>Z-A</button>
                        </div>
                        <div id="OrderByStockDisponibility">
                            <label htmlFor="">Estoque</label>
                            <button>Maior Estoque</button>
                            <button>Menor Estoque</button>
                        </div>
                        <div id="OrderByExpireTime">
                            <label htmlFor="">Validade</label>
                            <button>Mais próximo à validade</button>
                            <button>Mais longe à validade</button>
                        </div>
                        <div id="OrderByIsActive">
                            <label htmlFor="">Somente Ativos</label>
                            <input type="checkbox" name="" id="" value="Sim" />
                        </div>
                        <div id="FilterByPrice">
                            <label htmlFor="">Faixa de Preço</label>
                            <div>
                                <div>
                                    <label htmlFor="">De:</label>
                                    <input type="text" name="" id="" placeholder="Ex: 200" />
                                </div>
                                <div>
                                    <label htmlFor="">Para:</label>
                                    <input type="text" name="" id="" placeholder="Ex: 600" />
                                </div>
                            </div>
                        </div>
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