import { X } from "lucide-react";
import type { BaseModalProps, ModalSize } from "@/types/Modal.types";

const sizeMap: Record<ModalSize, string> = {
  sm:   "max-w-sm",
  md:   "max-w-md",
  lg:   "max-w-lg",
  full: "max-w-full mx-4",
};

export function BaseModal({
  isOpen,
  onClose,
  title,
  size = "md",
  children,
}: BaseModalProps) {
  if (!isOpen) return null;

  return (
    // Overlay — cobre toda a tela, clique fora fecha
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={title}
    >
      {/* Conteúdo — stopPropagation evita fechar ao clicar dentro */}
      <div
        className={`w-full ${sizeMap[size]} bg-white rounded-xl shadow-lg flex flex-col max-h-[90vh]`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Cabeçalho fixo */}
        <div className="flex items-center justify-between p-5 pb-0 shrink-0">
          <h2 className="text-xl font-bold text-noozi-text">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="flex items-center justify-center h-7 w-7 rounded-md hover:bg-noozi-surface transition-colors"
          >
            <X size={16} className="text-noozi-muted" />
          </button>
        </div>

        {/* Conteúdo injetado via children */}
        <div className="flex flex-col gap-3 p-5 overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  );
}