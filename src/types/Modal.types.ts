export type ModalSize = "sm" | "md" | "lg" | "full";

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size?: ModalSize;             // controla a largura máxima
  children: React.ReactNode;
}