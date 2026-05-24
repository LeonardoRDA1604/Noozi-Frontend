import type { ModalType } from "@/types/ModalType.types";

export interface MetricsModalProps {
  type: ModalType;
  onClose: () => void;
}