import type { SectionTitleProps } from "@/types/SectionTitle.types";

export function SectionTitle({ title, subtitle, children, className = "" }: SectionTitleProps) {
  return (
    <section className={`flex flex-col gap-3 ${className}`}>
      <div className="flex flex-col gap-0.5">
        <h2 className="text-xl font-semibold text-noozi-text tracking-tight">{title}</h2>
        {subtitle && (<p className="text-xs text-noozi-muted">{subtitle}</p>)}
      </div>
      {children}
    </section>
  );
}