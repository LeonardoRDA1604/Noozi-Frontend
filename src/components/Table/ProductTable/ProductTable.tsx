import { useMemo, useState, useEffect, useRef } from "react";
import type { filter } from "@/types/FilterSearchbar.types";
import { structureSearch } from "@/constants/MiniSearch";
import type { Product } from "@/types/Product.types";
import { getBreakpoints } from "@/utils/responsive/getBreakpoints";
import { COLUMNS, GRID_COLS } from "@/constants/columns";
import { productCardColumns } from "@/utils/products/productCardColumns";
import { ProductModal } from "@/components/Modals/ProductModal/ProductModal";

interface ProductCardListProps extends filter {
  onProductChange: () => void;
}

export default function ProductTable({ filter, products, onProductChange }: ProductCardListProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const miniSearch  = useMemo(() => structureSearch, []);
  const [filterDebounced, setFilterDebounced] = useState(filter);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setFilterDebounced(filter), 200);
    return () => clearTimeout(timer);
  }, [filter]);

  const itemsFilter = useMemo(() => {
    if (!filterDebounced) return products;
    const results = miniSearch.search(filterDebounced);
    if (results.length === 0) return products;
    return results
      .map((r) => products.find((item) => item.id_product === r.id_product))
      .filter(Boolean) as Product[];
  }, [filterDebounced, miniSearch, products]);

  return (
    <>
      <div className="flex flex-col w-full gap-0">

        {/* Header fixo — não scrolla, apenas os itens*/}
        <div
          role="rowgroup"
          aria-label="Cabeçalho da tabela"
          className="sticky top-14 z-10 rounded-xl overflow-hidden shadow-sm"
        >

          <div role="row" className={`grid ${GRID_COLS} w-full bg-noozi-bright_blue`}>
            {COLUMNS.map((col) => (
              <div
                key={col.label}
                role="columnheader"
                aria-sort="none"
                className={`
                  ${getBreakpoints(col.priority)}
                  items-center justify-center
                  px-3 py-3 md:px-4
                  text-xs sm:text-sm font-semibold text-white
                  border-r border-white/20 last:border-r-0
                `}
              >
                {col.label}
              </div>
            ))}
          </div>
        </div>

        {/* Lista de cards scrollável */}
        <div
          ref={scrollRef}
          className="
            flex flex-col gap-3 mt-3
            overflow-y-auto
            max-h-[calc(100vh-280px)]
            pr-1

            /* scrollbar minimalista */
            scrollbar-thin
            scrollbar-track-transparent
            scrollbar-thumb-noozi-border
            hover:scrollbar-thumb-noozi-muted/40
          "
          role="rowgroup"
          aria-label="Lista de produtos"
        >
          {itemsFilter.length === 0 ? (
            <div className="flex items-center justify-center py-16 text-sm text-noozi-muted">
              Nenhum produto encontrado.
            </div>
          ) : (
            itemsFilter.map((item) => (
              <CardItem
                key={item.id_product}
                item={item}
                onSelect={() => setSelectedProduct(item)}
              />
            ))
          )}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onDeleted={() => { setSelectedProduct(null); onProductChange(); }}
          onUpdated={() => { setSelectedProduct(null); onProductChange(); }}
        />
      )}
    </>
  );
}

function CardItem({ item, onSelect }: { item: Product; onSelect: () => void }) {
  const { value } = productCardColumns(item);

  return (
    <div
      role="row"
      tabIndex={0}
      aria-label={`Produto ${item.name}, clique para ver detalhes`}
      onClick={onSelect}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      className={`
        grid ${GRID_COLS} w-full
        bg-noozi-background rounded-xl
        border border-noozi-border
        shadow-card
        hover:shadow-md hover:border-noozi-muted/40
        cursor-pointer transition-all duration-150
        focus:outline-none focus:ring-2 focus:ring-noozi-bright_blue/40
      `}
    >
      {COLUMNS.map((col, index, arr) => (
        <div
          key={col.label}
          role="cell"
          className={`
            ${getBreakpoints(col.priority)}
            items-center justify-center
            px-3 py-3 md:px-4
            min-w-0 overflow-hidden
            ${index < arr.length - 1 ? "border-r border-noozi-border" : ""}
          `}
        >
          {value[col.label]}
        </div>
      ))}
    </div>
  );
}