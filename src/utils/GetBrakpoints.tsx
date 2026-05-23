export function GetBreakpoints(priority: number): string {
  if (priority >= 5) return "hidden xl:flex"
  if (priority >= 4) return "hidden lg:flex"
  if (priority >= 3) return "hidden md:flex"
  if (priority >= 2) return "hidden sm:flex"
  if (priority >= 1) return "flex"
  return "flex"
}