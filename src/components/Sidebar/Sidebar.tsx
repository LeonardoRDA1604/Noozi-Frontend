import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/constants/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { pathname } = useLocation();

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
          h-full w-72 bg-white
          shadow-2xl border-r border-noozi-border

          transform transition-all duration-300 ease-out
          ${isOpen ? "translate-x-0 scale-100" : "-translate-x-full scale-[0.98]"}
        `}
      >
        {/* Header ou Cabeçalho do sidebar */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-noozi-border">
          <div className="flex flex-col">
            <span className="font-display font-semibold text-noozi-text">
              Menu
            </span>
            <span className="text-[11px] text-noozi-muted">
              Navegação principal
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="
              flex items-center justify-center
              h-10 w-10 rounded-md
              hover:bg-noozi-surface
              transition-colors active:scale-95
            "
          >
            <X size={20} className="text-noozi-muted" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
              const isActive = pathname === href;

              return (
                <li key={href}>
                  <Link
                    to={href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      group relative flex items-center gap-3
                      px-3 py-3 rounded-xl
                      text-sm font-medium
                      transition-all duration-200

                      hover:bg-noozi-surface
                      active:scale-[0.98]

                      ${
                        isActive
                          ? "bg-noozi-bright_blue/10 text-noozi-bright_blue"
                          : "text-noozi-text"
                      }
                    `}
                  >
                    {/* // active indicator lateral
                    <span
                      className={`
                        absolute left-0 top-1/2 -translate-y-1/2
                        h-11 w-1 rounded-full
                        bg-noozi-bright_blue
                        transition-opacity duration-200
                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    /> */}

                    <Icon
                      size={18}
                      strokeWidth={2}
                      className={`
                        transition-colors
                        ${isActive ? "text-noozi-bright_blue" : "text-noozi-muted"}
                      `}
                    />

                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}