import { useState } from "react";
import { ActionButton } from "../Buttons/ActionButton/ActionButton";
import { CheckIcon } from "lucide-react";
import { BaseModal } from "./BaseModal/BaseModal";
import {
  type ProductFilters,
  type SortBy,
  DEFAULT_FILTERS,
} from "@/types/ProductFilters.types";
import { PriceInput } from "../Inputs/PriceInput";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: ProductFilters) => void;
  currentFilters: ProductFilters;
}

export default function ProductFilterButtonModal({
  isOpen,
  onClose,
  onApply,
  currentFilters,
}: ModalProps) {
  // Cópia local dos filtros — só vai para o pai ao clicar em Aplicar
  const [sortBy, setSortBy] = useState<SortBy>(currentFilters.sortBy);
  const [onlyActive, setOnlyActive] = useState(currentFilters.onlyActive);
  const [priceFrom, setPriceFrom] = useState<number>(currentFilters.priceFrom);
  const [priceTo, setPriceTo] = useState<number>(currentFilters.priceTo);

  if (!isOpen) return null;

  // Alterna sortBy: clica no mesmo botão = desmarca, outro = troca
  const handleSort = (value: SortBy) =>
    setSortBy((prev) => (prev === value ? null : value));

  const handleApply = () => {
    onApply({ sortBy, onlyActive, priceFrom, priceTo });
    onClose();
  };

  const handleClear = () => {
    setSortBy(null);
    setOnlyActive(false);
    setPriceFrom(0);
    setPriceTo(0);
  };

  const toggleBtn =
    "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 cursor-pointer";
  const activeBtn =
    "bg-noozi-bright_blue text-white border-noozi-bright_blue shadow-sm";
  const inactiveBtn =
    "bg-white text-noozi-gray-600 border-noozi-gray-300 hover:border-noozi-bright_blue hover:text-noozi-bright_blue";

  const btn = (value: SortBy, label: string) => (
    <button
      type="button"
      onClick={() => handleSort(value)}
      className={`${toggleBtn} ${sortBy === value ? activeBtn : inactiveBtn}`}
    >
      {label}
    </button>
  );

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Filtros" size="lg">
      <div className="flex flex-col gap-6">

        {/* Ordenar Por */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-noozi-gray-400 mb-3">
            Ordenar por
          </p>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700">Ordem alfabética</span>
              <div className="flex gap-2">
                {btn("az", "A → Z")}
                {btn("za", "Z → A")}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700">Estoque</span>
              <div className="flex gap-2">
                {btn("stock-high", "Maior")}
                {btn("stock-low", "Menor")}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700">Validade</span>
              <div className="flex gap-2">
                {btn("expiry-nearest", "Mais próxima")}
                {btn("expiry-furthest", "Mais distante")}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-noozi-gray-200" />

        {/* Somente Ativos */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-noozi-gray-400 mb-3">
            Status
          </p>
          <label className="flex items-center gap-3 cursor-pointer w-fit">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={onlyActive}
                onChange={(e) => setOnlyActive(e.target.checked)}
              />
              <div className={`w-10 h-5 rounded-full transition-colors duration-200 ${onlyActive ? "bg-noozi-bright_blue" : "bg-noozi-gray-300"}`} />
              <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${onlyActive ? "translate-x-5" : "translate-x-0"}`} />
            </div>
            <span className="text-sm font-medium text-noozi-gray-700">Somente ativos</span>
          </label>
        </section>

        <hr className="border-noozi-gray-200" />

        {/* Faixa de Preço */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-noozi-gray-400 mb-3">
            Faixa de Preço
          </p>
          <div className="flex items-center gap-3">
            <PriceInput
              label="De"
              id="filterPriceFrom"
              value={priceFrom}
              onChange={setPriceFrom}
            />
            <span className="text-noozi-gray-400 mt-8">—</span>
            <PriceInput
              label="Até"
              id="filterPriceTo"
              value={priceTo}
              onChange={setPriceTo}
            />
          </div>
        </section>

        {/* Botões de ação */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 py-2.5 text-sm font-medium text-noozi-gray-600 bg-white border border-noozi-gray-300 rounded-lg hover:bg-noozi-gray-100 transition-colors"
          >
            Limpar filtros
          </button>
          <div className="flex-1">
            <ActionButton
              variant="submit"
              label="Aplicar"
              icon={CheckIcon}
              onSuccess={handleApply}
            />
          </div>
        </div>

      </div>
    </BaseModal>
  );
}
