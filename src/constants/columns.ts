export const COLUMNS = [
  { label: "Status", priority: 1 },
  { label: "ID", priority: 1 },
  { label: "Nome", priority: 1 },
  { label: "Quantidade", priority: 1 },
  { label: "Preço", priority: 3 },
  { label: "Categoria", priority: 2 },
  { label: "Validade", priority: 4 },
  { label: "Marca", priority: 5 },
  { label: "Ação", priority: 3 },
]

export const GRID_COLS = [
  "grid-cols-[0.67fr_0.4fr_1.5fr_0.9fr]",                                     // base mobile
  "sm:grid-cols-[0.9fr_0.5fr_1fr_1fr_1fr]",                                     // sm 640px
  "md:grid-cols-[1fr_0.4fr_1.2fr_0.8fr_1fr_1fr_1fr]",                                     // + Preço, Categoria
  "lg:grid-cols-[1fr_0.4fr_1.2fr_0.8fr_1fr_1fr_1fr_1fr]",                                     // + Validade
  "xl:grid-cols-[1fr_0.4fr_1.2fr_0.8fr_1fr_1fr_1fr_1fr_1fr]",                                     // + Marca
].join(" ")