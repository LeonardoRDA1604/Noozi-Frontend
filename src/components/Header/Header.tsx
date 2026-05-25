import { Menu, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import nooziLogo from "@/assets/logos/noozi-logo-default.svg";

interface HeaderProps {
  onMenuOpen: () => void;
}

export function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-noozi-border h-14">
      <nav
        aria-label="Navegação principal"
        className="flex items-center justify-between h-full px-4"
      >
        {/* Menu Hamburguer*/}
        <button
          onClick={onMenuOpen}
          aria-label="Abrir menu lateral"
          className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-noozi-surface active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-noozi-bright_blue/40" >
          <Menu size={22} className="text-noozi-text" />
        </button>

        {/* Logo */}
        <Link
          to="/"
          aria-label="Ir para página inicial"
          className="flex items-center justify-center"
        >
          <img
            src={nooziLogo}
            alt="Logo do Noozi"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Ver notificações"
            className="
              relative flex items-center justify-center
              h-10 w-10 rounded-md
              hover:bg-noozi-surface
              active:scale-95
              transition-all
              focus:outline-none focus:ring-2 focus:ring-noozi-bright_blue/40
            "
          >
            <Bell size={22} className="text-noozi-text" />

            {/* Badge de notificação (exemplo futuro) */}
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
          </button>
        </div>
      </nav>
    </header>
  );
}