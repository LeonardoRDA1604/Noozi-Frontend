export type LoadingSize = "sm" | "md" | "lg";
export type LoadingVariant = "inline" | "overlay" | "fullscreen";

export interface LoadingProps {
    isLoading?: boolean;
    label?: string;
    size?: LoadingSize;
    variant?: LoadingVariant;
}