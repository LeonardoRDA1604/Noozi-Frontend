import { useCharCounter } from '@/hooks/useCharCounter';

interface TextAreaProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
  rows?: number;
}

export function TextArea({
  label,
  id,
  value,
  onChange,
  maxLength,
  placeholder,
  rows = 3
}: TextAreaProps) {
  const { remaining, color, showCounter } = useCharCounter(value, maxLength);

  return (
    <div className="form-field-full">
      <label htmlFor={id} className="block mb-2 font-medium">
        {label}
      </label>
      <div className="relative">
        <textarea
          className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-16 h-24 resize-none"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
          maxLength={maxLength}
          placeholder={placeholder}
          rows={rows}
        />
        {showCounter && (
          <span className={`absolute right-3 top-2 text-sm pointer-events-none select-none ${color}`}>
            {remaining}
          </span>
        )}
      </div>
    </div>
  );
}
