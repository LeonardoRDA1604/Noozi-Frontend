interface StatusBadgeProps {
  badgeClass: string;
  badgeText: string;
}

export function StatusBadge({
  badgeClass,
  badgeText,
}: StatusBadgeProps) {
  return (
    <span
      className={`shrink-0 text-[12px] font-semibold px-2 py-0.5 rounded-full  ${badgeClass}`}>
      {badgeText}
    </span>
  );
}