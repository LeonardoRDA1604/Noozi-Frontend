import { useState } from 'react';

import type { PriceInputProps } from '@/types/InputTypes/PriceInput.types'; 

export function PriceInput({ label, id, value, onChange }: PriceInputProps) {
  const formatPrice = (valueInCents: number): string => {
    const valueInReais = valueInCents / 100;
    const formatted = valueInReais.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return `R$ ${formatted}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '');
    
    if (digitsOnly === '') {
      onChange(0);
      return;
    }
    
    const numericValue = parseInt(digitsOnly, 10);
    const limitedValue = Math.min(numericValue, 9999999999);
    onChange(limitedValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
    ];
    
    if (allowedKeys.includes(e.key) || /^\d$/.test(e.key)) {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        const newValue = Math.floor(value / 10);
        onChange(newValue);
      }
      return;
    }
    
    e.preventDefault();
  };

  return (
    <div className="form-field-single">
      <label htmlFor={id} className="block mb-2 font-medium">
        {label}
      </label>
      <input
        className="w-full bg-noozi-surface border border-solid border-noozi-gray-300 rounded-lg px-3 py-2"
        type="text"
        id={id}
        placeholder="R$ 0,00"
        value={formatPrice(value)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
