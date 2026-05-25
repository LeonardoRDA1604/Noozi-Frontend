import { Pencil, Trash2 } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { StatusBadge } from "@/components/Status/StatusBadge";
import type { Product } from "@/types/Product.types";

import { PRODUCT_STATUS_CONFIG } from "@/constants/productStatusConfig";

export function ProductCardColumns(item: Product) {
    // const circleColor = "bg-green-400 border-green-200 shadow-green-400/50";
    const status = item.is_active ? "active" : "inactive";
    const config = PRODUCT_STATUS_CONFIG[status];
    const value: Record<string, React.ReactNode> = {

    Status: (
      <div className="flex items-center gap-2">
        {/* <div
          className={`w-2 h-2 shrink-0 rounded-full border-2 shadow-lg ${circleColor} sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-4 2xl:h-4`}
        />
        <span className="text-black font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px]">Ativo</span> */}

      {/* <span className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${config.badgeClass}`}>
        {config.badgeText}
      </span> */}

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
        R$ {item.item_price}
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

