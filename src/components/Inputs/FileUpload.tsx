interface FileUploadProps {
  label: string;
  id: string;
  onChange: (file: File | null) => void;
  accept?: string;
  maxSize?: string;
}

export function FileUpload({
  label,
  id,
  onChange,
  accept = "image/*",
  maxSize = "10MB"
}: FileUploadProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <div className="flex flex-col">
      <label className="block mb-2 font-medium">{label}</label>
      <div className="flex-1 border-2 border-dashed border-noozi-gray-300 rounded-lg bg-noozi-surface hover:bg-gray-50 transition-colors">
        <label htmlFor={id} className="flex flex-col items-center justify-center h-full min-h-[300px] cursor-pointer p-6">
          <span className="text-center text-noozi-gray-600">
            Clique para fazer upload
            <br />
            <span className="text-sm text-center text-noozi-gray-500">
              PNG, JPG até {maxSize}
            </span>
          </span>
          <input
            type="file"
            className="hidden"
            accept={accept}
            id={id}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}
