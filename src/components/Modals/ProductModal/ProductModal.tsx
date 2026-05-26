import { useState } from "react";
import { Pencil, Trash2, Save, XCircle } from "lucide-react";
import { BaseModal } from "@/components/Modals/BaseModal/BaseModal";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { productService } from "@/services/product.service";
import type { Product, UpdateProductDTO } from "@/types/Product.types";
import { Tooltip } from "@/components/ToolTip/ToolTip";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatISODate } from "@/utils/formatISODate";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onDeleted: () => void; // recarrega lista após deletar
  onUpdated: () => void; // recarrega lista após editar
}

export function ProductModal({
  product,
  onClose,
  onDeleted,
  onUpdated,
}: ProductModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function getInitialEditData(): UpdateProductDTO {
    return {
      name: product.name,
      brand: product.brand,
      category: product.category,
      item_price: product.item_price,
      stock_quantity: product.stock_quantity,
      expiration_date: product.expiration_date,
    };
  }

  // Campos editáveis inicializados com os valores do produto
  const [editData, setEditData] =
    useState<UpdateProductDTO>(getInitialEditData);

  function handleCancel() {
    setEditData(getInitialEditData());
    setIsEditing(false);
  }

  async function handleSave() {
    try {
      setIsLoading(true);
      await productService.update(product.id_product, editData);

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
      await productService.remove(product.id_product);
      onDeleted();
      onClose();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BaseModal
      isOpen={true}
      onClose={onClose}
      title={isEditing ? "Editar produto" : "Detalhes do produto"}
      size="lg"
    >
      <hr />
      {/* Indicador de status e ID */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex text-xl gap-2 text-noozi-gray-700 font-semibold">
          <ModalValue 
          children={`#${product.id_product}`}
          tooltip="ID: Identificador único de produto"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${product.is_active ? " bg-status-success/10 text-status-success" : " bg-noozi-gray-800/10 text-noozi-gray-500"}`}>
            {product.is_active ? "Ativo" : "Inativo"}
          </span>
        </div>
      </div>

      {/* Campos */}
      <div className="flex flex-col gap-3">
        <ModalField label="Nome">
          {isEditing ? (
            <ModalInput
              value={editData.name ?? ""}
              onChange={(v) => setEditData({ ...editData, name: v })}
            />
          ) : (
            <ModalValue>{product.name}</ModalValue>
          )}
        </ModalField>

        <div className="grid grid-cols-2 gap-3">
          <ModalField label="Marca">
            {isEditing ? (
              <ModalInput
                value={editData.brand ?? ""}
                onChange={(v) => setEditData({ ...editData, brand: v })}
              />
            ) : (
              <ModalValue>{product.brand ?? "—"}</ModalValue>
            )}
          </ModalField>
          <ModalField label="Categoria">
            {isEditing ? (
              <ModalInput
                value={editData.category ?? ""}
                onChange={(v) => setEditData({ ...editData, category: v })}
              />
            ) : (
              <ModalValue>{product.category ?? "—"}</ModalValue>
            )}
          </ModalField>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <ModalField label="Preço">
            {isEditing ? (
              <ModalInput
                type="number"
                value={String(editData.item_price ?? "")}
                onChange={(v) =>
                  setEditData({ ...editData, item_price: Number(v) })
                }
              />
            ) : (
              <ModalValue>{formatCurrency(product.item_price)}</ModalValue>
            )}
          </ModalField>
          <ModalField label="Estoque">
            {isEditing ? (
              <ModalInput
                type="number"
                value={String(editData.stock_quantity ?? "")}
                onChange={(v) =>
                  setEditData({ ...editData, stock_quantity: Number(v) })
                }
              />
            ) : (
              <ModalValue>
                {product.stock_quantity} {product.unit_measure ?? "un."}
              </ModalValue>
            )}
          </ModalField>
          <ModalField label="Alerta de Estoque Baixo">
          {isEditing ? (
            <ModalInput
              type="number"
              value={String(editData.low_stock_level ?? "")}
              onChange={(v) => setEditData({ ...editData, low_stock_level: Number(v) })}
            />
          ) : (
            <ModalValue>{product.low_stock_level}</ModalValue>
          )}
        </ModalField>
          <ModalField label="Alerta de Estoque Baixo">
          {isEditing ? (
            <ModalInput
              type="number"
              value={String(editData.over_stock_level ?? "")}
              onChange={(v) => setEditData({ ...editData, over_stock_level: Number(v) })}
            />
          ) : (
            <ModalValue>{product.over_stock_level}</ModalValue>
          )}
        </ModalField>
        </div>

        <ModalField label="Descrição">
          {isEditing ? (
            <ModalInput
              type="text"
              value={editData.description ?? ""}
              onChange={(v) => setEditData({ ...editData, description: v })}
            />
          ) : (
            <ModalValue>{product.description}</ModalValue>
          )}
        </ModalField>

        <ModalField label="Vencimento">
          {isEditing ? (
            <ModalInput
              type="date"
              value={editData.expiration_date ?? ""}
              onChange={(v) => setEditData({ ...editData, expiration_date: v })}
            />
          ) : (
            <ModalValue>{formatISODate(product.expiration_date)}</ModalValue>
          )}
        </ModalField>

        {/* SKU e Lote — somente leitura */}
        <div className="grid grid-cols-2 gap-3">
          <ModalField label="SKU">
            <ModalValue>{product.sku}</ModalValue>
          </ModalField>
          <ModalField label="Lote">
            <ModalValue>{product.batch_code ?? "—"}</ModalValue>
          </ModalField>
        </div>
      </div>

      {/* Botões de ação */}
      <div className="flex flex-col gap-2 pt-1">
        {/* Visualização normal */}
        {!isEditing && !confirmingDelete && (
          <div className="flex gap-2">
            <ActionButton
              variant="edit"
              label="Editar"
              icon={Pencil}
              onClick={() => setIsEditing(true)}
            />
            <ActionButton
              variant="delete"
              label="Apagar"
              icon={Trash2}
              onClick={() => setConfirmingDelete(true)}
            />
          </div>
        )}

        {/* Confirmação de delete */}
        {confirmingDelete && (
          <>
            <p className="text-xs text-status-danger font-medium text-center">
              Tem certeza que deseja apagar este produto?
            </p>
            <div className="flex gap-2">
              <ActionButton
                variant="cancel"
                label="Cancelar"
                icon={XCircle}
                onClick={() => setConfirmingDelete(false)}
              />
              <ActionButton
                variant="delete"
                label="Confirmar"
                icon={Trash2}
                isLoading={isLoading}
                onClick={handleDelete}
              />
            </div>
          </>
        )}

        {/* Modo edição */}
        {isEditing && (
          <div className="flex gap-2">
            <ActionButton
              variant="cancel"
              label="Cancelar"
              icon={XCircle}
              onClick={handleCancel}
            />
            <ActionButton
              variant="save"
              label="Salvar"
              icon={Save}
              isLoading={isLoading}
              onClick={handleSave}
            />
          </div>
        )}
      </div>
    </BaseModal>
  );
}

// ─── Componentes internos de apoio ────────────────────────────────────────────

function ModalField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-[10px] font-medium text-noozi-muted uppercase tracking-wide">
        {label}
      </p>
      {children}
    </div>
  );
}

function ModalValue({ children,tooltip }: { children: React.ReactNode, tooltip?: string }) {
  return (
    <div className="flex gap-1">
      <p className="text-sm font-medium text-noozi-text break-words whitespace-pre-wrap w-full min-w-0">
        {children}
      </p>
      {tooltip && <Tooltip text={tooltip} position="right"/>}
    </div>
  );
}

function ModalInput({
  value,
  onChange,
  type = "text",
}: {
  value: string | undefined;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-8 w-full rounded-md border border-noozi-border px-2 text-sm text-noozi-text focus:outline-none focus:border-noozi-bright_blue transition-colors"
    />
  );
}
