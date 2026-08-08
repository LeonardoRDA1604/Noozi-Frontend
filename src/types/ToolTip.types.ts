export interface TooltipProps {
  text: string;
  position?: "top" | "right" | "left";
  children?: React.ReactNode
  bounded?: boolean,
}