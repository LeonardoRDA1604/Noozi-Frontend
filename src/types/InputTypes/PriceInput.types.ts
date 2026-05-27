export interface PriceInputProps {
  label: string;
  id: string;
  value: number; // Valor em centavos
  onChange: (valueInCents: number) => void;
  tooltip?: string;
  required?: string;
  error?: string;
  helpText?: string
}