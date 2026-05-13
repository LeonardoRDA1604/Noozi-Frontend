import type { LucideIcon } from "lucide-react";

export interface MetricsCardProps {
  value: number | string;
  icon: LucideIcon;
  title: string;
  iconColor?: "default" | "green" | "yellow" | "red";
  onTitleClick?: () => void;
  href?: string
}
