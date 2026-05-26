import { useCharCounter } from "@/hooks/useCharCounter";
import { Tooltip } from "@/components/ToolTip/ToolTip";

import type { TextAreaProps } from "@/types/InputTypes/TextArea.types";

export function TextArea({
  label,
  id,
  value,
  onChange,
  maxLength,
  placeholder,
  rows = 3,
  tooltip,
  required
}: TextAreaProps) {
  const { remaining, color, showCounter } = useCharCounter(value, maxLength);

  return (
    <div className="form-field-full">
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
        <textarea
          className="w-full bg-noozi-input_field border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-16 h-24 resize-none"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
          maxLength={maxLength}
          placeholder={placeholder}
          rows={rows}
        />
        {showCounter && (
          <span
            className={`absolute right-3 top-2 text-sm pointer-events-none select-none ${color}`}
          >
            {remaining}
          </span>
        )}
      </div>
    </div>
  );
}
