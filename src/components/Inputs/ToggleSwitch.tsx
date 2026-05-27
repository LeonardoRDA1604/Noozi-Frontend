import type { ToggleSwitchProps } from "@/types/InputTypes/ToggleSwitch.types";
import { Tooltip } from "@/components/ToolTip/ToolTip";
import { useId } from "react";

export function ToggleSwitch({
  label,
  checked,
  onChange,
  activeLabel = "Ativo",
  tooltip,
  required
}: ToggleSwitchProps) {
  const id = useId();
  const labelId = `${id}-label`;

  return (
    <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span id={labelId} className="font-medium text-sm">
        {label}
      </span>
      {tooltip && <Tooltip text={tooltip} />}
      <span className="text-xs italic text-noozi-gray-400 font-normal">
        {required}
      </span>
    </div>

    <label htmlFor={id} className="flex items-center gap-3 cursor-pointer select-none relative">
        <input
          id={id}
          type="checkbox"
          role="switch"
          aria-checked={checked}
          aria-labelledby={labelId}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />

  <div
    className="
      w-12 h-7
      md:w-14 md:h-8
      lg:w-16 lg:h-9
      rounded-full
      bg-gray-300
      transition-colors
      duration-300
      peer-checked:bg-[#1752FD]
    "
  />

  <div
    className="
      absolute
      left-1
      top-1
      w-5 h-5
      md:w-6 md:h-6
      lg:w-7 lg:h-7
      rounded-full
      bg-white
      shadow-md
      transition-transform
      duration-300
      peer-checked:translate-x-5
      md:peer-checked:translate-x-6
      lg:peer-checked:translate-x-7
    "
  />

  <span
    className={`
      ml-2
      text-sm md:text-base font-medium
      ${checked ? "text-[#1752FD]" : "text-gray-600"}
    `}
  >
    {activeLabel}
  </span>
</label>
    </div>
  );
}