import { useState } from "react";
import { ActionButton } from "../Buttons/ActionButton/ActionButton";
import { CheckIcon } from "lucide-react";
import { BaseModal } from "./BaseModal/BaseModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type OrderAlpha = "az" | "za" | null;
type OrderStock = "high" | "low" | null;
type OrderExpiry = "nearest" | "furthest" | null;

export default function FilterButtonModal({ isOpen, onClose }: ModalProps) {
  const [orderAlpha, setOrderAlpha] = useState<OrderAlpha>(null);
  const [orderStock, setOrderStock] = useState<OrderStock>(null);
  const [orderExpiry, setOrderExpiry] = useState<OrderExpiry>(null);
  const [onlyActive, setOnlyActive] = useState(false);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  if (!isOpen) return null;

  const toggleBtn =
    "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 cursor-pointer";
  const activeBtn =
    "bg-noozi-bright_blue text-white border-noozi-bright_blue shadow-sm";
  const inactiveBtn =
    "bg-white text-noozi-gray-600 border-noozi-gray-300 hover:border-noozi-bright_blue hover:text-noozi-bright_blue";

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Filtros"
      size="lg"
    >
      <div className="flex flex-col gap-6">

        {/* Ordenar Por */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-noozi-gray-400 mb-3">
            Ordenar por
          </p>
          <div className="flex flex-col gap-3">

            {/* Ordem Alfabética */}
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700">Ordem alfabética:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setOrderAlpha(orderAlpha === "az" ? null : "az")}
                  className={`${toggleBtn} ${orderAlpha === "az" ? activeBtn : inactiveBtn}`}
                >
                  A → Z
                </button>
                <button
                  type="button"
                  onClick={() => setOrderAlpha(orderAlpha === "za" ? null : "za")}
                  className={`${toggleBtn} ${orderAlpha === "za" ? activeBtn : inactiveBtn}`}
                >
                  Z → A
                </button>
              </div>
            </div>

            {/* Estoque */}
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700">Estoque:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setOrderStock(orderStock === "high" ? null : "high")}
                  className={`${toggleBtn} ${orderStock === "high" ? activeBtn : inactiveBtn}`}
                >
                  Maior
                </button>
                <button
                  type="button"
                  onClick={() => setOrderStock(orderStock === "low" ? null : "low")}
                  className={`${toggleBtn} ${orderStock === "low" ? activeBtn : inactiveBtn}`}
                >
                  Menor
                </button>
              </div>
            </div>

            {/* Validade */}
            <div className="grid grid-cols-1 gap-2">
              <span className="text-sm font-medium text-noozi-gray-700">Validade:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setOrderExpiry(orderExpiry === "nearest" ? null : "nearest")}
                  className={`${toggleBtn} ${orderExpiry === "nearest" ? activeBtn : inactiveBtn}`}
                >
                  Mais próxima
                </button>
                <button
                  type="button"
                  onClick={() => setOrderExpiry(orderExpiry === "furthest" ? null : "furthest")}
                  className={`${toggleBtn} ${orderExpiry === "furthest" ? activeBtn : inactiveBtn}`}
                >
                  Mais distante
                </button>
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
            <div className="flex-1">
              <label className="block text-xs text-noozi-gray-500 mb-1">De</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-noozi-gray-400">R$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={priceFrom}
                  onChange={(e) => setPriceFrom(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-noozi-surface border border-noozi-gray-300 rounded-lg focus:outline-none focus:border-noozi-bright_blue transition-colors"
                />
              </div>
            </div>
            <span className="text-noozi-gray-400 mt-4">—</span>
            <div className="flex-1">
              <label className="block text-xs text-noozi-gray-500 mb-1">Até</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-noozi-gray-400">R$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={priceTo}
                  onChange={(e) => setPriceTo(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-noozi-surface border border-noozi-gray-300 rounded-lg focus:outline-none focus:border-noozi-bright_blue transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Botões de ação */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              setOrderAlpha(null);
              setOrderStock(null);
              setOrderExpiry(null);
              setOnlyActive(false);
              setPriceFrom("");
              setPriceTo("");
            }}
            className="flex-1 py-2.5 text-sm font-medium text-noozi-gray-600 bg-white border border-noozi-gray-300 rounded-lg hover:bg-noozi-gray-100 transition-colors"
          >
            Limpar filtros
          </button>
          <div className="flex-1">
            <ActionButton
              variant="submit"
              label="Aplicar"
              icon={CheckIcon}
              onSuccess={onClose}
            />
          </div>
        </div>

      </div>
    </BaseModal>
  );
}