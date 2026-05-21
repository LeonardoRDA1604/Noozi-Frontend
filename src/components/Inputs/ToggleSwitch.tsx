import type { ToggleSwitchProps } from "@/types/InputTypes/ToggleSwitch.types"; 

export function ToggleSwitch({
  label,
  checked,
  onChange,
  activeLabel = "Ativo"
}: ToggleSwitchProps) {
  return (
    <div>
      <label className="block font-medium mb-2">{label}</label>
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
