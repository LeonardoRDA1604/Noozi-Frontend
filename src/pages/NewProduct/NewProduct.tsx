import { useState } from "react";
import { TextInput } from "@/components/Inputs/TextInput"
import { TextArea } from "@/components/Inputs/TextArea";
import { NumberInput } from "@/components/Inputs/NumberInput";
import { PriceInput } from "@/components/Inputs/PriceInput";
import { DateInput } from "@/components/Inputs/DateInput";
import { FileUpload } from "@/components/Inputs/FileUpload";
import { ToggleSwitch } from "@/components/Inputs/ToggleSwitch";
// import { Send } from "lucide-react";
// import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
// import { useProductMetrics } from "@/hooks/useProductMetrics";

const CHAR_LIMITS = {
  NAME: 120,
  BRAND: 30,
  DESCRIPTION: 500,
  CATEGORY: 30,
  UNIT: 10,
  BATCH: 50,
  SKU: 50,
} as const;

export default function NewProductForm() {
  // const { isLoading } = useProductMetrics();
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
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = () => {
    // Lógica de submit aqui para testes
    console.log({
      name,
      brand,
      description,
      category,
      quantity: Number(quantity),
      unit,
      price: priceValue / 100, // converte centavos para reais
      date,
      batch,
      sku,
      status,
      image
    });
  };

  return (
    <div
      id="register"
      className="bg-[#EFEFEF] w-full min-h-dvh p-6 overflow-y-auto"
    >
      <form className="product-form-grid">
        {/* Nome */}
        <TextInput
          label="Nome:"
          id="inputName"
          value={name}
          onChange={setName}
          maxLength={CHAR_LIMITS.NAME}
        />

        {/* Marca */}
        <TextInput
          label="Marca:"
          id="inputBrand"
          value={brand}
          onChange={setBrand}
          maxLength={CHAR_LIMITS.BRAND}
        />

        {/* Descrição */}
        <TextArea
          label="Descrição:"
          id="inputDescription"
          value={description}
          onChange={setDescription}
          maxLength={CHAR_LIMITS.DESCRIPTION}
        />

        {/* Categoria */}
        <TextInput
          label="Categoria:"
          id="inputCategory"
          value={category}
          onChange={setCategory}
          maxLength={CHAR_LIMITS.CATEGORY}
          className="form-field-single"
        />

        {/* Quantidade */}
        <NumberInput
          label="Quantidade:"
          id="inputQuantity"
          value={quantity}
          onChange={setQuantity}
          min="0"
        />

        {/* Unidade de Medida */}
        <TextInput
          label="Unidade de Medida:"
          id="inputUnity"
          value={unit}
          onChange={setUnit}
          maxLength={CHAR_LIMITS.UNIT}
          placeholder="Ex: kg, un, L"
          className="form-field-single"
        />

        {/* Preço Unitário */}
        <PriceInput
          label="Preço Unitário:"
          id="inputValue"
          value={priceValue}
          onChange={setPriceValue}
        />

        {/* Grid 2 colunas */}
        <div className="form-nested-grid">
          {/* Coluna esquerda */}
          <div className="form-inventory-fields">
            <div className="flex justify-between flex-col">
              <DateInput
                label="Validade:"
                id="inputDate"
                value={date}
                onChange={setDate}
              />

              <div>
                <label className="block font-medium">Lote:</label>
                <div className="relative mt-2">
                  <TextInput
                    label=""
                    id="inputBatch"
                    value={batch}
                    onChange={setBatch}
                    maxLength={CHAR_LIMITS.BATCH}
                    className=""
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium">SKU:</label>
                <div className="relative mt-2">
                  <TextInput
                    label=""
                    id="inputSKU"
                    value={sku}
                    onChange={setSku}
                    maxLength={CHAR_LIMITS.SKU}
                    className=""
                  />
                </div>
              </div>

              <ToggleSwitch
                label="Status do Produto:"
                checked={status}
                onChange={setStatus}
              />
            </div>
          </div>

          {/* Coluna direita */}
          <FileUpload
            label="Imagem do Produto:"
            id="inputImage"
            onChange={setImage}
          />
        </div>

        {/* Botão */}
        <div className="form-field-full mt-4">
          <button
            id="btn_register"
            className="w-full px-6 py-3 font-semibold text-white transition-colors duration-200 bg-noozi-bright_blue rounded-lg hover:bg-[#063CD4] active:bg-[#052EB0]"
            type="button"
            onClick={handleSubmit}
          >
            CADASTRAR PRODUTO
          </button>
        </div>
      </form>
    </div>
  );
}




      // {/* Div do botão de submit */}
      // <div className="flex flex-col gap-2 my-6 max-w-xs">
      //   <ActionButton
      //     variant="submit"
      //     icon={Send}
      //     label="Cadastrar produto"
      //     isLoading={isLoading}
      //   />
      // </div>