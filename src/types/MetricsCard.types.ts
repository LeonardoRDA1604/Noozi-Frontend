import type { LucideIcon } from "lucide-react";

export interface MetricsCardProps {
    value: number | string;
    icon: LucideIcon;
    title: string;
    onTitleClick?: () => void;
}