import { useState, useCallback } from "react";

// Mapa de erros: chave do campo → mensagem de erro (ou undefined)
export type FormErrors<T> = Partial<Record<keyof T, string>>;

// Regra de validação: recebe o valor e retorna mensagem de erro ou null
export type ValidationRule<V> = (value: V) => string | null;

// Objeto de regras: cada chave do form pode ter uma regra associada
export type ValidationRules<T> = {
  [K in keyof T]?: ValidationRule<T[K]>;
};

export interface UseFormValidationReturn<T> {
  /** Mapa de erros atual */
  errors: FormErrors<T>;
  /**
   * Executa todas as regras e atualiza `errors`.
   * Faz scroll para o topo se houver erros.
   * Retorna `true` quando o form é válido.
   */
  validate: (fields: T) => boolean;
  /**
   * Limpa o erro de um campo específico.
   * Chame no `onChange` de cada input.
   */
  clearError: (field: keyof T) => void;
  /** Limpa todos os erros de uma vez (útil no resetForm). */
  clearAllErrors: () => void;
}

export function useFormValidation<T extends Record<string, any>>(
  rules: ValidationRules<T>
): UseFormValidationReturn<T> {
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const validate = useCallback(
    (fields: T): boolean => {
      const newErrors: FormErrors<T> = {};

      for (const key in rules) {
        const rule = rules[key as keyof T];
        if (rule) {
          const error = rule(fields[key as keyof T]);
          if (error) {
            newErrors[key as keyof T] = error;
          }
        }
      }

      setErrors(newErrors);

      const hasErrors = Object.keys(newErrors).length > 0;
      if (hasErrors) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      return !hasErrors;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rules]
  );

  const clearError = useCallback((field: keyof T) => {
    setErrors((prev) => {
      if (!prev[field]) return prev; // evita re-render desnecessário
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const clearAllErrors = useCallback(() => setErrors({}), []);

  return { errors, validate, clearError, clearAllErrors };
}