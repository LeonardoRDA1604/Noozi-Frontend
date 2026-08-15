import type { DateInputProps } from "@/types/InputTypes/DateInput.types";
import { Tooltip } from "@/components/ToolTip/ToolTip";


export function DateInput({ label, id, value, tooltip, required, helpText, onChange, error }: DateInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(/\D/g, "");
    if (newValue.length > 8) newValue = newValue.slice(0, 8);

    // Insere barras
    if (newValue.length >= 3 && newValue.length < 5) {
      newValue = newValue.slice(0, 2) + "/" + newValue.slice(2);
    } else if (newValue.length >= 5) {
      newValue =
        newValue.slice(0, 2) +
        "/" +
        newValue.slice(2, 4) +
        "/" +
        newValue.slice(4, 8);
    }

    // Validação de dia e mês
    const parts = newValue.split("/");
    if (parts[0] && parts[0].length === 2 && parseInt(parts[0]) > 31) {
      parts[0] = "31";
      newValue = parts.join("/");
    }
    if (parts[1] && parts[1].length === 2 && parseInt(parts[1]) > 12) {
      parts[1] = "12";
      newValue = parts.join("/");
    }
    
    onChange(newValue);
    
  };

  const isTouched = value.length > 0;
  const hasError = isTouched && !!error;


  return (
    <div>
      <div className='grid col-span-1'>
      <div className="flex gap-2 items-center mb-2">
      <label htmlFor={id} className="mb-[1.5px] font-medium">
        {label}
      </label>
      {tooltip && <Tooltip text={tooltip} />}
      <span className="text-xs italic text-noozi-gray-400 font-normal">
          {required}
      </span>
      </div>
      </div>
      <input
        className={`w-full bg-noozi-input_field border border-solid ${error === "Data inválida" ? "border-red-600" : "border-noozi-gray-300"  } rounded-lg px-3 py-2 `} 
        id={id}
        type="text"
        placeholder="DD/MM/AAAA"
        value={value}
        onChange={handleChange}
      />
      {/* Error message, consistent with your other inputs */}
      {hasError ? (
        <p className="mt-1 ml-1 text-xs text-red-600">{error}</p>
      ) : (
        helpText && (
          <p className="mt-1 ml-1 text-xs text-noozi-gray-500">
            {helpText}
          </p>
        )
      )}
    </div>
  );
}




