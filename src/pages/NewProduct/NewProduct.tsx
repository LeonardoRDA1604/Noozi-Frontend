import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("R$ 0,00");
  const [priceValue, setPriceValue] = useState(0)
  const [date, setDate] = useState("")
  const [typeData, setTypeData] = useState("text")
  const [batch, setBatch] = useState("");
  const [sku, setSku] = useState("");
  const [status, setStatus] = useState(true);

  const CHAR_LIMITS = {
    NAME: 120,
    BRAND: 30,
    DESCRIPTION: 500,
    CATEGORY: 30,
    UNIT: 10,
    BATCH: 50,
    SKU: 50,
  };

  // Função para mudar a cor do contador de caracteres
  const getCounterColor = (value: string, limit: number) => {
    const used = value.length / limit;
    if (used >= 0.9) return "text-status-danger";  // ≥ 90% → vermelho
    if (used >= 0.8) return "text-status-warning";  // ≥ 80% → amarelo
    return "text-noozi-gray-400";                          // normal → cinza
  };
  

  // * MÁSCARA/FUNÇÕES DO INPUT PREÇO

  
  const formatPrice = (valueInCents: number): string => {
    // Converte centavos para reais (divide por 100)
    const valueInReais = valueInCents / 100;
    
    // Formata com 2 casas decimais
    const formatted = valueInReais.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    
    return `R$ ${formatted}`;
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    
    // Remove tudo que não é dígito
    const digitsOnly = input.replace(/\D/g, '');
    
    // Se vazio, reseta para R$ 0,00
    if (digitsOnly === '') {
      setPriceValue(0);
      setPrice('R$ 0,00');
      return;
    }
    
    // Converte para número (em centavos)
    const numericValue = parseInt(digitsOnly, 10);
    
    // Limita a 9999999999 centavos (R$ 99.999.999,99)
    const limitedValue = Math.min(numericValue, 9999999999);
    
    // Atualiza estado numérico e formatado
    setPriceValue(limitedValue);
    setPrice(formatPrice(limitedValue));
  };

  const handlePriceKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Permite: Backspace, Delete, Tab, Escape, Enter, setas
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    
    // Se é uma tecla permitida OU é um número (0-9), permite
    if (allowedKeys.includes(e.key) || /^\d$/.test(e.key)) {
      return;
    }
    
    // Bloqueia qualquer outra tecla (letras, símbolos, etc)
    e.preventDefault();
  };

  const handlePriceBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      
      // Remove o último dígito (divide por 10)
      const newValue = Math.floor(priceValue / 10);
      setPriceValue(newValue);
      setPrice(formatPrice(newValue));
    }
  };

  // * MÁSCARA - INPUT DATA DE VALIDADE
const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value.replace(/\D/g, ""); // remove non-digits
  if (value.length > 8) value = value.slice(0, 8);

  // Insert slashes
  if (value.length >= 3 && value.length < 5) {
    value = value.slice(0, 2) + "/" + value.slice(2);
  } else if (value.length >= 5) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
  }

  // Basic day/month validation while typing
  let parts = value.split("/");
  if (parts[0] && (parseInt(parts[0]) < 1 || parseInt(parts[0]) > 31)) {
    // allow partial, but warn? we'll just cap day at 31
    if (parts[0].length === 2 && parseInt(parts[0]) > 31) {
      parts[0] = "31";
      value = parts.join("/");
    }
  }
  if (parts[1] && parts[1].length === 2 && parseInt(parts[1]) > 12) {
    parts[1] = "12";
    value = parts.join("/");
  }

  setDate(value);
}
  

