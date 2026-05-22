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
      className="w-full min-h-dvh p-4 md:p-6 lg:p-8 overflow-y-auto overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-noozi-gray-800">Novo Produto</h1>
          <p className="text-sm text-noozi-gray-600 mt-1">Preencha os dados abaixo para cadastrar um novo produto</p>
        </div>

        <form className="space-y-6">
          {/* Seção: Informações Básicas */}
          <div className="form-section">
            <h2 className="form-section-title">Informações Básicas</h2>
            <div className="product-form-grid">
              <TextInput
                label="Nome"
                id="inputName"
                value={name}
                onChange={setName}
                maxLength={CHAR_LIMITS.NAME}
                tooltip="Informe o nome completo do produto."
              />

              <TextInput
                label="Marca"
                id="inputBrand"
                value={brand}
                onChange={setBrand}
                maxLength={CHAR_LIMITS.BRAND}
                tooltip="Marca ou fabricante do produto."
              />

              <TextArea
                label="Descrição"
                id="inputDescription"
                value={description}
                onChange={setDescription}
                maxLength={CHAR_LIMITS.DESCRIPTION}
                tooltip="Detalhes adicionais sobre o produto (características, composição, etc.)"
              />

              <TextInput
                label="Categoria"
                id="inputCategory"
                value={category}
                onChange={setCategory}
                maxLength={CHAR_LIMITS.CATEGORY}
                className="form-field-single"
                tooltip="Grupo ao qual o produto pertence. "
              />
            </div>
          </div>

          {/* Seção: Estoque e Precificação */}
          <div className="form-section">
            <h2 className="form-section-title">Estoque e Precificação</h2>
            <div className="product-form-grid">
              <NumberInput
                label="Quantidade"
                id="inputQuantity"
                value={quantity}
                onChange={setQuantity}
                min="0"
                tooltip="Número de unidades disponíveis em estoque. Use apenas números inteiros."
              />

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

              <PriceInput
                label="Preço Unitário"
                id="inputValue"
                value={priceValue}
                onChange={setPriceValue}
                tooltip="Valor de venda por unidade. Digite apenas os números – a formatação é automática."
              />
            </div>
          </div>

          {/* Seção: Rastreamento e Validade */}
          <div className="form-section">
            <h2 className="form-section-title">Rastreamento e Validade</h2>
            <div className="product-form-grid">
              <DateInput
                label="Validade"
                id="inputDate"
                value={date}
                onChange={setDate}
                tooltip="Data de vencimento do produto no formato DD/MM/AAAA. Digite dia, mês e ano."
              />

              <TextInput
                label="Lote"
                id="inputBatch"
                value={batch}
                onChange={setBatch}
                maxLength={CHAR_LIMITS.BATCH}
                className="form-field-single"
                tooltip="Código de identificação do lote de fabricação (se aplicável)."
              />

              <TextInput
                label="SKU"
                id="inputSKU"
                value={sku}
                onChange={setSku}
                maxLength={CHAR_LIMITS.SKU}
                className="form-field-single"
                tooltip="Código único de identificação do produto (Stock Keeping Unit)."
                placeholder="Ex: ABC01"
              />
            </div>
          </div>

          {/* Seção: Alertas de Estoque */}
          <div className="form-section">
            <h2 className="form-section-title">Alertas de Estoque</h2>
            <div className="product-form-grid">
              <TextInput
                label="Quantidade de estoque baixo"
                id="inputLStock"
                value={lowLevel}
                onChange={setLowLevel}
                maxLength={CHAR_LIMITS.LOW_LEVEL}
                className="form-field-single"
                tooltip="Quantidade mínima que, ao ser atingida, dispara um aviso de reposição."
              />

              <TextInput
                label="Quantidade de estoque alto"
                id="inputHStock"
                value={highLevel}
                onChange={setHighLevel}
                maxLength={CHAR_LIMITS.HIGH_LEVEL}
                className="form-field-single"
                tooltip="Quantidade máxima que, ao ser ultrapassada, dispara um aviso de excesso."
              />
            </div>
          </div>

          {/* Seção: Configurações */}
          <div className="form-section">
            <h2 className="form-section-title">Configurações</h2>
            <div className="product-form-grid">
              <div className="form-field-single">
                <ToggleSwitch
                  label="Status do Produto"
                  checked={status}
                  onChange={setStatus}
                  tooltip="Produto ativo: disponível para venda. Inativo: oculto ou indisponível."
                />
              </div>
            </div>
          </div>

          {/* Botão de cadastrar produto */}
          <div className="flex justify-center pt-4" id="btn_cadastro">
            <div className="w-full lg:w-1/2">
              <ActionButton
                variant="submit"
                icon={Send}
                label="CADASTRAR PRODUTO"
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}