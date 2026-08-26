import { formatPrice } from "@/components/Inputs/PriceInput/PriceInput";


export function PriceInputMask({ value, onChange, placeholder, type = "text", className}: {
  value: number | string;
  onChange: (v: number) => void;
  placeholder?: string;
  type?: string;
  className?: string ;
}) {
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


  return (
    <input
      type={type}
      value={value === 0 ? "" : formatPrice(Number(value))}
      onChange={handleChange}
      placeholder={placeholder}
      className= {className}
    />
  );
}