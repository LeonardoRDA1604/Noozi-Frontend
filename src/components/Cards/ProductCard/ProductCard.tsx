import { useMemo, useState, useEffect } from "react";
import type { filter } from "@/types/FilterSearchbar.types";
import { structureSearch } from "@/constants/MiniSearch";
import type { Product } from "@/types/Product.types";
import TableHearder from "@/components/Cards/TableHeader/TableHeader";
import { GetBreakpoints } from "../../../utils/GetBrakpoints";
import { COLUMNS, GRID_COLS } from "@/constants/Columns";
import { useProductCardColumns } from "@/hooks/ProductCardColumns";
import { formatCurrency } from "@/utils/Currency";


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
      <div className="flex flex-col gap-5 w-full px-3 py-5">
        <TableHearder />
        {itemsFilter.map((item) => (
          <CardItem key={item.id_product} item={item} />
        ))}
      </div>
    </>
  );
}

function CardItem({ item }: { item: Product }) {
  const { value } = useProductCardColumns(item)
  
  return (
    <div
    className={`grid ${GRID_COLS} w-full rounded-xl shadow-sm`}
    >
      {COLUMNS.map((col, index, arr) => (
        <div
          key={col.label}
          className={`
            ${GetBreakpoints(col.priority)}
            items-center justify-center py-2
            px-1 sm:px-3 sm:py-4 md:px-4 md:py-3 shadow-md rounded-md
            ${index < arr.length - 1 ? "border-r-2 border-noozi-gray-300" : ""}
          `}
        >
          {value[col.label]}
        </div>
      ))}
    </div>
  );
}
