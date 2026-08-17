import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { BaseModalProps, ModalSize } from "@/types/Modal.types";

const sizeMap: Record<ModalSize, string> = {
  sm:   "max-w-sm",
  md:   "max-w-md",
  lg:   "max-w-lg",
  full: "max-w-full mx-4",
};

// Duração da transição de saída, em ms
const EXIT_DURATION = 180;

export function BaseModal({ isOpen, onClose, title, size = "md", children }: BaseModalProps) {
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const raf = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(raf);
    } else if (isMounted) {
      setIsVisible(false);
      const timeout = setTimeout(() => setIsMounted(false), EXIT_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, isMounted]);

  // Trava o scroll do fundo enquanto o modal está aberto, evita o scroll por trás do overlay mexer
  useEffect(() => {
    if (!isMounted) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isMounted]);

  // Move o foco pro modal ao abrir, e devolve pro elemento que o usuário estava focado antes ao fechar
  useEffect(() => {
    if (isMounted) {
      previouslyFocused.current = document.activeElement as HTMLElement;
      cardRef.current?.focus();
    } else {
      previouslyFocused.current?.focus();
    }
  }, [isMounted]);

  // Fecha com Esc
  useEffect(() => {
    if (!isMounted) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMounted]);

  function handleClose() {
    setIsVisible(false);
    setTimeout(onClose, EXIT_DURATION);
  }

  if (!isMounted) return null;

  return (
    // Overlay — cobre toda a tela, clique fora fecha
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center px-4
        bg-black/60 backdrop-blur-md
        transition-opacity duration-200 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/*evita fechar ao clicar dentro */}
      <div
        ref={cardRef}
        tabIndex={-1}
        className={`
          relative w-full ${sizeMap[size]} flex flex-col max-h-[90vh]
          bg-noozi-background rounded-2xl overflow-hidden
          border border-noozi-border
          shadow-[0_8px_16px_-4px_rgba(0,0,0,0.08),0_24px_48px_-12px_rgba(0,0,0,0.18)]
          outline-none
          transition-all duration-200 ease-out
          ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho fixo */}
        <div className="flex items-center justify-between px-6 py-4 shrink-0 border-b border-noozi-border">
          <h2 id="modal-title" className="text-lg font-semibold text-noozi-text tracking-tight">
            {title}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fechar modal"
            className="
              flex items-center justify-center h-8 w-8 rounded-full
              text-noozi-muted hover:text-noozi-text
              hover:bg-noozi-gray-100 active:scale-90
              transition-all duration-150
              focus-visible:ring-2 focus-visible:ring-noozi-bright_blue/40
            "
          >
            <X size={16} />
          </button>
        </div>

        {/* Conteúdo scrollável injetado via children */}
        <div
          className="
            flex flex-col gap-4 px-6 py-5 overflow-y-auto
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