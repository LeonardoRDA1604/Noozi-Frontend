import type { DateInputProps } from "@/types/InputTypes/DateInput.types";

export function DateInput({ label, id, value, onChange }: DateInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(/\D/g, "");
    if (newValue.length > 8) newValue = newValue.slice(0, 8);

    // Insere barras
    if (newValue.length >= 3 && newValue.length < 5) {
      newValue = newValue.slice(0, 2) + "/" + newValue.slice(2);
    } else if (newValue.length >= 5) {
      newValue = newValue.slice(0, 2) + "/" + newValue.slice(2, 4) + "/" + newValue.slice(4, 8);
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

  return (
    <div>
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <input
        className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 mt-2"
        id={id}
        type="text"
        placeholder="DD/MM/AAAA"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
