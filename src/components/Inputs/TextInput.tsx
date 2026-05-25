import { useCharCounter } from '@/hooks/useCharCounter';
import { Tooltip } from '@/components/ToolTip/ToolTip';

import type { TextInputProps } from '@/types/InputTypes/TextInput.types';

export function TextInput({
  label,
  id,
  value,
  onChange,
  maxLength,
  placeholder,
  className = "form-field-full",
  tooltip,
  required,
  error,
}: TextInputProps) {
  const { remaining, color, showCounter } = useCharCounter(value, maxLength);

  const hasError = Boolean(error);

  return (
    <div className={className}>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={id} className="mb-[1.5px] font-medium">
          {label}
        </label>
        {tooltip && <Tooltip text={tooltip} />}
        <span className="text-xs italic text-noozi-gray-400 font-normal">
          {required}
        </span>
      </div>
      <div className="relative">
        <input
          className={`w-full bg-noozi-input_field border border-solid rounded-lg px-3 py-2 pr-16 transition-colors ${
            hasError
              ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              : "border-noozi-gray-300"
          }`}
          type="text"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
          maxLength={maxLength}
          placeholder={placeholder}
        />
        {showCounter && !hasError && (
          <span
            className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm pointer-events-none select-none ${color}`}
          >
            {remaining}
          </span>
        )}
      </div>
      {hasError && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}