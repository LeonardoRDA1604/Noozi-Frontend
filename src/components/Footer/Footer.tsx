import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/constants/navigation";

export function Footer() {
  const { pathname } = useLocation();

  return (
    // lg:hidden — some no desktop, só mobile e tablet
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-noozi-background border-t border-noozi-border lg:hidden">
      <nav aria-label="Navegação principal">
        <ul className="flex items-center justify-around h-16 px-2">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            
            return (
              <li key={href} className="relative flex-1">
                <Link
                  to={href}
                  aria-label={label}
                  aria-current={isActive ? "page" : undefined}
                  className="relative flex flex-col items-center justify-center gap-1 min-h-[44px] py-3 transition-all duration-200 active:scale-95 text-xs font-medium"
                >
                  {/* indicador superior (Active Tab Indicator) */}
                  <span className={`absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-1/2 rounded-full bg-noozi-bright_blue transition-all duration-200 ${isActive ? "opacity-100" : "opacity-0"}`} />
                  
                  {/* fundo leve no ativo */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-[85%] rounded-lg transition-colors duration-200 ${isActive ? "bg-noozi-bright_blue/10" : "bg-transparent"}`} />
                  
                  {/* ícone */}
                  <Icon size={22} strokeWidth={2} className={`relative z-10 transition-colors duration-200 ${isActive ? "text-noozi-bright_blue" : "text-noozi-muted"}`} />
                  
                  {/* label */}
                  <span className={`relative z-10 text-[10px] transition-colors duration-200 ${isActive ? "text-noozi-bright_blue" : "text-noozi-muted"}`}>
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}