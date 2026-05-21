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
          tooltip="Informe o nome completo do produto."
        />

        {/* Marca */}
        <TextInput
          label="Marca"
          id="inputBrand"
          value={brand}
          onChange={setBrand}
          maxLength={CHAR_LIMITS.BRAND}
          tooltip="Marca ou fabricante do produto."
        />

        {/* Descrição */}
        <TextArea
          label="Descrição"
          id="inputDescription"
          value={description}
          onChange={setDescription}
          maxLength={CHAR_LIMITS.DESCRIPTION}
          tooltip="Detalhes adicionais sobre o produto (características, composição, etc.)"
        />

        {/* Categoria */}
        <TextInput
          label="Categoria"
          id="inputCategory"
          value={category}
          onChange={setCategory}
          maxLength={CHAR_LIMITS.CATEGORY}
          className="form-field-single"
          tooltip="Grupo ao qual o produto pertence. "
        />

        {/* Quantidade */}
        <NumberInput
          label="Quantidade"
          id="inputQuantity"
          value={quantity}
          onChange={setQuantity}
          min="0"
          tooltip="Número de unidades disponíveis em estoque. Use apenas números inteiros."
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
          tooltip="Unidade de venda ou armazenamento. Ex: kg, un, L, pacote, caixa"
        />

        {/* Preço Unitário */}
        <PriceInput
          label="Preço Unitário"
          id="inputValue"
          value={priceValue}
          onChange={setPriceValue}
          tooltip="Valor de venda por unidade. Digite apenas os números – a formatação é automática."
        />

        {/* Data de Validade */}
        <DateInput
          label="Validade"
          id="inputDate"
          value={date}
          onChange={setDate}
          tooltip="Data de vencimento do produto no formato DD/MM/AAAA. Digite dia, mês e ano."
        />

        {/* Lote */}
        <TextInput
          label="Lote"
          id="inputBatch"
          value={batch}
          onChange={setBatch}
          maxLength={CHAR_LIMITS.BATCH}
          className=""
          tooltip="Código de identificação do lote de fabricação (se aplicável)."
        />
        
        {/* Estoque baixo */}
        <TextInput
          label="Alerta de estoque baixo"
          id="inputLStock"
          value={lowLevel}
          onChange={setLowLevel}
          maxLength={CHAR_LIMITS.LOW_LEVEL}
          className="Quantidade mínima que, ao ser atingida, dispara um aviso de reposição."
        />

        {/* SKU */}
        <TextInput
          label="SKU"
          id="inputSKU"
          value={sku}
          onChange={setSku}
          maxLength={CHAR_LIMITS.SKU}
          className=""
          tooltip="Código único de identificação do produto (Stock Keeping Unit)."
        />

        {/* Estoque alto */}
        <TextInput
          label="Alerta de estoque alto"
          id="inputHStock"
          value={highLevel}
          onChange={setHighLevel}
          maxLength={CHAR_LIMITS.HIGH_LEVEL}
          className=""
          tooltip="Quantidade máxima que, ao ser ultrapassada, dispara um aviso de excesso."
        />

        {/* Status */}
        <ToggleSwitch
          label="Status do Produto"
          checked={status}
          onChange={setStatus}
          tooltip="Produto ativo: disponível para venda. Inativo: oculto ou indisponível."
        />
        
        {/* Botão de cadastrar produto */}
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