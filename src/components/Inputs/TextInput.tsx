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
  isRequired,
  error,
  helpText,
  isTextArea
}: TextInputProps) {
  const { remaining, color, showCounter } = useCharCounter(value, maxLength);

  const isEmpty = Boolean(error);

  return (
    <div className={className}>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={id} className="mb-[1.5px] font-medium">
          {label}
        </label>
        {tooltip && <Tooltip text={tooltip} />}
        {isRequired && (
        <span className='text-xs italic text-noozi-gray-400 font-normal'>
          <span className='text-status-danger'>*</span>
        </span>)}
      </div>
      <div className="relative">
        {isTextArea && (
          <textarea
          className="w-full bg-noozi-input_field border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-16 h-24 resize-none"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
          maxLength={maxLength}
          placeholder={placeholder}
          rows={3}
        />
        
        )}
        {!isTextArea && (
          <input
          className={`w-full bg-noozi-input_field border border-solid rounded-lg px-3 py-2 pr-16 transition-colors ${
            isEmpty
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
        )}
        
        {showCounter && !isEmpty && (
          <span
            className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm pointer-events-none select-none ${color}`}
          >
            {remaining}
          </span>
        )}
      </div>
      {isEmpty && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
      {!isEmpty && (<p className='mt-1 ml-1 text-xs text-noozi-gray-500'>{helpText}</p>)}
    </div>
  );
}