import { useState } from "react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { CheckIcon } from "lucide-react";
import { BaseModal } from "@/components/Modals/BaseModal/BaseModal";
import {
  type ProductFilters, type SortAlpha, type SortPrice,
  type SortStock, type SortExpiry, type SortStockLevel,
} from "@/types/ProductFilters.types";
import { PriceInput } from "@/components/Inputs/PriceInput/PriceInput";
import { ToggleSwitch } from "@/components/Inputs/ToggleSwitch";
import { Tooltip } from "@/components/ToolTip/ToolTip";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: ProductFilters) => void;
  currentFilters: ProductFilters;
}

export default function ProductFilterButtonModal({ isOpen, onClose, onApply, currentFilters }: ModalProps) {
  const [sortAlpha, setSortAlpha]           = useState<SortAlpha>(currentFilters.sortAlpha);
  const [sortPrice, setSortPrice]           = useState<SortPrice>(currentFilters.sortPrice);
  const [sortStock, setSortStock]           = useState<SortStock>(currentFilters.sortStock);
  const [sortExpiry, setSortExpiry]         = useState<SortExpiry>(currentFilters.sortExpiry);
  const [sortStockLevel, setSortStockLevel] = useState<SortStockLevel>(currentFilters.sortStockLevel);
  const [onlyActive, setOnlyActive]         = useState(currentFilters.onlyActive);
  const [onlyExpired, setOnlyExpired]       = useState(currentFilters.onlyExpired);
  const [priceFrom, setPriceFrom]           = useState<number>(currentFilters.priceFrom);
  const [priceTo, setPriceTo]               = useState<number>(currentFilters.priceTo);

  if (!isOpen) return null;

  // Toggle genérico: clicar no mesmo valor desmarca; clicar em outro troca
  function toggle<T>(current: T | null, value: T, set: (v: T | null) => void) {
    set(current === value ? null : value);
  }

  function handleApply() {
    onApply({ sortAlpha, sortPrice, sortStock, sortExpiry, sortStockLevel, onlyActive, onlyExpired, priceFrom, priceTo });
    onClose();
  }

  function handleClear() {
    setSortAlpha(null); setSortPrice(null); setSortStock(null);
    setSortExpiry(null); setSortStockLevel(null);
    setOnlyActive(false); setOnlyExpired(false);
    setPriceFrom(0); setPriceTo(0);
  }

  // ── Estilos de pill (togglable) — dark mode via tokens
  const base   = "px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-noozi-bright_blue/40";
  const active = "bg-noozi-bright_blue text-white border-noozi-bright_blue";
  const inactive = "bg-noozi-background text-noozi-text border-noozi-border hover:border-noozi-bright_blue hover:text-noozi-bright_blue";

  function pill<T>(value: T, label: string, current: T | null, set: (v: T | null) => void) {
    const isActive = current === value;
    return (
      <button
        type="button"
        role="radio"
        aria-checked={isActive}
        onClick={() => toggle(current, value, set)}
        className={`${base} ${isActive ? active : inactive}`}
      >
        {label}
      </button>
    );
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Filtros" size="lg">
      <div className="flex flex-col gap-6" role="form" aria-label="Formulário de filtros">

        {/* Ordenar por */}
        <fieldset>
          <legend className="text-xs font-semibold uppercase tracking-widest text-noozi-muted mb-3">
            Ordenar por
          </legend>
          <div className="flex flex-col gap-4">

            {/* Ordem alfabética */}
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-noozi-text">Ordem alfabética</span>
              <div className="flex gap-2" role="radiogroup" aria-label="Ordenar alfabeticamente">
                {pill<SortAlpha>("az", "A → Z", sortAlpha, setSortAlpha)}
                {pill<SortAlpha>("za", "Z → A", sortAlpha, setSortAlpha)}
              </div>
            </div>

            {/* Preço */}
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-noozi-text">Preço</span>
              <div className="flex gap-2" role="radiogroup" aria-label="Ordenar por preço">
                {pill<SortPrice>("price-high", "Maior preço", sortPrice, setSortPrice)}
                {pill<SortPrice>("price-low",  "Menor preço", sortPrice, setSortPrice)}
              </div>
            </div>

            {/* Estoque */}
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-noozi-text">Estoque</span>
              <div className="flex gap-2" role="radiogroup" aria-label="Ordenar por estoque">
                {pill<SortStock>("stock-high", "Maior", sortStock, setSortStock)}
                {pill<SortStock>("stock-low",  "Menor", sortStock, setSortStock)}
              </div>
            </div>

            {/* Nível de estoque */}
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-noozi-text flex items-center gap-1.5">
                Nível de estoque
                <Tooltip text="Indica o quão próximo o produto está do limite mínimo ou máximo." />
              </span>
              <div className="flex gap-2" role="radiogroup" aria-label="Ordenar por nível de estoque">
                {pill<SortStockLevel>("stock-level-critical", "Mais crítico", sortStockLevel, setSortStockLevel)}
                {pill<SortStockLevel>("stock-level-normal",   "Mais normal",  sortStockLevel, setSortStockLevel)}
              </div>
            </div>
            
            {/* Validade */}
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-noozi-text">Validade</span>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Ordenar por validade">
                {pill<SortExpiry>("expiry-nearest",  "Mais próxima",  sortExpiry, setSortExpiry)}
                {pill<SortExpiry>("expiry-furthest", "Mais distante", sortExpiry, setSortExpiry)}
              </div>
            </div>

          </div>
        </fieldset>

        <hr className="border-noozi-border" />

        {/* Status */}
        <fieldset>
          <legend className="text-xs font-semibold uppercase tracking-widest text-noozi-muted mb-3">
            Status
          </legend>
          <div className="flex flex-col gap-3">
            <ToggleSwitch
              label="Somente ativos"
              checked={onlyActive}
              onChange={setOnlyActive}
              activeLabel={onlyActive ? "Ativo" : "Todos"}
              tooltip="Exibe apenas produtos marcados como ativos."
            />
            <ToggleSwitch
              label="Somente vencidos"
              checked={onlyExpired}
              onChange={setOnlyExpired}
              activeLabel={onlyExpired ? "Vencidos" : "Todos"}
              tooltip='Exibe apenas produtos com validade expirada.'
            />
          </div>
        </fieldset>

        <hr className="border-noozi-border" />

        {/* Faixa de preço */}
        <fieldset>
          <legend className="text-xs font-semibold uppercase tracking-widest text-noozi-muted mb-3">
            Faixa de Preço
          </legend>
          <div className="flex items-center gap-3">
            <PriceInput label="De"  id="filterPriceFrom" value={priceFrom} onChange={setPriceFrom} />
            <span className="text-noozi-muted mt-6" aria-hidden="true">—</span>
            <PriceInput label="Até" id="filterPriceTo"   value={priceTo}   onChange={setPriceTo} />
          </div>
        </fieldset>

        {/* Ações */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={handleClear}
            aria-label="Limpar todos os filtros"
            className="flex-1 py-2.5 text-sm font-medium text-noozi-text bg-noozi-background border border-noozi-border rounded-xl hover:bg-noozi-surface transition-colors focus:outline-none focus:ring-2 focus:ring-noozi-bright_blue/40"
          >
            Limpar filtros
          </button>
          <div className="flex-1">
            <ActionButton variant="submit" label="Aplicar" icon={CheckIcon} onSuccess={handleApply} />
          </div>
        </div>

      </div>
    </BaseModal>
  );
}






