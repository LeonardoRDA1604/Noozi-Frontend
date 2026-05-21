import type { NumberInputProps } from "@/types/InputTypes/NumberInput.types"; 

export function NumberInput({
  label,
  id,
  value,
  onChange,
  min = "0",
  placeholder
}: NumberInputProps) {
  return (
    <div className="form-field-single">
      <label htmlFor={id} className="block mb-2 font-medium">
        {label}
      </label>
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
