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
      <div>
        <label className="block font-medium mb-2">{label}</label>
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
