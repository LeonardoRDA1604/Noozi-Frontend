import { useState } from "react";
import { Pencil, Trash2, Save, XCircle } from "lucide-react";
import { BaseModal } from "@/components/Modals/BaseModal/BaseModal";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { productService } from "@/services/product.service";
import type { Product, UpdateProductDTO } from "@/types/Product.types";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onDeleted: () => void;   // recarrega lista após deletar
  onUpdated: () => void;   // recarrega lista após editar
}

// Formata data ISO → dd/mm/aaaa
function formatDate(iso?: string): string {
  if (!iso) return "—";
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

// Formata número → moeda brasileira
function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ProductModal({
  product,
  onClose,
  onDeleted,
  onUpdated,
}: ProductModalProps) {
  const [isEditing, setIsEditing]           = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [isLoading, setIsLoading]           = useState(false);

  // Campos editáveis inicializados com os valores do produto
  const [editData, setEditData] = useState<UpdateProductDTO>({
    name:            product.name,
    brand:           product.brand,
    category:        product.category,
    item_price:      product.item_price,
    stock_quantity:  product.stock_quantity,
    expiration_date: product.expiration_date,
  });

  async function handleSave() {
    try {
      setIsLoading(true);
      await productService.update(product.id_product, editData);
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
      size="sm"
    >
      {/* Indicador de status */}
      <div className="flex items-center gap-2">
        <div className={`w-2.5 h-2.5 rounded-full ${
          product.is_active ? "bg-status-success" : "bg-noozi-gray-400"
        }`} />
        <span className="text-xs text-noozi-muted">
          {product.is_active ? "Ativo" : "Inativo"}
        </span>
      </div>

      {/* Campos */}
      <div className="flex flex-col gap-3">

        <ModalField label="Nome">
          {isEditing
            ? <ModalInput value={editData.name ?? ""} onChange={(v) => setEditData({ ...editData, name: v })} />
            : <ModalValue>{product.name}</ModalValue>
          }
        </ModalField>

        <div className="grid grid-cols-2 gap-3">
          <ModalField label="Marca">
            {isEditing
              ? <ModalInput value={editData.brand ?? ""} onChange={(v) => setEditData({ ...editData, brand: v })} />
              : <ModalValue>{product.brand ?? "—"}</ModalValue>
            }
          </ModalField>
          <ModalField label="Categoria">
            {isEditing
              ? <ModalInput value={editData.category ?? ""} onChange={(v) => setEditData({ ...editData, category: v })} />
              : <ModalValue>{product.category ?? "—"}</ModalValue>
            }
          </ModalField>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <ModalField label="Preço">
            {isEditing
              ? <ModalInput type="number" value={String(editData.item_price ?? "")} onChange={(v) => setEditData({ ...editData, item_price: Number(v) })} />
              : <ModalValue>{formatCurrency(product.item_price)}</ModalValue>
            }
          </ModalField>
          <ModalField label="Estoque">
            {isEditing
              ? <ModalInput type="number" value={String(editData.stock_quantity ?? "")} onChange={(v) => setEditData({ ...editData, stock_quantity: Number(v) })} />
              : <ModalValue>{product.stock_quantity} {product.unit_measure ?? "un."}</ModalValue>
            }
          </ModalField>
        </div>

        <ModalField label="Vencimento">
          {isEditing
            ? <ModalInput type="date" value={editData.expiration_date ?? ""} onChange={(v) => setEditData({ ...editData, expiration_date: v })} />
            : <ModalValue>{formatDate(product.expiration_date)}</ModalValue>
          }
        </ModalField>

        {/* SKU e Lote — somente leitura */}
        <div className="grid grid-cols-2 gap-3">
          <ModalField label="SKU"><ModalValue>{product.sku}</ModalValue></ModalField>
          <ModalField label="Lote"><ModalValue>{product.batch_code ?? "—"}</ModalValue></ModalField>
        </div>

      </div>

      {/* Botões de ação */}
      <div className="flex flex-col gap-2 pt-1">

        {/* Visualização normal */}
        {!isEditing && !confirmingDelete && (
          <div className="flex gap-2">
            <ActionButton variant="edit"   label="Editar" icon={Pencil} onClick={() => setIsEditing(true)} />
            <ActionButton variant="delete" label="Apagar" icon={Trash2} onClick={() => setConfirmingDelete(true)} />
          </div>
        )}

        {/* Confirmação de delete */}
        {confirmingDelete && (
          <>
            <p className="text-xs text-status-danger font-medium text-center">
              Tem certeza que deseja apagar este produto?
            </p>
            <div className="flex gap-2">
              <ActionButton variant="cancel" label="Cancelar" icon={XCircle} onClick={() => setConfirmingDelete(false)} />
              <ActionButton variant="delete" label="Confirmar" icon={Trash2} productId={product.id_product} isLoading={isLoading} onSuccess={handleDelete} />
            </div>
          </>
        )}

        {/* Modo edição */}
        {isEditing && (
          <div className="flex gap-2">
            <ActionButton variant="cancel" label="Cancelar" icon={XCircle} onClick={() => setIsEditing(false)} />
            <ActionButton variant="save"   label="Salvar"   icon={Save}    isLoading={isLoading} onClick={handleSave} />
          </div>
        )}

      </div>
    </BaseModal>
  );
}

// ─── Componentes internos de apoio ────────────────────────────────────────────

function ModalField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-[10px] font-medium text-noozi-muted uppercase tracking-wide">{label}</p>
      {children}
    </div>
  );
}

function ModalValue({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-medium text-noozi-text">{children}</p>;
}

function ModalInput({ value, onChange, type = "text" }: {
  value: string;
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