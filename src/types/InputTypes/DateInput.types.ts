export interface DateInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  tooltip?: string;
  required?: string;
  error?: string | null
  helpText?: string
}