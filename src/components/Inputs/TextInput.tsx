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
  required
}: TextInputProps) {
  const { remaining, color, showCounter } = useCharCounter(value, maxLength);

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
          className="w-full bg-noozi-input_field border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-16"
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
