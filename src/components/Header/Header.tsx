import { Menu, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import nooziLogoDefault from "@/assets/logos/noozi-logo-default.png";
import nooziLogoDark from "@/assets/logos/noozi-logo-dark-mode.png";

interface HeaderProps {
  onMenuOpen: () => void;
}

export function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-noozi-background border-b border-noozi-border h-14">
      <nav
        aria-label="Navegação principal"
        className="flex items-center justify-between h-full px-4"
      >
        {/* Menu Hamburguer*/}
        <button
          onClick={onMenuOpen}
          aria-label="Abrir menu lateral"
          className="flex items-center justify-center h-10 w-10 rounded-xl hover:bg-noozi-surface active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-noozi-bright_blue/40"
        >
          <Menu size={22} className="text-noozi-text" />
        </button>

        {/* Logo */}
        <Link to="/" aria-hidden="true" tabIndex={-1} title="Ir para a página inicial" className="flex items-center justify-center">
          {/* Light mode */}
          <img src={nooziLogoDefault}   alt="Logo do Noozi"   className="h-10 w-auto object-contain dark:hidden" />

          {/* Dark mode */}
          <img src={nooziLogoDark}    alt="Logo do Noozi"   className="hidden h-10 w-auto object-contain dark:block" />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Ver notificações"
            className="relative flex items-center justify-center h-10 w-10 rounded-xl hover:bg-noozi-surface active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-noozi-bright_blue/40"
          >
            {/* Badge de notificação (exemplo futuro) */}
            <Bell size={22} className="text-noozi-text" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-status-danger" aria-hidden="true" />
            
          </button>
        </div>
      </nav>
    </header>
  );
}