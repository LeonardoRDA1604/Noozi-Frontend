export interface NumberInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  min?: string;
  placeholder?: string;
  tooltip?: string;
  required?: string;
  error?: string
}