import { useMemo } from 'react';

export function useCharCounter(value: string, limit: number) {
  const remaining = limit - value.length;
  
  const color = useMemo(() => {
    const used = value.length / limit;
    if (used >= 0.9) return "text-status-danger";
    if (used >= 0.8) return "text-status-warning";
    return "text-noozi-gray-400";
  }, [value.length, limit]);

  return { remaining, color, showCounter: value.length > 0 };
}
