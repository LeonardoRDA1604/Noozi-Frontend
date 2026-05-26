// Converte data DD/MM/AAAA para YYYY-MM-DD (formato ISO)
export const convertDateToISO = (dateStr: string): string | undefined => {
    if (!dateStr || dateStr.length !== 10) return undefined;
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  };