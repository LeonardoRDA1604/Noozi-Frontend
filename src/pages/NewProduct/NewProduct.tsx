import { useState } from "react";
import { TextInput } from "@/components/Inputs/TextInput";
import { TextArea } from "@/components/Inputs/TextArea";
import { NumberInput } from "@/components/Inputs/NumberInput";
import { PriceInput } from "@/components/Inputs/PriceInput";
import { DateInput } from "@/components/Inputs/DateInput";
import { ToggleSwitch } from "@/components/Inputs/ToggleSwitch";
import { Send } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { productService } from "@/services/product.service";
import type { CreateProductDTO } from "@/types/Product.types";
import { formatDateISO } from "@/utils/date/formatDateISO";
import { useFormValidation } from "@/hooks/useFormValidation";
import type { NewProductForm } from "@/types/NewProductForm.types";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

const CHAR_LIMITS = {
  NAME: 120,
  BRAND: 30,
  DESCRIPTION: 500,
  CATEGORY: 30,
  UNIT: 10,
  BATCH: 50,
  SKU: 50,
  LOW_LEVEL: 10,
  HIGH_LEVEL: 10,
} as const;

function isValidDate(value: string): boolean {
  if (!value) return true; // campo opcional

  // Must match DD/MM/YYYY
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) return false;

  const [day, month, year] = value.split("/").map(Number);

  // Basic calendar sanity
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) return false;

  // Must not be in the past
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
}

