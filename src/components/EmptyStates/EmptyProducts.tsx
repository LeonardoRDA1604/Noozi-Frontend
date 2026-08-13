import { Package, PackageSearch } from "lucide-react";
import { ActionButton } from "../Buttons/ActionButton/ActionButton";
import { CirclePlus } from "lucide-react";

interface EmptyProductsProps {
  /** Se há um filtro/busca ativa — muda o texto e o ícone */
  isFiltered?: boolean;
}

/**
 * Empty state para a lista de produtos.
 * - Sem filtro: nenhum produto cadastrado ainda
 * - Com filtro: busca sem resultados
 */
export function EmptyProducts({ isFiltered = false }: EmptyProductsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-5 select-none">

      {/* Ícone em container estilizado */}
      <div className="relative">
        {/* Sombra decorativa atrás */}
        <div className="absolute inset-0 translate-y-1 rounded-2xl bg-noozi-border/60 blur-sm" />

        <div className="relative flex items-center justify-center w-20 h-20 bg-white rounded-2xl border border-noozi-border shadow-sm">
          {isFiltered
            ? <PackageSearch size={36} strokeWidth={1.5} className="text-noozi-muted" />
            : <Package       size={36} strokeWidth={1.5} className="text-noozi-muted" />
          }
        </div>
      </div>

      {/* Texto */}
      <div className="flex flex-col items-center gap-1.5 text-center max-w-xs">
        <p className="text-base font-semibold text-noozi-gray-800">
          {isFiltered ? "Nenhum produto encontrado" : "Nenhum produto cadastrado"}
        </p>
        <p className="text-sm text-noozi-muted leading-relaxed">
          {isFiltered
            ? "Tente ajustar os filtros ou o termo de busca para encontrar o que procura."
            : "Cadastre o primeiro produto para começar a gerenciar seu estoque."}
        </p>
        <ActionButton variant="primary"     label="Cadastrar Produto"           icon={CirclePlus}          href="/products/new" />
      </div>

    </div>
  );
}