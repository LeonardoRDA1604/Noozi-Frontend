const COLUMNS = [
  { label: "Status",     priority: 1 },
  { label: "ID",         priority: 1 },
  { label: "Nome",       priority: 1 },
  { label: "Quantidade", priority: 1 },
  { label: "Preço",      priority: 2 },
  { label: "Categoria",  priority: 2 },
  { label: "Validade",   priority: 3 },
  { label: "Marca",      priority: 4 },
  { label: "Ação",       priority: 1 },
];

function getVisibilityClass(priority: number): string {
  if (priority >= 4) return "hidden xl:flex";
  if (priority >= 3) return "hidden lg:flex";
  if (priority >= 2) return "hidden md:flex";
  if (priority >= 1) return "hidden sm:flex";
  return "flex";
}

export default function Teste() {
  return (
    <div className="flex mx-3 rounded-lg text-white font-semibold bg-[#1752FD] overflow-hidden">
      {COLUMNS.map((col, i, arr) => (
        <div
          key={col.label}
          className={`
            items-center justify-center flex-1 px-5 py-3 sm:text-md md:text-lg lg:text-xl
            ${getVisibilityClass(col.priority)}
            ${i < arr.length - 1 ? "border-r-2 border-white" : ""}
          `}
        >
          <span className="font-medium">{col.label}</span>
        </div>
      ))}
    </div>
  );
}