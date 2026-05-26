// Formata data YYYY-MM-DD (formato ISO) para DD/MM/AAAA
export function formatISODate(iso?: string): string {
  if (!iso) return "—";
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}