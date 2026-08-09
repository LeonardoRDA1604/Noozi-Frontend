import { useEffect } from "react";
import { X } from "lucide-react";
import type { BaseModalProps, ModalSize } from "@/types/Modal.types";

const sizeMap: Record<ModalSize, string> = {
  sm:   "max-w-sm",
  md:   "max-w-md",
  lg:   "max-w-lg",
  full: "max-w-full mx-4",
};

export function BaseModal({ isOpen, onClose, title, size = "md", children }: BaseModalProps) {
  // Fecha com Esc
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // Overlay com blur — cobre toda a tela, clique fora fecha
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className={`
          w-full ${sizeMap[size]} flex flex-col max-h-[90vh]
          bg-noozi-background rounded-2xl
          border border-noozi-border
          shadow-lg
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 shrink-0 border-b border-noozi-border rounded-t-2xl bg-noozi-surface/40">
          <h2 id="modal-title" className="text-base font-semibold text-noozi-text tracking-tight">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="
              flex items-center justify-center h-8 w-8 rounded-full
              text-noozi-muted hover:text-noozi-text
              hover:bg-noozi-border/60 active:scale-90
              transition-all duration-150
            "
          >
            <X size={16} />
          </button>
        </div>

        <div
          className="
            flex flex-col gap-4 p-5 overflow-y-auto
            scrollbar-thin scrollbar-track-transparent
            scrollbar-thumb-noozi-border hover:scrollbar-thumb-noozi-muted/40
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}