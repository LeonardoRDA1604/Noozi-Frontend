import { Link, useLocation } from "react-router-dom";
import { navItems } from "@/constants/navigation";

export function Footer() {
  const { pathname } = useLocation();

  return (
    // lg:hidden — some no desktop, só mobile e tablet
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-noozi-border lg:hidden">
      <nav aria-label="Navegação principal">
        <ul className="flex items-center justify-around h-16 px-2">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  to={href}
                  aria-label={label}
                  aria-current={isActive ? "page" : undefined}
                  className="flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center"
                >
                  <Icon
                    size={22}
                    className={isActive ? "text-noozi-bright_blue" : "text-noozi-muted"}
                    strokeWidth={isActive ? 2.5 : 1.8}
                  />
                  <span className={`text-[10px] font-medium ${isActive ? "text-noozi-bright_blue" : "text-noozi-muted"}`}>
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