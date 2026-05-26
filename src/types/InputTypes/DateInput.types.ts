export interface DateInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  tooltip?: string;
  required?: string;
  helpText?: string
}