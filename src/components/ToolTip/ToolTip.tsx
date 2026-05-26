import { Info } from "lucide-react";
import type { TooltipProps } from "@/types/ToolTip.types"

// Estilos de posicionamento do balão por direção
const positionStyles = {
  top: "left-1/2 -translate-x-1/2 bottom-[calc(100%+6px)]",
  right: "left-[calc(100%+6px)] top-1/2 -translate-y-1/2",
};

const arrowStyles = {
  top: "absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-gray-800",
  right: "absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800",
};

export function Tooltip({ text, position = "top" }: TooltipProps ) {
  return (
    <div className="relative group inline-flex items-center">
      <Info
        size={14}
        className="text-tooltip cursor-help"
        // Cor do ToolTip: #8c9bb4
      />
      <div className={`
        absolute
        ${positionStyles[position]}
        w-max max-w-[200px]
        bg-gray-900 text-gray-100 text-xs rounded-md px-2 py-1
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-opacity duration-200
        pointer-events-none select-none z-10
        whitespace-normal text-center
      `}
      >
        {text}
        <div className={arrowStyles[position]} />
      </div>
    </div>
  );
}