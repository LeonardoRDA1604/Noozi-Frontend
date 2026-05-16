import { useState } from "react";

export default function Form() {
  const [date, setDate] = useState("")
  const [typeData, setTypeData] = useState("text")
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("R$ ");
  const [batch, setBatch] = useState("");
  const [sku, setSku] = useState("");
  const [status, setStatus] = useState(true);

  return (
    <div
      id="register"
      className="bg-[#EFEFEF] w-full min-h-dvh p-6 overflow-y-auto"
    >
      <form className="product-form-grid">
        {/* Nome - ocupa toda a largura */}
        <div className="form-field-full">
          <label className="block mb-2 font-medium">Nome:</label>
          <input
            className="w-full bg-[#f5f5f5] border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
            type="text"
            id="inputName"
          />
        </div>

        {/* Marca - ocupa toda a largura */}
        <div className="form-field-full">
          <label className="block mb-2 font-medium">Marca:</label>
          <input
            className="w-full bg-[#f5f5f5] border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
            type="text"
            id="inputBrand"
          />
        </div>

        {/* Descrição - ocupa toda a largura */}
        <div className="form-field-full">
          <label className="block mb-2 font-medium">Descrição:</label>
          <textarea
            className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 h-24 resize-none"
            id="inputDescription"
          />
        </div>

        {/* Categoria */}
        <div className="form-field-single">
          <label className="block mb-2 font-medium">Categoria:</label>
          <input
            className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
            type="text"
            id="inputCategory"
          />
        </div>

        {/* Quantidade */}
        <div className="form-field-single">
          <label className="block mb-2 font-medium">Quantidade:</label>
          <input
            className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
            type="number"
            id="inputQuantity"
          />
        </div>

        {/* Unidade de Medida */}
        <div className="form-field-single">
          <label className="block mb-2 font-medium">Unidade de Medida:</label>
          <input
            className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
            type="text"
            placeholder="Ex: kg, un, L"
            id="inputUnity"
          />
        </div>

        {/* Preço Unitário */}
        <div className="form-field-single">
          <label className="block mb-2 font-medium">Preço Unitário:</label>
          <input
            className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
            type="text"
            placeholder="R$ 0,00"
            id="inputValue"
          />
        </div>

        {/* Grid 2 colunas: Lado esquerdo (Validade, Lote, SKU) | Lado direito (Upload de Imagem) */}
        <div className="form-nested-grid">
          {/* Coluna esquerda - Validade, Lote, SKU */}
          <div className="form-inventory-fields">
            <div className="flex justify-between flex-col">
              <div>
                <label className="block font-medium">Validade:</label>
                <input
                  className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 mt-2"
                  id="inputDate"
                  type={typeData}
                  placeholder="DD/MM/AAAA"
                  value={date}
                  // Quando clica ou interage, vira um input de data
                  onFocus={() => setTypeData('date')}
                  // Quando perde o foco e está vazio, volta a ser texto para mostrar o placeholder
                  onBlur={() => !date && setTypeData('text')}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block font-medium">Lote:</label>
                <input
                  className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 mt-2"
                  type="text"
                  id="inputBatch"
                />
              </div>

              <div>
                <label className="block font-medium">SKU:</label>
                <input
                  className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2 mt-2"
                  type="text"
                  id="inputSKU"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Status do Produto:</label>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                  <span className="toggle-label">Ativo</span>
                </label>
              </div>
            </div>
          </div>

          {/* Coluna direita - Upload de Imagem */}
          <div className="flex flex-col">
            <label className="block mb-2 font-medium">Imagem do Produto:</label>
            <div className="flex-1 border-2 border-dashed border-noozi-gray-300 rounded-lg bg-noozi-surface hover:bg-gray-50">
              <label className="flex flex-col items-center justify-center h-full min-h-[300px] cursor-pointer p-6">
                <span className="text-center text-noozi-gray-600">
                  Clique para fazer upload
                  <br />
                  <span className="text-sm text-center text-noozi-gray-500">
                    PNG, JPG até 10MB
                  </span>
                </span>
                <input type="file" className="hidden" accept="image/*"
                id="inputImage"/>
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