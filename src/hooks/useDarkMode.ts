import { useState, useEffect } from "react";

const STORAGE_KEY = "noozi-theme";

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Lê preferência salva ou usa preferência do sistema
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  }, [isDark]);

  function toggle() {
    setIsDark((prev) => !prev);
  }

  return { isDark, toggle };
}