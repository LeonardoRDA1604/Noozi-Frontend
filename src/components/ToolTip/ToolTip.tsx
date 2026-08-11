import { Info } from "lucide-react";
import type { TooltipProps } from "@/types/ToolTip.types";

// Estilos de posicionamento do balão por direção
const positionStyles = {
  top:   "left-1/2 -translate-x-1/2 bottom-[calc(100%+6px)]",
  right: "left-[calc(100%+6px)] top-1/2 -translate-y-1/2",
  left:  "right-[calc(100%+6px)] top-1/2 -translate-y-1/2",
};

const arrowStyles = {
  top:   "absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-noozi-gray-900",
  right: "absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-noozi-gray-900",
  left: "absolute left-full top-1/2 -translate-y-1/2 border-4 border-4 border-transparent border-l-noozi-gray-900"
};

export function Tooltip({ text, position = "top", children, bounded = false }: TooltipProps) {
  return (
    <div className={`relative group inline-flex items-center ${bounded ? "overflow-hidden" : ""}`}>
      {children ?? <Info size={14} className="text-noozi-muted cursor-help" />}
      <div
        role="tooltip"
        className={`
          absolute ${positionStyles[position]}
          w-max max-w-[200px]
          bg-noozi-gray-900 text-noozi-gray-100
          text-xs rounded-lg px-2.5 py-1.5
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-opacity duration-200
          pointer-events-none select-none
          ${bounded ? "z-10 overflow-hidden" : "z-50"}
          whitespace-normal text-center shadow-md
        `}
      >
        {text}
        <div className={arrowStyles[position]} aria-hidden="true" />
      </div>
    </div>
  );
}