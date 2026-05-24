import type { SectionTitleProps } from "@/types/SectionTitle.types";

export function SectionTitle({
  title,
  subtitle,
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <section className={`space-y-4 ${className}`}>
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-noozi-text">{title}</h2>

        {subtitle && <p className="text-sm text-noozi-muted">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
