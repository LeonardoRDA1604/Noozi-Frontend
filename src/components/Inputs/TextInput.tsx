import { useCharCounter } from '@/hooks/useCharCounter';

import type { TextInputProps } from '@/types/InputTypes/TextInput.types'; 

export function TextInput({
  label,
  id,
  value,
  onChange,
  maxLength,
  placeholder,
  className = "form-field-full"
}: TextInputProps) {
  const { remaining, color, showCounter } = useCharCounter(value, maxLength);

  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-2 font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          className="w-full bg-[#f5f5f5] border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-16"
          type="text"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
          maxLength={maxLength}
          placeholder={placeholder}
        />
        {showCounter && (
          <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm pointer-events-none select-none ${color}`}>
            {remaining}
          </span>
        )}
      </div>
    </div>
  );
}
