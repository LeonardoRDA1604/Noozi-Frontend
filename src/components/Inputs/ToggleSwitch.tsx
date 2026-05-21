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
    <div>
      <div className='flex items-center gap-2 mb-2"'>
      <label className="mb-[1.5px] font-medium">
        {label}
      </label>
      {tooltip && <Tooltip text={tooltip} />}
      </div>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="toggle-slider"></span>
        <span className="toggle-label">{activeLabel}</span>
      </label>
    </div>
  );
}