// * ESTRUTURA DA PÁGINA


  return (
    <div
      id="register"
      className="bg-[#EFEFEF] w-full min-h-dvh p-6 overflow-y-auto"
    >
      <form className="product-form-grid">
        {/* Nome */}
        <div className="form-field-full">
          <label className="block mb-2 font-medium">Nome:</label>
          <div className="relative">
            <input
              className="w-full bg-[#f5f5f5] border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-16"
              type="text"
              id="inputName"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, CHAR_LIMITS.NAME))}
              maxLength={CHAR_LIMITS.NAME}
            />
            {name.length > 0 &&(<span className={`absolute right-3 top-1/2 -translate-y-1/2 text-noozi-gray-400 text-sm pointer-events-none select-none ${getCounterColor(name, CHAR_LIMITS.NAME)}`}>
              {CHAR_LIMITS.NAME - name.length}
            </span>)}
          </div>
        </div>

        {/* Marca */}
        <div className="form-field-full">
          <label className="block mb-2 font-medium">Marca:</label>
          <div className="relative">
            <input
              className="w-full bg-[#f5f5f5] border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-16"
              type="text"
              id="inputBrand"
              value={brand}
              onChange={(e) => setBrand(e.target.value.slice(0, CHAR_LIMITS.BRAND))}
              maxLength={CHAR_LIMITS.BRAND}
            />
            {brand.length > 0 && (<span className={`absolute right-3 top-1/2 -translate-y-1/2 text-noozi-gray-400 text-sm pointer-events-none select-none ${getCounterColor(brand, CHAR_LIMITS.BRAND)}`}>
              {CHAR_LIMITS.BRAND - brand.length}
            </span>)}
          </div>
        </div>

        {/* Descrição */}
        <div className="form-field-full">
          <label className="block mb-2 font-medium">Descrição:</label>
          <div className="relative">
            <textarea
              className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-16 h-24 resize-none"
              id="inputDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, CHAR_LIMITS.DESCRIPTION))}
              maxLength={CHAR_LIMITS.DESCRIPTION}
            />
            {description.length > 0 &&(<span className={`absolute right-3 top-2 text-noozi-gray-400 text-sm pointer-events-none select-none ${getCounterColor(description, CHAR_LIMITS.DESCRIPTION)}`}>
              {CHAR_LIMITS.DESCRIPTION - description.length}
            </span>)}
          </div>
        </div>

        {/* Categoria */}
        <div className="form-field-single">
          <label className="block mb-2 font-medium">Categoria:</label>
          <div className="relative">
            <input
              className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-12"
              type="text"
              id="inputCategory"
              value={category}
              onChange={(e) => setCategory(e.target.value.slice(0, CHAR_LIMITS.CATEGORY))}
              maxLength={CHAR_LIMITS.CATEGORY}
            />
            {category.length > 0 &&(<span className={`absolute right-3 top-1/2 -translate-y-1/2 text-noozi-gray-400 text-sm pointer-events-none select-none ${getCounterColor(category, CHAR_LIMITS.CATEGORY)}`}>
              {CHAR_LIMITS.CATEGORY - category.length}
            </span>)}
          </div>
        </div>

        {/* Quantidade */}
        <div className="form-field-single">
          <label className="block mb-2 font-medium">Quantidade:</label>
          <input
            className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
            type="number"
            id="inputQuantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="0"
          />
        </div>

        {/* Unidade de Medida */}
        <div className="form-field-single">
          <label className="block mb-2 font-medium">Unidade de Medida:</label>
          <div className="relative">
            <input
              className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-12"
              type="text"
              placeholder="Ex: kg, un, L"
              id="inputUnity"
              value={unit}
              onChange={(e) => setUnit(e.target.value.slice(0, CHAR_LIMITS.UNIT))}
              maxLength={CHAR_LIMITS.UNIT}
            />
            {unit.length > 0 &&(<span className={`absolute right-3 top-1/2 -translate-y-1/2 text-noozi-gray-400 text-sm pointer-events-none select-none ${getCounterColor(unit, CHAR_LIMITS.UNIT)}`}>
              {CHAR_LIMITS.UNIT - unit.length}
            </span>)}
          </div>
        </div>

        {/* Preço Unitário */}
        <div className="form-field-single">
          <label className="block mb-2 font-medium">Preço Unitário:</label>
          <input
            className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
            type="text"
            placeholder="R$ 0,00"
            id="inputValue"
            value={price}
            onChange={handlePriceChange}
            onKeyDown={(e) => {
              handlePriceKeyDown(e);
              handlePriceBackspace(e);
            }}
          />
        </div>

        {/* Grid 2 colunas: Lado esquerdo (Validade, Lote, SKU, Status) | Lado direito (Upload de Imagem) */}
        <div className="form-nested-grid">
          {/* Coluna esquerda - Validade, Lote, SKU, Status */}
          <div className="form-inventory-fields">
            <div className="flex justify-between flex-col">
              {/* Validade */}
              <div>
                <label className="block font-medium">Validade:</label>
                <input
                  className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 mt-2"
                  id="inputDate"
                  type="text"
                  placeholder="DD/MM/AAAA"
                  value={date}
                  // Quando clica ou interage, vira um input de data
                  onFocus={() => setTypeData('date')}
                  // Quando perde o foco e está vazio, volta a ser texto para mostrar o placeholder
                  onBlur={() => !date && setTypeData('text')}
                  onChange={handleDateChange}
                />
              </div>

              {/* Lote */}
              <div>
                <label className="block font-medium">Lote:</label>
                <div className="relative mt-2">
                  <input
                    className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-12"
                    type="text"
                    id="inputBatch"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value.slice(0, CHAR_LIMITS.BATCH))}
                    maxLength={CHAR_LIMITS.BATCH}
                  />
                  {batch.length > 0 &&(<span className={`absolute right-3 top-1/2 -translate-y-1/2 text-noozi-gray-400 text-sm pointer-events-none select-none ${getCounterColor(batch, CHAR_LIMITS.BATCH)}`}>
                    {CHAR_LIMITS.BATCH - batch.length}
                  </span>)}
                </div>
              </div>

              {/* SKU */}
              <div>
                <label className="block font-medium">SKU:</label>
                <div className="relative mt-2">
                  <input
                    className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 pr-12"
                    type="text"
                    id="inputSKU"
                    value={sku}
                    onChange={(e) => setSku(e.target.value.slice(0, CHAR_LIMITS.SKU))}
                    maxLength={CHAR_LIMITS.SKU}
                  />
                  {sku.length > 0 &&(<span className={`absolute right-3 top-1/2 -translate-y-1/2 text-noozi-gray-400 text-sm pointer-events-none select-none ${getCounterColor(sku, CHAR_LIMITS.SKU)}`}>
                    {CHAR_LIMITS.SKU - sku.length}
                  </span>)}
                </div>
              </div>

              {/* Status do Produto */}
              <div>
                <label className="block font-medium mb-2">Status do Produto:</label>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={status}
                    onChange={(e) => setStatus(e.target.checked)}
                    defaultChecked 
                  />
                  <span className="toggle-slider"></span>
                  <span className="toggle-label">Ativo</span>
                </label>
              </div>
            </div>
          </div>

          {/* Coluna direita - Upload de Imagem */}
          <div className="flex flex-col">
            <label className="block mb-2 font-medium">Imagem do Produto:</label>
            <div className="flex-1 border-2 border-dashed border-noozi-gray-300 rounded-lg bg-noozi-surface hover:bg-gray-50 transition-colors">
              <label className="flex flex-col items-center justify-center h-full min-h-[300px] cursor-pointer p-6">
                <span className="text-center text-noozi-gray-600">
                  Clique para fazer upload
                  <br />
                  <span className="text-sm text-center text-noozi-gray-500">
                    PNG, JPG até 10MB
                  </span>
                </span>
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  id="inputImage"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Botão - ocupa toda a largura */}
        <div className="form-field-full mt-4">
          <button
            id="btn_register"
            className="w-full px-6 py-3 font-semibold text-white transition-colors duration-200 bg-noozi-bright_blue rounded-lg hover:bg-[#063CD4] active:bg-[#052EB0]"
            type="button"
          >
            CADASTRAR PRODUTO
          </button>
        </div>
      </form>
    </div>
  );
}