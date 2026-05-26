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
  required,
  error,
}: NumberInputProps) {
  const hasError = Boolean(error);

  return (
    <div className="grid col-span-1">
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
        className={`w-full bg-noozi-input_field border border-solid rounded-lg px-3 py-2 transition-colors ${
          hasError
            ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            : "border-noozi-gray-300"
        }`}
        type="number"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        placeholder={placeholder}
      />
      {hasError && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}