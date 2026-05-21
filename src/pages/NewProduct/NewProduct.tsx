import { useState } from "react";
import { TextInput } from "@/components/Inputs/TextInput";
import { TextArea } from "@/components/Inputs/TextArea";
import { NumberInput } from "@/components/Inputs/NumberInput";
import { PriceInput } from "@/components/Inputs/PriceInput";
import { DateInput } from "@/components/Inputs/DateInput";
// import { FileUpload } from "@/components/Inputs/FileUpload";
import { ToggleSwitch } from "@/components/Inputs/ToggleSwitch";
import { Send } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { useProductMetrics } from "@/hooks/useProductMetrics";

const CHAR_LIMITS = {
  NAME: 120,
  BRAND: 30,
  DESCRIPTION: 500,
  CATEGORY: 30,
  UNIT: 10,
  BATCH: 50,
  SKU: 50,
  LOW_LEVEL: 10,
  HIGH_LEVEL: 10
} as const;

export default function NewProductForm() {
  const { isLoading } = useProductMetrics();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [priceValue, setPriceValue] = useState(0); // em centavos
  const [date, setDate] = useState("");
  const [batch, setBatch] = useState("");
  const [sku, setSku] = useState("");
  const [status, setStatus] = useState(true);
  const [lowLevel, setLowLevel] = useState("");
  const [highLevel, setHighLevel] = useState("")
  // const [image, setImage] = useState<File | null>(null);

  return (
    <div
      id="register"
      className="bg-[#EFEFEF] w-full min-h-dvh p-6 overflow-y-auto"
    >
      <form className="product-form-grid">
        {/* Nome */}
        <TextInput
          label="Nome"
          id="inputName"
          value={name}
          onChange={setName}
          maxLength={CHAR_LIMITS.NAME}
        />

        {/* Marca */}
        <TextInput
          label="Marca"
          id="inputBrand"
          value={brand}
          onChange={setBrand}
          maxLength={CHAR_LIMITS.BRAND}
        />

        {/* Descrição */}
        <TextArea
          label="Descrição"
          id="inputDescription"
          value={description}
          onChange={setDescription}
          maxLength={CHAR_LIMITS.DESCRIPTION}
        />

        {/* Categoria */}
        <TextInput
          label="Categoria"
          id="inputCategory"
          value={category}
          onChange={setCategory}
          maxLength={CHAR_LIMITS.CATEGORY}
          className="form-field-single"
        />

        {/* Quantidade */}
        <NumberInput
          label="Quantidade"
          id="inputQuantity"
          value={quantity}
          onChange={setQuantity}
          min="0"
        />

        {/* Unidade de Medida */}
        <TextInput
          label="Unidade de Medida"
          id="inputUnity"
          value={unit}
          onChange={setUnit}
          maxLength={CHAR_LIMITS.UNIT}
          placeholder="Ex: kg, un, L"
          className="form-field-single"
        />

        {/* Preço Unitário */}
        <PriceInput
          label="Preço Unitário"
          id="inputValue"
          value={priceValue}
          onChange={setPriceValue}
        />

        <DateInput
          label="Validade"
          id="inputDate"
          value={date}
          onChange={setDate}
        />

        <TextInput
          label="Lote"
          id="inputBatch"
          value={batch}
          onChange={setBatch}
          maxLength={CHAR_LIMITS.BATCH}
          className=""
        />

        <TextInput
          label="Alerta de estoque baixo"
          id="inputLStock"
          value={lowLevel}
          onChange={setLowLevel}
          maxLength={CHAR_LIMITS.LOW_LEVEL}
          className=""
        />

        <TextInput
          label="SKU"
          id="inputSKU"
          value={sku}
          onChange={setSku}
          maxLength={CHAR_LIMITS.SKU}
          className=""
        />

        <TextInput
          label="Alerta de estoque alto"
          id="inputHStock"
          value={highLevel}
          onChange={setHighLevel}
          maxLength={CHAR_LIMITS.HIGH_LEVEL}
          className=""
        />

        <ToggleSwitch
          label="Status do Produto"
          checked={status}
          onChange={setStatus}
        />

        <div className="form-field-full mt-4">
          <ActionButton
            variant="submit"
            icon={Send}
            label="CADASTRAR PRODUTO"
            isLoading={isLoading}
          />
        </div>
        
      </form>
    </div>
  );
}