import { Loader2 } from "lucide-react";
import type { LoadingProps, LoadingSize } from "@/types/LoadingState.types";

const sizeLoading: Record<LoadingSize, {icon: number, text: string}> = {
  sm: { icon: 20, text: "text-xs" },
  md: { icon: 32, text: "text-sm" },
  lg: { icon: 48, text: "text-base" },
};

export function LoadingStateBase({
  isLoading = true,
  label = "Carregando...",
  size = "md",
  variant = "inline",
}: LoadingProps) {
  if (!isLoading) return null;

  const { icon, text } = sizeLoading[size];

  const content = (
    <div
      className="flex flex-col items-center justify-center gap-2"
      role="status"
      aria-live="polite"
    >
      <Loader2
        size={icon}
        className="animate-spin text-noozi-primary"
        aria-hidden="true"
      />
      {label && (
        <span className={`${text} text-noozi-muted font-medium`}>
          {label}
        </span>
      )}
    </div>
  );

  if (variant === "fullscreen") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-noozi-background">
        {content}
      </div>
    );
  }

  if (variant === "overlay") {
    return (
      <div className="absolute inset-0 z-40 flex items-center justify-center bg-noozi-background/90 backdrop-blur-[1px]">
        {content}
      </div>
    );
  }

  return <div className="w-full py-6">{content}</div>;
}