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
      {/* Overlay escuro atrás do sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer ou Sidebar */}
      <aside
        aria-label="Menu lateral"
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Cabeçalho do sidebar */}
        <div className="flex items-center justify-between h-14 px-4 border-b border-noozi-border">
          <span className="font-display font-semibold text-noozi-text">
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="flex items-center justify-center h-9 w-9 rounded-md hover:bg-noozi-surface transition-colors"
          >
            <X size={20} className="text-noozi-muted" />
          </button>
        </div>

        {/* Itens de navegação */}
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
                      flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                      ${
                        isActive
                          ? "bg-noozi-bright_blue/10 text-noozi-bright_blue"
                          : "text-noozi-text hover:bg-noozi-surface"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={isActive ? 2.5 : 1.8}
                      className={
                        isActive ? "text-noozi-bright_blue" : "text-noozi-muted"
                      }
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
