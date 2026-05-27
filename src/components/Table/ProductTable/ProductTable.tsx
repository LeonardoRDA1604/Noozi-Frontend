import { useMemo, useState, useEffect } from "react";
import type { filter } from "@/types/FilterSearchbar.types";
import { structureSearch } from "@/constants/MiniSearch";
import type { Product } from "@/types/Product.types";
import { getBreakpoints } from "@/utils/responsive/getBreakpoints";
import { COLUMNS, GRID_COLS } from "@/constants/columns";
import { productCardColumns } from "@/utils/products/productCardColumns";
import { ProductModal } from "@/components/Modals/ProductModal/ProductModal";

// Adiciona onProductChange ao tipo existente (FilterSearchbar.types)
interface ProductCardListProps extends filter {
  onProductChange: () => void; // chamado após editar ou deletar — atualiza a lista
}

export default function ProductTable({
  filter,
  products,
  onProductChange,
}: ProductCardListProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const miniSearch = useMemo(() => structureSearch, []);
  const [filterDebounced, setFilterDebounced] = useState(filter);

  useEffect(() => {
    const timer = setTimeout(() => setFilterDebounced(filter), 200);
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
      <div className="w-full px-3 overflow-hidden">
        {/* Header fora do scroll, fixo */}
        <div className="px-3 pt-5">
          <TableHeader />
        </div>

        {/* Apenas os itens scrollam */}
        <div className="flex flex-col gap-5 w-full px-3 py-5 overflow-y-auto max-h-[calc(100vh-200px)]">
          {itemsFilter.map((item) => (
            <CardItem
              key={item.id_product}
              item={item}
              onSelect={() => setSelectedProduct(item)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onDeleted={() => {
            setSelectedProduct(null);
            onProductChange(); // atualiza lista após deletar
          }}
          onUpdated={() => {
            setSelectedProduct(null);
            onProductChange(); // atualiza lista após editar
          }}
        />
      )}
    </>
  );
}

// Header
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

// Card
function CardItem({ item, onSelect }: { item: Product; onSelect: () => void }) {
  const { value } = productCardColumns(item);

  return (
    <TableRow onClick={onSelect}>
      {COLUMNS.map((col, index) => (
        <TableCell key={col.label} col={col} index={index} noOverflow={col.label === "Ação"}>
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
  sticky = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  isHeader?: boolean;
  sticky?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`
            grid ${GRID_COLS} w-full rounded-xl min-w-0
            ${
              isHeader
                ? "bg-noozi-bright_blue text-white font-semibold overflow-hidden"
                : "shadow-sm hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            }
            ${sticky ? "sticky top-0 z-20" : ""}
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
  noOverflow = false,
  children,
}: {
  col: { label: string; priority: number };
  index: number;
  isHeader?: boolean;
  noOverflow? : boolean;
  children: React.ReactNode;
}) {
  // último visível em cada breakpoint
  const quantity = "Quantidade";
  const quantitySm = "Quantidade";
  const actionMd = "Ação";
  const action2xl = "Ação";
  const actionlg = "Ação";
  const actionXl = "Ação";

  const bordaClasse = [
    col.label === quantity ? "border-r-0" : "border-r-2",
    col.label === quantitySm ? "sm:border-r-0" : "sm:border-r-2",
    col.label === actionMd ? "md:border-r-0" : "md:border-r-2",
    col.label === actionlg ? "lg:border-r-0" : "lg:border-r-2",
    col.label === actionXl ? "xl:border-r-0" : "xl:border-r-2",
    col.label === action2xl ? "2xl:border-r-0" : "2xl:border-r-2",
  ].join(" ");

  return (
    <div
      className={`
        ${getBreakpoints(col.priority)}
        items-center justify-center
        px-1 sm:px-3 md:px-4
        py-3 sm:py-4 md:py-3
        self-stretch
        min-w-0 w-full overflow-hidden
        ${noOverflow ? "overflow-visible" : "overflow-hidden"}
        ${
          isHeader
            ? "border-white"
            : "border-noozi-gray-300 shadow-sm rounded-md"
        }
        ${bordaClasse}
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
