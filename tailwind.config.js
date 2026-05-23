/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ─── FONTES ───────────────────────────────────────────────
      fontFamily: {
        sans: ["Geist", "DM Sans", "Poppins", "sans-serif"], // padrão do sistema
        display: ["Geist", "Poppins", "sans-serif"], // títulos e headings
        mono: ["Geist Mono", "monospace"], // código
      },

      // ─── CORES ────────────────────────────────────────────────
      colors: {
        noozi: {
          // Cores principais da marca
          bright_blue: "#1752FD", // azul intenso
          sky_blue: "#30B7F0", // azul-céu

          // Cores padrão para Layout e Surface
          default_screen: "#F9FAFF", // default screen background
          input_field: "#F1F2F7",

          // Escala de cinza da marca
          gray: {
            900: "#111111",
            800: "#1F1F1F",
            700: "#2E2E2E",
            600: "#4B4B4B",
            500: "#9F9F9F", // cinza médio
            400: "#BDBDBD",
            300: "#D4D4D4",
            200: "#E8E8E8",
            100: "#F5F5F5",
            50: "#FAFAFA",
          },

          // Aliases semânticos
          background: "#FFFFFF",
          surface: "#F5F5F5", // fundo de cards, painéis
          border: "#E8E8E8",
          text: "#111111",
          muted: "#9F9F9F", // texto secundário
        },

        // Status — para ícones, badges, alertas
        status: {
          success: "#34D399", // emerald-400
          warning: "#FBBF24", // amber-400
          danger:  "#F87171", // red-400
          info: "#30B7F0", // sky-blue
        },
      },

      // ─── BORDAS ───────────────────────────────────────────────
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        full: "9999px",
      },

      // ─── SOMBRAS ──────────────────────────────────────────────
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.07)",
        lg: "0 10px 24px rgba(0,0,0,0.08)",
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
      },

      // ─── BREAKPOINTS ──────────────────────────────────────────
      screens: {
        // ─── MOBILE ─────────────────────────────────────────────────
        // nenhum prefixo → qualquer tela (mobile pequeno, < 375px)
        xs:  "375px",   // mobile pequeno (iPhone SE, androids compactos)
        sm:  "390px",   // mobile padrão (iPhone 14, maioria dos androids)
        // ─── TABLET ─────────────────────────────────────────────────
        md:  "768px",   // tablet retrato (iPad, iPad Mini)
        lg:  "1024px",  // tablet paisagem (iPad deitado) + desktops pequenos
        // ─── DESKTOP ────────────────────────────────────────────────
        xl:  "1280px",  // desktop padrão
        "2xl": "1536px" // desktop grande / telas wide
        // ─── REFERÊNCIA DE USO ──────────────────────────────────────
        // <sem prefixo>    → mobile pequeno (base, sempre começa aqui)
        // xs:              → mobile pequeno (≥ 375px)
        // sm:              → mobile padrão  (≥ 390px)
        // md:              → tablet retrato (≥ 768px)
        // lg:              → tablet paisagem / desktop pequeno (≥ 1024px)
        // xl:              → desktop padrão (≥ 1280px)
        // 2xl:             → desktop grande (≥ 1536px)
        // landscape:       → qualquer dispositivo em modo paisagem (orientação)
        // portrait:        → qualquer dispositivo em modo retrato  (orientação)
      },

      // ─── ESPAÇAMENTOS EXTRAS ──────────────────────────────────
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
