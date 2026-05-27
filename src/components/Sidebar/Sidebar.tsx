import { useState } from "react";
import { X, Settings, Moon, Sun, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/constants/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onToggleDark: () => void;
}

export function Sidebar({ isOpen, onClose, isDark, onToggleDark }: SidebarProps) {
  const { pathname } = useLocation();
  const [configOpen, setConfigOpen] = useState(false);

  return (
    <>
      {/* Overlay escuro atrás do sidebar - moderno com blur */}
      <div
        className={`
          fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer ou Sidebar */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu lateral de navegação"
        className={`
          fixed top-0 left-0 z-50
          h-full w-72
          bg-noozi-background border-r border-noozi-border
          shadow-2xl flex flex-col
          transform transition-all duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          // ${isOpen ? "translate-x-0 scale-100" : "-translate-x-full scale-[0.98]"}
      >
        
        {/* Header ou Cabeçalho do sidebar */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-noozi-border shrink-0">
          <div className="flex flex-col">
            <span className="font-display font-semibold text-noozi-text">Menu</span>
            <span className="text-[11px] text-noozi-muted">Navegação principal</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="flex items-center justify-center h-10 w-10 rounded-xl hover:bg-noozi-surface transition-colors"
          > 
          {/* rounded lg tb */}
         {/* className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-noozi-surface transition-colors active:scale-95" */}
            <X size={18} className="text-noozi-muted" />
            {/* size 20 */}
          </button>
        </div>

        {/* Navigation — dinâmico, cresce e empurra configs para baixo */}
        <nav className="flex-1 overflow-y-auto p-3" aria-label="Navegação principal">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    to={href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      flex items-center gap-3 px-3 py-3 rounded-xl
                      text-sm font-medium transition-all duration-150
                      hover:bg-noozi-surface active:scale-[0.98]
                      ${isActive
                        ? "bg-noozi-bright_blue/10 text-noozi-bright_blue"
                        : "text-noozi-text"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className={isActive ? "text-noozi-bright_blue" : "text-noozi-muted"}
                    />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Seção de Configurações — fixada na base */}
        <div className="shrink-0 border-t border-noozi-border p-3">

          {/* Painel de opções — expande para cima */}
          {configOpen && (
            <div
              className="mb-2 rounded-xl border border-noozi-border bg-noozi-surface overflow-hidden"
              role="region"
              aria-label="Opções de configuração"
            >
              {/* Tema escuro */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                  {isDark
                    ? <Moon size={15} className="text-noozi-sky_blue" aria-hidden="true" />
                    : <Sun  size={15} className="text-status-warning" aria-hidden="true" />
                  }
                  <span className="text-sm font-medium text-noozi-text">Tema escuro</span>
                </div>

                {/* Toggle acessível */}
                <button
                  role="switch"
                  aria-checked={isDark}
                  aria-label={`Tema escuro: ${isDark ? "ligado" : "desligado"}`}
                  onClick={onToggleDark}
                  className={`
                    relative inline-flex h-6 w-11 items-center rounded-full
                    transition-colors duration-200 focus:outline-none
                    focus:ring-2 focus:ring-noozi-bright_blue/40 focus:ring-offset-1
                    ${isDark ? "bg-noozi-bright_blue" : "bg-noozi-gray-300"}
                  `}
                >
                  <span
                    className={`
                      inline-block h-4 w-4 rounded-full bg-white shadow-sm
                      transform transition-transform duration-200
                      ${isDark ? "translate-x-6" : "translate-x-1"}
                    `}
                  />
                  {/* Label visual Lig./Desl. */}
                  <span
                    className={`
                      absolute text-[10px] font-bold
                      transition-all duration-200
                      ${isDark ? "left-1.5 " : "right-1"}
                    `}
                    aria-hidden="true"
                  >
                    {isDark ? "ON" : "OFF"}
                  </span>
                </button>
              </div>

              {/* Futuras opções de config aqui */}
              <div className="px-4 py-2 border-t border-noozi-border">
                <p className="text-[11px] text-noozi-muted">
                  Mais configurações em breve
                </p>
              </div>
            </div>
          )}

          {/* Botão de Configurações */}
          <button
            type="button"
            aria-expanded={configOpen}
            aria-controls="config-panel"
            onClick={() => setConfigOpen((prev) => !prev)}
            className={`
              w-full flex items-center justify-between gap-3
              px-3 py-3 rounded-xl
              text-sm font-medium text-noozi-text
              hover:bg-noozi-surface transition-all duration-150
              ${configOpen ? "bg-noozi-surface" : ""}
            `}
          >
            <div className="flex items-center gap-3">
              <Settings
                size={18}
                className="text-noozi-muted"
                aria-hidden="true"
              />
              Configurações
            </div>
            <ChevronUp
              size={15}
              className={`
                text-noozi-muted transition-transform duration-200
                ${configOpen ? "rotate-0" : "rotate-180"}
              `}
              aria-hidden="true"
            />
          </button>
        </div>

      </aside>
    </>
  );
}