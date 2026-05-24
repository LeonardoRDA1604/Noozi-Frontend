import { Menu, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import nooziLogo from "@/assets/logos/logoNoozi.svg";

interface HeaderProps {
  onMenuOpen: () => void;
}

export function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-noozi-border h-14">
      <div className="flex items-center justify-between h-full px-4">

        {/* Hamburguer */}
        <button
          onClick={onMenuOpen}
          aria-label="Abrir menu"
          className="flex items-center justify-center h-9 w-9 rounded-md hover:bg-noozi-surface transition-colors"
        >
          <Menu size={22} className="text-noozi-text" />
        </button>

        {/* Logo — centralizado */}
        <Link to="/" aria-label="Ir para a página inicial">
          <img src={nooziLogo} alt="Logo do Noozi" width={200} />
        </Link>

        {/* Notificações */}
        <button
          aria-label="Ver notificações"
          className="flex items-center justify-center h-9 w-9 rounded-md hover:bg-noozi-surface transition-colors"
        >
          <Bell size={22} className="text-noozi-text" />
        </button>

      </div>
    </header>
  );
}