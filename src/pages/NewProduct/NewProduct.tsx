export default function Form() {
  return (
    
    <div
      id="cadastro"
      className="bg-[#EFEFEF] w-full min-h-dvh p-6 overflow-y-auto"
    >
      <form className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
        {/* Nome - ocupa toda a largura */}
        <div className="col-span-2 md:col-span-2 lg:col-span-4">
          <label className="block mb-2 font-medium">Nome:</label>
          <input
            className="w-full bg-[#f5f5f5] border border-solid border-gray-300 rounded-lg px-3 py-2"
            type="text"
          />
        </div>

        {/* Marca - ocupa toda a largura */}
        <div className="col-span-2 md:col-span-2 lg:col-span-4">
          <label className="block mb-2 font-medium">Marca:</label>
          <input
            className="w-full bg-[#f5f5f5] border border-solid border-gray-300 rounded-lg px-3 py-2"
            type="text"
          />
        </div>

        {/* Descrição - ocupa toda a largura */}
        <div className="col-span-2 md:col-span-2 lg:col-span-4">
          <label className="block mb-2 font-medium">Descrição:</label>
          <textarea
            className="w-full bg-[#f5f5f5] border border-solid border-gray-300 rounded-lg px-3 py-2 h-24 resize-none"
            id="c_descricao"
          />
        </div>

        {/* Linha com 4 campos: Categoria | Quantidade | Unidade de Medida | Preço Unitário */}
        <div className="col-span-1">
          <label className="block mb-2 font-medium">Categoria:</label>
          <input
            className="w-full bg-[#f5f5f5] border border-solid border-gray-300 rounded-lg px-3 py-2"
            type="text"
          />
        </div>

        <div className="col-span-1">
          <label className="block mb-2 font-medium">Quantidade:</label>
          <input
            className="w-full bg-[#f5f5f5] border border-solid border-gray-300 rounded-lg px-3 py-2"
            type="number"
          />
        </div>

        <div className="col-span-1">
          <label className="block mb-2 font-medium">Unidade de Medida:</label>
          <input
            className="w-full bg-[#f5f5f5] border border-solid border-gray-300 rounded-lg px-3 py-2"
            type="text"
            placeholder="Ex: kg, un, L"
          />
        </div>

        <div className="col-span-1">
          <label className="block mb-2 font-medium">Preço Unitário:</label>
          <input
            className="w-full bg-[#f5f5f5] border border-solid border-gray-300 rounded-lg px-3 py-2"
            type="text"
            placeholder="R$ 0,00"
          />
        </div>

        {/* Grid 2 colunas: Lado esquerdo (Validade, Lote, SKU) | Lado direito (Upload de Imagem) */}
        <div className="grid grid-cols-2 gap-4 col-span-full">
          {/* Coluna esquerda - Validade, Lote, SKU */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block font-medium">Validade:</label>
              {/* //TODO: Rever: placeholder, icon, formatação e validação. */}
              <input
                className="w-full bg-[#f5f5f5] border border-solid border-gray-300 rounded-lg px-3 py-2 mt-2"
                id="data"
                type="date"
              />
            </div>

            <div>
              <label className="block font-medium">Lote:</label>
              <input
                className="w-full bg-[#f5f5f5] border border-solid border-gray-300 rounded-lg px-3 py-2 mt-2"
                type="text"
              />
            </div>

            <div>
              <label className="block font-medium">SKU:</label>
              <input
                className="w-full bg-[#f5f5f5] border border-solid border-gray-300 rounded-lg px-3 py-2 mt-2"
                type="text"
              />
            </div>
          </div>

          {/* Coluna direita - Upload de Imagem */}
          <div className="flex flex-col">
            <label className="block mb-2 font-medium">Imagem do Produto:</label>
            <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg bg-[#f5f5f5] hover:bg-gray-50">
              <label className="flex flex-col items-center justify-center h-full min-h-[300px] cursor-pointer p-6">
              
                <span className="text-center text-gray-600">
                  Clique para fazer upload
                  <br />
                  <span className="text-sm text-center text-gray-500">
                    PNG, JPG até 10MB
                  </span>
                </span>
                <input type="file" className="hidden" accept="image/*" />
              </label>
            </div>
          </div>
        </div>

        {/* Botão - ocupa toda a largura */}
        <div className="mt-4 col-span-full">
          <button
            id="btn_cadastrar"
            className="w-full px-6 py-3 font-semibold text-white transition-colors duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:bg-indigo-800"
            type="button"
          >
            CADASTRAR PRODUTO
          </button>
        </div>
      </form>
    </div>
  );
}