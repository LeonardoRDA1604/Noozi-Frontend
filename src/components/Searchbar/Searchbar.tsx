import { Search, X } from "lucide-react";
import type { Searchbar } from "@/types/Searchbar.types";

export default function Searchbar({ currentText, setCurrentText }: Searchbar) {
  return (
    <div className="relative flex items-center w-full">
      <Search
        size={16}
        className="absolute left-3 text-noozi-muted pointer-events-none shrink-0"
        aria-hidden="true"
      />
      <input
        type="text"
        role="searchbox"
        aria-label="Buscar produtos no estoque"
        placeholder="Buscar produto por nome, marca, SKU..."
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
        className="
          w-full h-10 pl-9 pr-9
          bg-noozi-input_field border border-noozi-border rounded-xl
          text-sm text-noozi-text placeholder:text-noozi-muted
          focus:outline-none focus:ring-2 focus:ring-noozi-bright_blue/30 focus:border-noozi-bright_blue
          transition-all duration-150
        "
      />
      {/* Botão de limpar busca */}
      {currentText && (
        <button
          type="button"
          aria-label="Limpar busca"
          onClick={() => setCurrentText("")}
          className="absolute right-3 text-noozi-muted hover:text-noozi-text transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}