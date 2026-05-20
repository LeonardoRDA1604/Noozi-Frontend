import { House, List, CirclePlus, LayoutDashboard, CircleUserRound } from "lucide-react";
import type { NavItem } from "@/types/Navigation.types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Início",      href: "/",                icon: House            },
  { label: "Produtos",    href: "/products",        icon: List             },
  { label: "Cadastrar",   href: "/products/new",    icon: CirclePlus       },
  { label: "Dashboard",   href: "/dashboard",       icon: LayoutDashboard  },
  { label: "Perfil",      href: "/profile",         icon: CircleUserRound  },
];