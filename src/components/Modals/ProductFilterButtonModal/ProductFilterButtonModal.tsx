import { useState } from "react";
import { ActionButton } from "../../Buttons/ActionButton/ActionButton";
import { CheckIcon } from "lucide-react";
import { BaseModal } from "../BaseModal/BaseModal";
import {
  type ProductFilters,
  type SortAlpha,
  type SortPrice,
  type SortStock,
  type SortExpiry,
  type SortStockLevel,
  DEFAULT_FILTERS,
} from "@/types/ProductFilters.types";
import { PriceInput } from "../../Inputs/PriceInput";
import { ToggleSwitch } from "../../Inputs/ToggleSwitch";
import { Tooltip } from "@/components/ToolTip/ToolTip";

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
  const [sortAlpha, setSortAlpha] = useState<SortAlpha>(currentFilters.sortAlpha);
  const [sortPrice, setSortPrice] = useState<SortPrice>(currentFilters.sortPrice);
  const [sortStock, setSortStock] = useState<SortStock>(currentFilters.sortStock);
  const [sortExpiry, setSortExpiry] = useState<SortExpiry>(currentFilters.sortExpiry);
  const [sortStockLevel, setSortStockLevel] = useState<SortStockLevel>(currentFilters.sortStockLevel);
  const [onlyActive, setOnlyActive] = useState(currentFilters.onlyActive);
  const [onlyExpired, setOnlyExpired] = useState(currentFilters.onlyExpired);
  const [priceFrom, setPriceFrom] = useState<number>(currentFilters.priceFrom);
  const [priceTo, setPriceTo] = useState<number>(currentFilters.priceTo);

  if (!isOpen) return null;

  // Toggle genérico: clicar no mesmo valor desmarca; clicar em outro troca
  function toggle<T>(
    current: T | null,
    value: T,
    set: (v: T | null) => void
  ) {
    set(current === value ? null : value);
  }

  const handleApply = () => {
    onApply({
      sortAlpha,
      sortPrice,
      sortStock,
      sortExpiry,
      sortStockLevel,
      onlyActive,
      onlyExpired,
      priceFrom,
      priceTo,
    });
    onClose();
  };

  const handleClear = () => {
    setSortAlpha(null);
    setSortPrice(null);
    setSortStock(null);
    setSortExpiry(null);
    setSortStockLevel(null);
    setOnlyActive(false);
    setOnlyExpired(false);
    setPriceFrom(0);
    setPriceTo(0);
  };

  // ── Estilos de botão ───────────────────────────────────────────────────────
  const base = "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 cursor-pointer";
  const active = "bg-noozi-bright_blue text-white border-noozi-bright_blue shadow-sm";
  const inactive = "bg-white text-noozi-gray-600 border-noozi-gray-300 hover:border-noozi-bright_blue hover:text-noozi-bright_blue";

  function btn<T>(
    value: T,
    label: string,
    current: T | null,
    set: (v: T | null) => void
  ) {
    return (
      <button
        type="button"
        onClick={() => toggle(current, value, set)}
        className={`${base} ${current === value ? active : inactive}`}
      >
        {label}
      </button>
    );
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Filtros" size="lg">
      <div className="flex flex-col gap-6">

        {/* ── Ordenar por ─────────────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-noozi-gray-400 mb-3">
            Ordenar por
          </p>
          <div className="flex flex-col gap-3">

            {/* Ordem alfabética */}
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700">Ordem alfabética</span>
              <div className="flex gap-2">
                {btn<SortAlpha>("az", "A → Z", sortAlpha, setSortAlpha)}
                {btn<SortAlpha>("za", "Z → A", sortAlpha, setSortAlpha)}
              </div>
            </div>

            {/* Preço */}
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700">Preço</span>
              <div className="flex gap-2">
                {btn<SortPrice>("price-high", "Maior preço", sortPrice, setSortPrice)}
                {btn<SortPrice>("price-low", "Menor preço", sortPrice, setSortPrice)}
              </div>
            </div>

            {/* Estoque */}
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700">Estoque</span>
              <div className="flex gap-2">
                {btn<SortStock>("stock-high", "Maior", sortStock, setSortStock)}
                {btn<SortStock>("stock-low", "Menor", sortStock, setSortStock)}
              </div>
            </div>

            {/* Nível de estoque */}
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700 flex items-center gap-2">
                Nível de estoque
                <Tooltip text=" Indica o quão próximo o produto está do limite mínimo (estoque baixo) ou máximo (estoque alto). Quanto mais próximo, maior o alerta."></Tooltip>
              </span>
              <div className="flex gap-2">
                {btn<SortStockLevel>(
                  "stock-level-critical",
                  "Mais crítico",
                  sortStockLevel,
                  setSortStockLevel
                )}
                {btn<SortStockLevel>(
                  "stock-level-normal",
                  "Mais normal",
                  sortStockLevel,
                  setSortStockLevel
                )}
              </div>
            </div>

            {/* Validade */}
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700">Validade</span>
              <div className="flex flex-wrap gap-2">
                {btn<SortExpiry>("expiry-nearest", "Mais próxima", sortExpiry, setSortExpiry)}
                {btn<SortExpiry>("expiry-furthest", "Mais distante", sortExpiry, setSortExpiry)}
              </div>
            </div>

          </div>
        </section>

        <hr className="border-noozi-gray-200" />

        {/* ── Status ──────────────────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-noozi-gray-400 mb-3">
            Status
          </p>
          <div className="flex flex-col gap-3">
            <ToggleSwitch
              label="Somente ativos"
              checked={onlyActive}
              onChange={setOnlyActive}
              activeLabel={onlyActive ? "Ativo" : "Todos"}
              tooltip="Exibe apenas produtos marcados como ativos no cadastro."
            />
            <ToggleSwitch
              label="Somente vencidos"
              checked={onlyExpired}
              onChange={setOnlyExpired}
              activeLabel={onlyExpired ? "Vencidos" : "Todos"}
              tooltip='Exibe apenas produtos com validade expirada. Combine com "Mais próxima" ou "Mais distante" para ordenar pelo tempo de vencimento.'
            />
          </div>
        </section>

        <hr className="border-noozi-gray-200" />

        {/* ── Faixa de preço ──────────────────────────────────────────────── */}
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

        {/* ── Ações ───────────────────────────────────────────────────────── */}
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