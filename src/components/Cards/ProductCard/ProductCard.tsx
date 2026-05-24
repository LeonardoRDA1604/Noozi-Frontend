import { useMemo, useState, useEffect } from "react";
import type { filter } from "@/types/FilterSearchbar.types";
import { structureSearch } from "@/constants/MiniSearch";
import type { Product } from "@/types/Product.types";
import TableHeader from "@/components/Cards/TableHeader/TableHeader";
import { GetBreakpoints } from "../../../utils/GetBreakpoints";
import { COLUMNS, GRID_COLS } from "@/constants/columns";
import { useProductCardColumns } from "@/hooks/ProductCardColumns";
import { ProductModal } from "@/components/Modals/ProductModal/ProductModal";
// import { formatCurrency } from "@/utils/Currency";


export default function CreateCardItem({ filter, products }: filter) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const miniSearch = useMemo(() => structureSearch, []);

  const [filterDebounced, setFilterDebounced] = useState(filter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterDebounced(filter);
    }, 200);

    return () => clearTimeout(timer);
  }, [filter]);

  const itemsFilter = useMemo(() => {
    if (!filterDebounced) return products;

    const searchResults = miniSearch.search(filterDebounced);
    if (searchResults.length === 0) return products;

    return searchResults
      .map((r) => products.find((item) => item.id_product === r.id_product))
      .filter(Boolean) as Product[];
  }, [filterDebounced, miniSearch, products]);

  return (
    <>
      <div className="flex flex-col gap-5 w-full px-3 py-5">
        <TableHeader />
        {itemsFilter.map((item) => (
          <CardItem
          key={item.id_product}
          item={item}
          onSelect={() => setSelectedProduct(item)}
          />
        ))}
      </div>
      {selectedProduct && (
      <ProductModal
      product={selectedProduct}
      onClose={() => setSelectedProduct(null)}
      onDeleted={() => setSelectedProduct(null)}
      onUpdated={() => setSelectedProduct(null)}
      />
      )}
    </>
  );
}

function CardItem({ item, onSelect }: { item: Product, onSelect: () => void}) {
  const { value } = useProductCardColumns(item)
  
  return (
    <div
    onClick={onSelect}
    className={`grid ${GRID_COLS} w-full rounded-xl shadow-sm hover:bg-gray-100 cursor-pointer transition-colors duration-200`}
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
