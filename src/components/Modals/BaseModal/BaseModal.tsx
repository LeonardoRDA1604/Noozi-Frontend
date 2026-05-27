import { X } from "lucide-react";
import type { BaseModalProps, ModalSize } from "@/types/Modal.types";

const sizeMap: Record<ModalSize, string> = {
  sm:   "max-w-sm",
  md:   "max-w-md",
  lg:   "max-w-lg",
  full: "max-w-full mx-4",
};

export function BaseModal({ isOpen, onClose, title, size = "md", children }: BaseModalProps) {
  if (!isOpen) return null;

  return (
    // Overlay — cobre toda a tela, clique fora fecha
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Conteúdo — stopPropagation evita fechar ao clicar dentro */}
      <div
        className={`w-full ${sizeMap[size]} bg-noozi-background rounded-2xl shadow-lg flex flex-col max-h-[90vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho fixo */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0 border-b border-noozi-border">
          <h2 id="modal-title" className="text-base font-semibold text-noozi-text">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="
              flex items-center justify-center h-7 w-7 rounded-lg
              text-noozi-muted hover:text-noozi-text
              hover:bg-noozi-surface transition-colors
            "
          >
            <X size={16} />
          </button>
        </div>

        {/* Conteúdo scrollável injetado via children */}
        <div className="flex flex-col gap-4 p-5 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}