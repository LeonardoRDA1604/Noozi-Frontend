export interface ComboboxInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  /** Lista de opções já cadastradas (ex: marcas, categorias, unidades de medida) */
  options: string[];
  maxLength?: number;
  placeholder?: string;
  className?: string;
  tooltip?: string;
  required?: string;
  error?: string;
  helpText?: string;
}