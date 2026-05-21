export interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  activeLabel?: string;
  tooltip?: string
}
