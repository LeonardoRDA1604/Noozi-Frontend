import type { LucideIcon } from "lucide-react";

// Variantes visuais e semânticas do botão
export type ActionButtonVariant =
  | "primary"   // botão de navegação — leva para outra página (Link)
  | "submit"    // botão de envio de formulário (button type="submit")
  | "edit"      // botão de ação de editar — menor, para modal de produto
  | "delete"   // botão de ação de apagar — menor, para modal de produto
  | "cancel"   // botão de ação de cancelar — menor, para modal de produto
  | "save";     // botão de ação de salvar — menor, para modal de produto

export interface ActionButtonProps {
  label: string;
  variant: ActionButtonVariant;
  icon?: LucideIcon;

  // Usado na variant="primary" — rota de destino
  href?: string;

  // Usado em variant="edit" e "delete" — id do produto a ser manipulado
  productId?: string;

  // Callbacks opcionais para feedback após ação (ex: fechar modal, atualizar lista)
  onSuccess?: () => void;
  onError?: (error: unknown) => void;

  onClick?: () => void;

  disabled?: boolean;
  isLoading?: boolean;
}