import type { ToggleSwitchProps } from "@/types/InputTypes/ToggleSwitch.types";
import { Tooltip } from "@/components/ToolTip/ToolTip";

export function ToggleSwitch({
  label,
  checked,
  onChange,
  activeLabel = "Ativo",
  tooltip
}: ToggleSwitchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label className="font-medium text-sm">
          {label}
        </label>

        {tooltip && <Tooltip text={tooltip} />}
      </div>

      <label className="flex items-center gap-3 cursor-pointer select-none relative">
  <input
    type="checkbox"
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