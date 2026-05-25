export interface FileUploadProps {
  label: string;
  id: string;
  onChange: (file: File | null) => void;
  accept?: string;
  maxSize?: string;
  required?: string
}