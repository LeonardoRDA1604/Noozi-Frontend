import { Pencil, Trash2 } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { StatusBadge } from "@/components/Status/StatusBadge";
import type { Product } from "@/types/Product.types";
import { PRODUCT_STATUS_CONFIG } from "@/constants/productStatusConfig";
import { formatCurrency } from "./formatCurrency";

export function productCardColumns(item: Product) {
    const status = item.is_active ? "active" : "inactive";
    const config = PRODUCT_STATUS_CONFIG[status];
    const value: Record<string, React.ReactNode> = {

    Status: (
      <div className="flex items-center gap-2">
        <StatusBadge badgeClass={config.badgeClass} badgeText={config.badgeText} />
      </div>
    ),

     ID: (
      <span className="text-black font-medium  text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
        {item.id_product}
      </span>
    ),

    Nome: (
      <span className="text-black font-bold text-center leading-tight text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px]">
        {item.name}
      </span>
    ),

    Quantidade: (
      <span className="text-black font-bold text-[12px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]">
        {item.stock_quantity} un.
      </span>
    ),

    Preço: (
      <span className="text-black font-bold text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">
        {formatCurrency(item.item_price)}
      </span>
    ),

    Categoria: (
      <span className="text-black font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
        {item.category}
      </span>
    ),

    Validade: (
      <span className="text-black font-bold text-[12px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px]">
        {item.expiration_date}
      </span>
    ),

    Marca: (
      <span className="text-black font-medium text-[16px]">
        {item.brand}
      </span>
    ),

    Ação: (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 py-1">

        {/* mobile — só ícone */}
        <div className="flex flex-row gap-1">
          <ActionButton
            variant="edit"
            label=""
            icon={Pencil}
            //onSuccess={() => {}}
          />
          <ActionButton
            variant="delete"
            label=""
            icon={Trash2}
            productId={item.id_product}
            //onSuccess={() => {}}
          />
        </div>

      </div>
    ),
  };
  return { value }
}

