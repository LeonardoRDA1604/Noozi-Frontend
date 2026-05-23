import { useMemo, useState, useEffect } from "react";
import type { filter } from "@/types/FilterSearchbar.types";
import { structureSearch } from "@/constants/MiniSearch";
import type { Product } from "@/types/Product.types";
import TableHearder from "@/components/Cards/ProductCard/TableHeader";
import { GetBreakpoints } from "./GetBrakpoints";
import { COLUMNS, GRID_COLS } from "./Columns";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";

export default function CreateCardItem({ filter, products }: filter) {
  const miniSearch = useMemo(() => structureSearch, []);

  const [filterDebouncado, setFilterDebouncado] = useState(filter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterDebouncado(filter);
    }, 200);

    return () => clearTimeout(timer);
  }, [filter]);

  const itemsFilter = useMemo(() => {
    if (!filterDebouncado) return products;

    const searchResults = miniSearch.search(filterDebouncado);
    if (searchResults.length === 0) return products;

    return searchResults
      .map((r) => products.find((item) => item.id_product === r.id_product))
      .filter(Boolean) as Product[];
  }, [filterDebouncado, miniSearch, products]);

  return (
    <>
      <div className="flex flex-col gap-3 w-full px-3 py-5">
        <TableHearder />
        {itemsFilter.map((item) => (
          <CardItem key={item.id_product} item={item} />
        ))}
      </div>
    </>
  );
}

function CardItem({ item }: { item: Product }) {
  const circleColor = "bg-green-400 border-green-200 shadow-green-400/50";
  const value: Record<string, React.ReactNode> = {

    Status: (
      <div className="flex items-center gap-1">
        <div
          className={`w-2 h-2 shrink-0 rounded-full border-2 shadow-lg ${circleColor} sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6`}
        />
        <span className="text-black font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px]">Ativo</span>
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
            onSuccess={() => {}}
          />
          <ActionButton
            variant="delete"
            label=""
            icon={Trash2}
            productId={item.id_product}
            onSuccess={() => {}}
          />
        </div>

      </div>
    ),
  };
  
  return (
    <div
    className={`grid ${GRID_COLS} w-full bg-gray-500 rounded-xl shadow-sm`}
    >
      {COLUMNS.map((col, index, arr) => (
        <div
          key={col.label}
          className={`
            ${GetBreakpoints(col.priority)}
            items-center justify-center py-2
            px-1 sm:px-3 sm:py-4 md:px-4 md:py-3
            ${index < arr.length - 1 ? "border-r-2 border-white" : ""}
          `}
        >
          {value[col.label]}
        </div>
      ))}
    </div>
  );
}
