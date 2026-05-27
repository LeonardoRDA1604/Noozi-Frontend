import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import type { ActionButtonProps, ActionButtonVariant } from "@/types/ActionButton.types";
import { productService } from "@/services/product.service";

// Estilos base compartilhados por todas as variantes
// rounded xl se for deixar no padrão do resto da página
const baseStyle = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-150 will-change-transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2";

// Estilos específicos por variante
const variantStyles: Record<ActionButtonVariant, string> = {
  primary: "w-full h-11 bg-noozi-bright_blue text-white text-sm hover:opacity-90 active:opacity-80 focus:ring-noozi-bright_blue/40",
  submit:  "w-full h-11 bg-noozi-bright_blue text-white text-sm hover:opacity-90 active:opacity-80 focus:ring-noozi-bright_blue/40",
  edit:    "h-8 px-3 bg-noozi-bright_blue/10 text-noozi-bright_blue text-xs border border-noozi-bright_blue/20 hover:bg-noozi-bright_blue/20 active:opacity-80 focus:ring-noozi-bright_blue/40",
  delete:  "h-8 px-3 bg-status-danger/10 text-status-danger text-xs border border-status-danger/20 hover:bg-status-danger/20 active:bg-status-danger/30 focus:ring-status-danger/40",
  cancel:  "h-8 px-3 bg-noozi-surface text-noozi-muted text-xs border border-noozi-border hover:bg-noozi-gray-200 focus:ring-noozi-border",
  // antigo edit(maybe cancel):    "h-8 px-3 bg-noozi-surface text-noozi-text text-xs border border-noozi-border hover:bg-noozi-gray-200 focus:ring-noozi-border",
  save:    "h-8 px-3 bg-noozi-bright_blue text-white text-xs hover:opacity-90 active:opacity-80 focus:ring-noozi-bright_blue/40",
  filter: "h-10 px-3 bg-noozi-background border border-noozi-border text-noozi-text text-sm hover:bg-noozi-surface focus:ring-noozi-bright_blue/40",
};

export function ActionButton({
  label, 
  variant, 
  icon: Icon, 
  href, 
  productId,
  onSuccess, 
  onError, 
  onClick, 
  disabled = false, 
  isLoading = false,
  hideLabelVisual = false
  isActive,
}: ActionButtonProps & {hideLabelVisual?: boolean}) {

  const className = `${baseStyle} ${variantStyles[variant]}`;

  // Conteúdo interno — ícone + label (ou spinner durante loading)
  const content = (
    <>
      {isLoading
        ? <Loader2 className="h-4 w-4 animate-spin" />
        : Icon && <Icon className="h-4 w-4 shrink-0" />
      }
      <span className={hideLabelVisual ? "sr-only" : ""}>
      {label}
    </span>
    </>
  );

  // ─── Variante primary — navegação via Link ─────────────────────────────────
  if (variant === "primary" && href) {
  return <Link to={href} className={className} aria-label={label}>{content}</Link>;
}

  // ─── Variante delete — chama productService.remove ────────────────────────
  if (variant === "delete") {
    // Se tem onClick externo, usa ele diretamente
    if (onClick) {
      return (
        <button type="button" disabled={disabled || isLoading} className={className} onClick={onClick}>
          {content}
        </button>
      );
    }

    // Sem onClick, usa a lógica interna com productId
    async function handleDeleteInternal() {
      if (!productId) return;
      try {
        await productService.remove(productId);
        onSuccess?.(); // ex: fecha modal e atualiza lista
      } catch (error) {
        onError?.(error);
      }
    }

    return (
      <button type="button" disabled={disabled || isLoading} className={className} onClick={handleDeleteInternal}>
        {content}
      </button>
    );
  }

// ─── Variante filter — botão de filtro com indicador de ativos ────────────
if (variant === "filter") {
  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      aria-label={isActive ? "Filtros ativos — clique para filtrar" : "Abrir filtros"}
      aria-pressed={isActive}
      className={`${className} ${isActive ? "border-noozi-bright_blue text-noozi-bright_blue bg-noozi-bright_blue/5" : ""}`}
      onClick={onClick ?? onSuccess}
    >
      {content}
      {isActive && (
        <span className="h-2 w-2 rounded-full bg-noozi-bright_blue shrink-0" aria-hidden="true" />
      )}
    </button>
  );
}


  // ─── Variantes edit, cancel, save e submit caem aqui
  // onClick tem prioridade — onSuccess é fallback
  return (
    <button
      type={variant === "submit" ? "submit" : "button"}
      disabled={disabled || isLoading}
      className={className}
      onClick={onClick ?? onSuccess}
      aria-label={label}
    >
      {content}
    </button>
  );
}