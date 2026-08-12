import { Pencil, Trash2 } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { StatusBadge } from "@/components/Status/StatusBadge";
import type { Product } from "@/types/Product.types";
import { PRODUCT_STATUS_CONFIG } from "@/constants/productStatusConfig";
import { formatCurrency } from "../currency/formatCurrency";
import { formatISODate } from "../date/formatISODate";
import { Tooltip } from "@/components/ToolTip/ToolTip";

export function productCardColumns(item: Product) {
    const status = item.is_active ? "active" : "inactive";
    const config = PRODUCT_STATUS_CONFIG[status];
    const fontBaseStyle = "w-full min-w-0 text-noozi-text text-center text-[12px] sm:text-[14px] md:text-[15px] break-words leading-tight";
    const value: Record<string, React.ReactNode> = {

    Status: (
      <div className="flex items-center gap-2">
        <StatusBadge badgeClass={config.badgeClass} badgeText={config.badgeText} />
      </div>
    ),

     ID: (
      <span className={`font-medium ${fontBaseStyle}`}>
        {!item.id_product ? "—" : item.id_product}
      </span>
    ),

    Nome: (
      <span className={`font-bold ${fontBaseStyle} truncate max-w-[30ch]`}>
        {!item.name ? "—" : item.name}
      </span>
    ),

    Quantidade: (
      <span className={`font-medium ${fontBaseStyle}`}>
        {!item.stock_quantity ? "—" : item.stock_quantity} un.
      </span>
    ),

    Preço: (
      <span className={`font-medium ${fontBaseStyle} truncate max-w-[100ch]`}>
        {!item.item_price ? "—" : formatCurrency(item.item_price)}
      </span>
    ),

    Categoria: (
      <span className={`font-medium ${fontBaseStyle}`}>
        {!item.category ? "—" : item.category }
      </span>
    ),

    Validade: (
      <span className={`font-medium ${fontBaseStyle}`}>
        {!item.expiration_date ? "—" : formatISODate(item.expiration_date)}
      </span>
    ),

    Marca: (
      <span className={`font-medium ${fontBaseStyle}`}>
        {!item.brand ? "—" : item.brand}
      </span>
    ),

    Ação: (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 py-1">

        {/* mobile — só ícone */}
        <div className="flex flex-row gap-1">
          <Tooltip text="Editar produto" position="left">
            <ActionButton
              variant="edit"
              label="Editar produto"
              icon={Pencil}
              hideLabelVisual={true}
              //onSuccess={() => {}}
            />
          </Tooltip>

          <Tooltip text="Apagar produto" position="left">
            <ActionButton
              variant="delete"
              label="Apagar produto"
              icon={Trash2}
              productId={item.id_product}
              hideLabelVisual={true}
              //onSuccess={() => {}}
            />
          </Tooltip>
        </div>

      </div>
    ),
  };
  return { value }
}

