import { useState } from "react";
import { Pencil, Trash2, Save, XCircle } from "lucide-react";
import { BaseModal } from "@/components/Modals/BaseModal/BaseModal";
import { DeleteConfirmModal } from "@/components/Modals/DeleteConfirmModal/DeleteConfirmModal";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { productService } from "@/services/product.service";
import type { Product, UpdateProductDTO } from "@/types/Product.types";
import { Tooltip } from "@/components/ToolTip/ToolTip";
import { formatCurrency } from "@/utils/currency/formatCurrency";
import { formatISODate } from "@/utils/date/formatISODate";
import { StatusBadge } from "@/components/Status/StatusBadge";
import { PRODUCT_STATUS_CONFIG } from "@/constants/productStatusConfig";
import { PriceInputMask } from "@/components/Inputs/PriceInput/PriceInputMask";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onDeleted: () => void; // recarrega lista após deletar
  onUpdated: () => void; // recarrega lista após editar
}

export function ProductModal({ product, onClose, onDeleted, onUpdated }: ProductModalProps) {
  const [isEditing, setIsEditing]                   = useState(false);
  const [confirmingDelete, setConfirmingDelete]     = useState(false);
  const [isLoading, setIsLoading]                   = useState(false);

  const status = product.is_active ? "active" : "inactive";
  const config = PRODUCT_STATUS_CONFIG[status];

  function getInitialEditData(): UpdateProductDTO {
    return {
      name:            product.name,
      brand:           product.brand,
      category:        product.category,
      item_price:      product.item_price,
      unit_measure:    product.unit_measure,
      stock_quantity:  product.stock_quantity,
      description:     product.description,
      low_stock_level: product.low_stock_level,
      over_stock_level:product.over_stock_level,
      expiration_date: product.expiration_date,
      batch_code:      product.batch_code,
      sku:             product.sku,
    };
  }

    // Campos editáveis inicializados com os valores do produto
  const [editData, setEditData] = useState<UpdateProductDTO>(getInitialEditData);
  const STANDARD_MODALS_TAILWIND = "h-9 w-full rounded-lg border border-noozi-border bg-noozi-input_field px-3 text-sm text-noozi-text placeholder:text-noozi-muted focus:outline-none focus:ring-2 focus:ring-noozi-bright_blue/30 focus:border-noozi-bright_blue transition-all duration-150"
  function handleCancel() {
    setEditData(getInitialEditData());
    setIsEditing(false);
  }

  async function handleSave() {
    try {
      setIsLoading(true);
      await productService.update(product.id, editData);
      setIsEditing(false);
      onUpdated();
      onClose();
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete() {
    try {
      setIsLoading(true);
      await productService.remove(product.id);
      onDeleted();
      onClose();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <BaseModal
        isOpen={true}
        onClose={onClose}
        title={isEditing ? "Editar produto" : "Detalhes do produto"}
        size="lg"
      >
        {/* Indicador de ID e status */}
        <div className="flex items-center justify-between">
          <ModalValue tooltip="Identificador único do produto">
            <span className="text-lg font-bold text-noozi-text">
              #{product.id_product}
            </span>
          </ModalValue>
          <StatusBadge badgeClass={config.badgeClass} badgeText={config.badgeText} />
        </div>

        <hr className="border-noozi-border" />

        {/* Campos */}
        <div className="flex flex-col gap-4">

          {/* Nome */}
          <ModalField label="Nome">
            {isEditing
              ? <ModalInput value={editData.name ?? ""} onChange={(v) => setEditData({ ...editData, name: v })} />
              : <ModalValue>{product.name}</ModalValue>
            }
          </ModalField>

          <div className="grid grid-cols-2 gap-4">
            {/* Marca */}
            <ModalField label="Marca">
              {isEditing
                ? <ModalInput value={editData.brand ?? ""} onChange={(v) => setEditData({ ...editData, brand: v })} />
                : <ModalValue>{product.brand ?? "—"}</ModalValue>
              }
            </ModalField>

            {/* Categoria */}
            <ModalField label="Categoria">
              {isEditing
                ? <ModalInput value={editData.category ?? ""} onChange={(v) => setEditData({ ...editData, category: v })} />
                : <ModalValue>{product.category ?? "—"}</ModalValue>
              }
            </ModalField>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Preço */}
            <ModalField label="Preço">
              {isEditing
                ? <PriceInputMask className={STANDARD_MODALS_TAILWIND} value={Number(editData.item_price ?? "")} onChange={(v) => setEditData({ ...editData, item_price: Number(v) })} />
                : <ModalValue>{formatCurrency(product.item_price)}</ModalValue>
              }
            </ModalField>

            {/* Estoque e Unidade de medida juntos */}
            {isEditing ? (
              <div className="flex gap-4">
                <ModalField label="Estoque">
                  <ModalInput type="number" value={String(editData.stock_quantity ?? "")} onChange={(v) => setEditData({...editData, stock_quantity: Number(v) })} />
                </ModalField>
                <ModalField label="Un. medida">
                  <ModalInput type="text"   value={String(editData.unit_measure ?? "")}   onChange={(v) => setEditData({...editData, unit_measure: v })} />
                </ModalField>
              </div>
            ) : (
              <ModalField label="Estoque">
                <ModalValue>
                  {product.stock_quantity} {product.unit_measure ?? "un."}
                </ModalValue>
              </ModalField>
            )}

            {/* Alerta de Estoque Baixo */}
            <ModalField label="Alerta de Estoque Baixo">
              {isEditing
                ? <ModalInput type="number" value={String(editData.low_stock_level ?? "")} onChange={(v) => setEditData({ ...editData, low_stock_level: Number(v) })} />
                : <ModalValue>{product.low_stock_level ?? "—"}</ModalValue>
              }
            </ModalField>

            {/* Alerta de Estoque Alto */}
            <ModalField label="Alerta de Estoque Alto">
              {isEditing
                ? <ModalInput type="number" value={String(editData.over_stock_level ?? "")} onChange={(v) => setEditData({ ...editData, over_stock_level: Number(v) })} />
                : <ModalValue>{product.over_stock_level ?? "—"}</ModalValue>
              }
            </ModalField>
          </div>

          {/* Descrição */}
          <ModalField label="Descrição">
            {isEditing
              ? <ModalInput value={editData.description ?? ""} onChange={(v) => setEditData({ ...editData, description: v })} />
              : <ModalValue>{product.description ?? "—"}</ModalValue>
            }
          </ModalField>

          {/* Vencimento */}
          <ModalField label="Vencimento">
            {isEditing
              ? <ModalInput type="date" value={editData.expiration_date ?? ""} onChange={(v) => setEditData({ ...editData, expiration_date: v })} />
              : <ModalValue>{formatISODate(product.expiration_date)}</ModalValue>
            }
          </ModalField>

          {/* SKU */}
          <ModalField label="SKU">
            {isEditing
              ? <ModalInput value={editData.sku ?? ""} onChange={(v) => setEditData({ ...editData, sku: v })} />
              : <ModalValue>{product.sku}</ModalValue>
            }
          </ModalField>

          {/* Batch_code - Lote */}
          <ModalField label="Lote">
            {isEditing
              ? <ModalInput value={editData.batch_code ?? ""} onChange={(v) => setEditData({ ...editData, batch_code: v })} />
              : <ModalValue>{product.batch_code}</ModalValue>
            }
          </ModalField>

          {/* // SKU e Lote — somente leitura */}
          {/* <div className="grid grid-cols-2 gap-4">
            <ModalField label="SKU"><ModalValue>{product.sku}</ModalValue></ModalField>
            <ModalField label="Lote"><ModalValue>{product.batch_code ?? "—"}</ModalValue></ModalField>
          </div> */}

        </div>

        {/* Botões de ação */}
        <div className="flex gap-2 pt-1">
          {/* Visualização normal */}
          {!isEditing && (
            <>
              <ActionButton variant="edit"   label="Editar produto" icon={Pencil} onClick={() => setIsEditing(true)} />
              <ActionButton variant="delete" label="Apagar produto" icon={Trash2} onClick={() => setConfirmingDelete(true)} />
            </>
          )}
          {isEditing && (
            <>
              <ActionButton variant="cancel" label="Cancelar" icon={XCircle} onClick={handleCancel} />
              <ActionButton variant="save"   label="Salvar"   icon={Save}    onClick={handleSave} isLoading={isLoading} />
            </>
          )}
        </div>

      </BaseModal>

      {/* Modal de confirmação de delete — separado e empilhado */}
      <DeleteConfirmModal
        isOpen={confirmingDelete}
        productName={product.name}
        isLoading={isLoading}
        onCancel={() => setConfirmingDelete(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}

// ─── Componentes internos de apoio ─────────────────────────────────────────────────────

function ModalField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[10px] font-semibold text-noozi-muted uppercase tracking-wider">
        {label}
      </p>
      {children}
    </div>
  );
}

function ModalValue({ children, tooltip }: { children: React.ReactNode; tooltip?: string }) {
  return (
    <div className="flex items-start gap-1">
      <p className="text-sm font-medium text-noozi-text break-words w-full min-w-0">
        {children}
      </p>
      {tooltip && <Tooltip text={tooltip} position="right" />}
    </div>
  );
}

function ModalInput({ value, onChange, type = "text" }: {
  value: string | undefined;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        h-9 w-full rounded-lg border border-noozi-border
        bg-noozi-input_field px-3
        text-sm text-noozi-text placeholder:text-noozi-muted
        focus:outline-none focus:ring-2 focus:ring-noozi-bright_blue/30 focus:border-noozi-bright_blue
        transition-all duration-150
      "
    />
  );
}

