import type { NumberInputProps } from "@/types/InputTypes/NumberInput.types";
import { Tooltip } from "@/components/ToolTip/ToolTip";

export function NumberInput({
  label,
  id,
  value,
  onChange,
  min = "0",
  placeholder,
  tooltip,
  required
}: NumberInputProps) {
  return (
    <div className="form-field-single">
      <div className='flex items-center gap-2 mb-2'>
      <label htmlFor={id} className="mb-[1.5px] font-medium">
        {label}
      </label>
      {tooltip && <Tooltip text={tooltip} />}
      <span className="text-xs italic text-noozi-gray-400 font-normal">
          {required}
      </span>
      </div>
      <input
        className="w-full bg-noozi-input_field border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
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
