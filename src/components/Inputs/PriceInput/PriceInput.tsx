import { Tooltip } from "@/components/ToolTip/ToolTip";
import type { PriceInputProps } from "@/types/InputTypes/PriceInput.types";


export function formatPrice(valueInCents: number): string { // Função de formatação de preço de itens, seguindo o padrão brasileiro (R$ 0,00)
  const valueInReais = valueInCents / 100; //todo adicionar um verificador para valor existente para que este não seja dividido por 100
  const formatted = valueInReais.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `R$ ${formatted}`;
};

export function PriceInput({
  label,
  id,
  value,
  tooltip,
  required,
  onChange,
  error,
  helpText
}: PriceInputProps) {
  const hasError = Boolean(error);
  const hasRequired = Boolean(required);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Permite Mudança de estado do elemento da página e restringe o uso de caracteres não numéricos
    const digitsOnly = e.target.value.replace(/\D/g, "");

    if (digitsOnly === "") {
      onChange(0);
      return;
    }

    const numericValue = parseInt(digitsOnly, 10);
    const limitedValue = Math.min(numericValue, 9999999999);
    onChange(limitedValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => { // Não permite o uso do atalho ctrl + delete / backspace
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
    ];

    if (allowedKeys.includes(e.key) || /^\d$/.test(e.key)) {
      if (e.key === "Backspace" || e.key === "Delete") {
        e.preventDefault();
        const newValue = Math.floor(value / 10);
        onChange(newValue);
      }
      return;
    }

    e.preventDefault();
  };

  return (
    <div className="form-field-single">
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={id} className="mb-[1.5px] font-medium">
          {label}
        </label>
        {tooltip && <Tooltip text={tooltip} />}
        {hasRequired && (
          <span className='text-xs italic text-noozi-gray-400 font-normal'>
            <span className='text-status-danger'>*</span> {required}
          </span>)}
      </div>

      
      <input
        className={`w-full bg-noozi-input_field border border-solid rounded-lg px-3 py-2 transition-colors ${hasError
            ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            : "border-noozi-gray-300"
          }`}
        type="text"
        id={id}
        placeholder="R$ 0,00"
        value={value === 0 ? "" : formatPrice(value)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {hasError && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
      {!hasError && (<p className="mt-1 ml-1 text-xs text-noozi-gray-500">{helpText}</p>)}
    </div>
  );
}