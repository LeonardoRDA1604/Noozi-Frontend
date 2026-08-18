import { useState, useEffect } from "react";
import { BaseModal } from "@/components/Modals/BaseModal/BaseModal";
import { productService } from "@/services/product.service";
import { ProductModal } from "@/components/Modals/ProductModal/ProductModal";
import type { Product } from "@/types/Product.types";
import type { ModalType } from "@/types/ModalType.types";

interface MetricsModalProps {
  type: ModalType;
  onClose: () => void;
}

// Título do modal baseado no tipo de métrica
const titleMap: Record<NonNullable<ModalType>, string> = {
  "estoque-baixo":      "Produtos com estoque baixo",
  "estoque-excessivo":  "Produtos com estoque em excesso",
  "vencimento-proximo": "Produtos próximos do vencimento",
  "expirados":          "Produtos vencidos",
  "ativo":              "Produtos ativos",
  "inativo":            "Produtos inativos",
};

// Busca o service correto para cada tipo de métrica
async function fetchByType(type: NonNullable<ModalType>): Promise<Product[]> {
  switch (type) {
    case "estoque-baixo":      return productService.getLowStock();
    case "estoque-excessivo":  return productService.getOverStock();
    case "vencimento-proximo": return productService.getExpiringSoon();
    case "expirados":          return productService.getExpired();
    case "ativo":              return productService.getActive();
    case "inativo":            return productService.getInactive();
  }
}

export function MetricsModal({ type, onClose }: MetricsModalProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Produto selecionado — abre ProductModal ao clicar no item
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!type) return;

    async function load() {
      try {
        setIsLoading(true);
        const data = await fetchByType(type!);
        setProducts(data);
      } finally {
        setIsLoading(false);
      }
    }

    load();

    const modalUpdateInterval = setInterval(load, 20000); // Atualiza a cada 20s

    return () => clearInterval(modalUpdateInterval); // 
  }, [type]);

  if (!type) return null;

  return (
    <>
      <BaseModal
        isOpen={!!type}
        onClose={onClose}
        title={titleMap[type]}
        size="md"
      >
        {/* Estado de carregamento */}
        {isLoading && (
          <p className="text-sm text-noozi-muted text-center py-4">
            Carregando...
          </p>
        )}

        {/* Lista vazia */}
        {!isLoading && products.length === 0 && (
          <p className="text-sm text-noozi-muted text-center py-4">
            Nenhum produto encontrado.
          </p>
        )}

        {/* Lista de produtos */}
        {!isLoading && products.map((product) => (
          <button
            key={product.id_product}
            type="button"
            onClick={() => setSelectedProduct(product)}
            className="w-full flex items-center gap-3 p-3 rounded-lg border border-noozi-border hover:bg-noozi-surface transition-colors text-left"
          >
            {/* Indicador de status */}
            <div className={`shrink-0 w-2.5 h-2.5 rounded-full ${
              product.is_active ? "bg-status-success" : "bg-noozi-gray-400"
            }`} />

            {/* Nome e marca */}
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-sm font-medium text-noozi-text truncate">
                {product.name}
              </p>
              <p className="text-xs text-noozi-muted truncate">
                {product.brand ?? "—"} · {product.category ?? "—"}
              </p>
            </div>

            {/* Estoque */}
            <p className="shrink-0 text-xs font-bold text-noozi-text">
              {product.stock_quantity} {product.unit_measure ?? "un."}
            </p>
          </button>
        ))}
      </BaseModal>

      {/* ProductModal abre ao clicar em um produto da lista */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onDeleted={() => { setSelectedProduct(null); onClose(); }}
          onUpdated={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}