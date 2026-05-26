import type { ActivityType } from "@/types/ActivityLog.types";
import { PackagePlus, PackageMinus, RefreshCw} from "lucide-react";

export const ACTIVITY_CONFIG: Record<ActivityType, {
  label: string;
  icon: React.ElementType;
  iconClass: string;
  badgeClass: string;
  badgeText: string;
}> = {
  created: {
    label:      "Produto cadastrado",
    icon:       PackagePlus,
    iconClass:  "text-status-success",
    badgeClass: "bg-status-success/10 text-status-success",
    badgeText:  "Cadastrado",
  },
  updated: {
    label:      "Produto atualizado",
    icon:       RefreshCw,
    iconClass:  "text-noozi-sky_blue",
    badgeClass: "bg-noozi-sky_blue/10 text-noozi-sky_blue",
    badgeText:  "Atualizado",
  },
  deleted: {
    label:      "Produto removido",
    icon:       PackageMinus,
    iconClass:  "text-status-danger",
    badgeClass: "bg-status-danger/10 text-status-danger",
    badgeText:  "Removido",
  }
};