export default function NewProductForm() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [date, setDate] = useState("");
  const [batch, setBatch] = useState("");
  const [sku, setSku] = useState("");
  const [status, setStatus] = useState(true);
  const [lowLevel, setLowLevel] = useState("");
  const [highLevel, setHighLevel] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ─── Validação ─────────────────────────────────────────────────────────────
  const { errors, validate, clearError, clearAllErrors } =
    useFormValidation<NewProductForm>({
      name: (v) => (!v.trim() ? 'O campo "Nome" é obrigatório.' : null),
      sku: (v) => (!v.trim() ? 'O campo "SKU" é obrigatório.' : null),
      stock_quantity: (v) => {
        const num = parseInt(v);
        return isNaN(num) || num < 0 ? 'O campo "Quantidade" é obrigatório.' : null;
      },
      item_price: (v) => (v === 0 ? 'O campo "Preço Unitário" é obrigatório.' : null),
      expiration_date: (v) => {
        if (!v) return null; //não altera caso o campo esteja vazio

        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(v))
          return "Data incompleta. Use o formato DD/MM/AAAA.";

        if (!isValidDate(v))
          return "Data inválida.";

        return null;
      }
    });

  // ─── Reset ─────────────────────────────────────────────────────────────────
  const resetForm = () => {
    setName("");
    setBrand("");
    setDescription("");
    setCategory("");
    setQuantity("");
    setUnit("");
    setPriceValue(0);
    setDate("");
    setBatch("");
    setSku("");
    setStatus(true);
    setLowLevel("");
    setHighLevel("");
    setSubmitError(null);
    clearAllErrors();
  };

  // ─── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const isValid = validate({
      name,
      sku,
      stock_quantity: quantity,  // string ✓ — ProductFormFields.stock_quantity é string
      item_price: priceValue,    // number ✓ — ProductFormFields.item_price é number
      expiration_date: date,     // Date - ProductFormFields.expiration_date é uma data
    });
    if (!isValid) return;

    const productData: CreateProductDTO = {
      sku: sku.trim(),
      name: name.trim(),
      description: description.trim() || undefined,
      category: category.trim() || undefined,
      brand: brand.trim() || undefined,
      item_price: priceValue / 100, // converte centavos para reais
      stock_quantity: parseInt(quantity),
      unit_measure: unit.trim() || undefined,
      low_stock_level: lowLevel ? parseInt(lowLevel) : undefined,
      over_stock_level: highLevel ? parseInt(highLevel) : undefined,
      batch_code: batch.trim() || undefined,
      expiration_date: formatDateISO(date),
      is_active: status,
    };

    try {
      setIsSubmitting(true);
      await productService.create(productData);
      alert("✅ Produto cadastrado com sucesso!");
      resetForm();
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      setSubmitError("Erro ao cadastrar produto. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-dvh p-4 md:p-6 lg:p-8 overflow-y-auto overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho da página */}
        <SectionTitle
          title="Novo Produto"
          subtitle="Preencha os dados abaixo para cadastrar um novo produto"
          className="mb-6"
        />

        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{submitError}</p>
          </div>
        )}

        {/* Nota de campos obrigatórios */}
        <p className="text-xs text-noozi-gray-500 mb-6">
          Campos marcados com <span className="text-status-danger font-medium">*</span> são obrigatórios.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Seção: Informações Básicas */}
          <div className="form-section">
            <h2 className="form-section-title">Informações Básicas</h2>
            <div className="product-form-grid">
              <TextInput
                label="Nome"
                id="inputName"
                value={name}
                onChange={(v) => { setName(v); clearError("name"); }}
                maxLength={CHAR_LIMITS.NAME}
                isRequired={true}
                error={errors.name}
                helpText="Nome completo do produto, como aparece no estoque."
                placeholder="Ex: Impressora Térmica de Etiquetas 80mm"
              />

              <TextInput
                label="Descrição"
                id="inputDescription"
                value={description}
                onChange={setDescription}
                maxLength={CHAR_LIMITS.DESCRIPTION}
                placeholder="Ex: Impressão sem tinta, velocidade de 150mm/s, compatível com USB e Bluetooth"
                isTextArea={true}
              />

              <TextInput
                label="Marca"
                id="inputBrand"
                value={brand}
                onChange={setBrand}
                maxLength={CHAR_LIMITS.BRAND}
                placeholder="Ex: Noozi"
              />

              <TextInput
                label="Categoria"
                id="inputCategory"
                value={category}
                onChange={setCategory}
                maxLength={CHAR_LIMITS.CATEGORY}
                className="form-field-single"
                placeholder="Ex: Tecnologia"
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
                onChange={(v) => { setQuantity(v); clearError("stock_quantity"); }}
                min="0"
                placeholder="Ex: 25"
                tooltip="Quantidade atual em estoque. Use apenas números inteiros."
                required="Obrigatório"
                error={errors.stock_quantity}
              />
              <TextInput
                label="Unidade de Medida"
                id="inputUnity"
                value={unit}
                onChange={setUnit}
                maxLength={CHAR_LIMITS.UNIT}
                placeholder="Ex: kg, un, L, pacote"
                tooltip="Como o produto é contado ou pesado."
                className="form-field-single"
              />
              <PriceInput
                label="Preço Unitário"
                id="inputValue"
                value={priceValue}
                onChange={(v) => { setPriceValue(v); clearError("item_price"); }}
                tooltip="Valor por unidade de produto vendido."
                required="Obrigatório"
                error={errors.item_price}
                helpText="Digite apenas números. A formatação é automática."
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
                placeholder="Ex: 10"
                tooltip="Abaixo deste número, você recebe um aviso de reposição."
              />
              <TextInput
                label="Quantidade de estoque alto"
                id="inputHStock"
                value={highLevel}
                onChange={setHighLevel}
                maxLength={CHAR_LIMITS.HIGH_LEVEL}
                className="form-field-single"
                placeholder="Ex: 100"
                tooltip="Acima deste número, você recebe um aviso de excesso."
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
                tooltip="Deixe em branco caso o produto não tenha validade."
                error={errors.expiration_date}
                helpText="Digite dia, mês e ano no formato DD/MM/AAAA. "
              />
              <TextInput
                label="Lote"
                id="inputBatch"
                value={batch}
                onChange={setBatch}
                maxLength={CHAR_LIMITS.BATCH}
                className="form-field-single"
                tooltip="Código de identificação do lote de fabricação (se aplicável)."
                placeholder="Ex: NZ202605"
              />
              <TextInput
                label="SKU"
                id="inputSKU"
                value={sku}
                onChange={(v) => { setSku(v); clearError("sku"); }}
                maxLength={CHAR_LIMITS.SKU}
                className="form-field-single"
                tooltip="Código interno único de identificação do produto. Crie ou use o código do fornecedor."
                placeholder="Ex: ABC-DEF-123"
                isRequired={true}
                error={errors.sku}
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

          {/* Botão */}
          <div className="flex justify-center pt-4" id="btn_cadastro">
            <div className="w-full lg:w-1/2">
              <ActionButton
                variant="submit"
                icon={Send}
                label="Cadastrar Produto"
                isLoading={isSubmitting}
                disabled={isSubmitting}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}