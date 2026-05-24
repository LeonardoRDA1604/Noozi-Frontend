import { Info } from "lucide-react";
import type { TooltipProps } from "@/types/ToolTip.types"

export function Tooltip({ text }: TooltipProps ) {
  return (
    <div className="relative group inline-flex items-center">
      <Info
        size={14}
        className="text-noozi-gray-400 cursor-help"
      />
      <div className="
        absolute left-1/2 -translate-x-1/2 bottom-full mb-2
        w-max max-w-[200px]
        bg-gray-900 text-gray-100 text-xs rounded-md px-2 py-1
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-opacity duration-200
        pointer-events-none select-none z-10
        whitespace-normal text-center
      ">
        {text}
        <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-gray-800" />
      </div>
    </div>
  );
}