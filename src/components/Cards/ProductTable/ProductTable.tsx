import { useMemo, useState, useEffect } from "react";
import type { filter } from "@/types/FilterSearchbar.types";
import { structureSearch } from "@/constants/MiniSearch";
import type { Product } from "@/types/Product.types";
import { getBreakpoints } from "@/utils/getBreakpoints";
import { COLUMNS, GRID_COLS } from "@/constants/columns";
import { productCardColumns } from "@/utils/productCardColumns";
import { ProductModal } from "@/components/Modals/ProductModal/ProductModal";

export default function ProductTable({ filter, products }: filter) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const miniSearch = useMemo(() => structureSearch, []);
  const [filterDebounced, setFilterDebounced] = useState(filter);

    useEffect(() => {
    const timer = setTimeout(() => {
      setFilterDebounced(filter)
    }, 200)
    return () => clearTimeout(timer)
  }, [filter])

  const itemsFilter = useMemo(() => {
    if (!filterDebounced) return products
    const searchResults = miniSearch.search(filterDebounced)
    if (searchResults.length === 0) return products
    return searchResults
      .map((r) => products.find((item) => item.id_product === r.id_product))
      .filter(Boolean) as Product[]
  }, [filterDebounced, miniSearch, products])

  return(
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
  )
}

function TableHeader() {
  return (
    <TableRow isHeader>
      {COLUMNS.map((col, index) => (
        <TableCell key={col.label} col={col} index={index} isHeader>
          <span className="font-medium">{col.label}</span>
        </TableCell>
      ))}
    </TableRow>
  );
}

function CardItem({ item, onSelect }: { item: Product; onSelect: () => void }) {
  const { value } = productCardColumns(item);

  return (
    <TableRow onClick={onSelect}>
      {COLUMNS.map((col, index) => (
        <TableCell key={col.label} col={col} index={index}>
          {value[col.label]}
        </TableCell>
      ))}
    </TableRow>
  );
}

function TableRow({
  children,
  onClick,
  isHeader = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  isHeader?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`
            grid ${GRID_COLS} w-full rounded-xl
            ${
              isHeader
                ? "bg-noozi-bright_blue text-white font-semibold"
                : "shadow-sm hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            }
            `}
    >
      {children}
    </div>
  );
}

function TableCell({
  col,
  index,
  isHeader = false,
  children,
}: {
  col: { label: string; priority: number };
  index: number;
  isHeader?: boolean;
  children: React.ReactNode;
}) {
  // último visível em cada breakpoint
  const quantity   = "Quantidade";
  const category   =  "Categoria";
  const actionMd   =       "Ação";
  const action2xl  =       "Ação";
  const actionlg   =       "Ação";
  const brand      =      "Marca";

  const bordaClasse = [
    col.label === quantity   ? "border-r-0"    : "border-r-2",
    col.label === category   ? "sm:border-r-0" : "sm:border-r-2",
    col.label === actionMd   ? "md:border-r-0" : "md:border-r-2",
    col.label === actionlg   ? "lg:border-r-0" : "lg:border-r-2",
    col.label === brand      ? "xl:border-r-0" : "xl:border-r-2",
    col.label === action2xl  ? "xl:border-r-0" : "xl:border-r-2",
  ].join(" ");

  return (
    <div
      className={`
        ${getBreakpoints(col.priority)}
        items-center justify-center
        px-1 sm:px-3 md:px-4
        py-3 sm:py-4 md:py-3
        self-stretch
        ${
          isHeader
            ? "border-white"
            : "border-noozi-gray-300 shadow-sm rounded-md"
        }
        border-r-2 ${bordaClasse}
        ${
          isHeader
            ? "p-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px]"
            : ""
        }
        `}
    >
      {children}
    </div>
  );
}
