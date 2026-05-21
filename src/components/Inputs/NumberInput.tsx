import type { NumberInputProps } from "@/types/InputTypes/NumberInput.types";
import { Tooltip } from "@/components/ToolTip/ToolTip";

export function NumberInput({
  label,
  id,
  value,
  onChange,
  min = "0",
  placeholder,
  tooltip
}: NumberInputProps) {
  return (
    <div className="form-field-single">
      <label htmlFor={id} className="block mb-2 font-medium">
        {label}
      </label>
      {tooltip && <Tooltip text={tooltip} />}
      <input
        className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
        type="number"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        placeholder={placeholder}
      />
    </div>
  );
}
