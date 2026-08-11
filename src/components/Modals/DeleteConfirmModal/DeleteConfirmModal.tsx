// src/components/Modals/DeleteConfirmModal/DeleteConfirmModal.tsx

import { Trash2, XCircle } from "lucide-react";
import { BaseModal } from "@/components/Modals/BaseModal/BaseModal";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  productName: string;
  isLoading: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function DeleteConfirmModal({
  isOpen,
  productName,
  isLoading,
  onCancel,
  onConfirm,
}: DeleteConfirmModalProps) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onCancel}
      title="Confirmar exclusão"
      size="sm"
    >
      <div className="flex flex-col gap-4">

        <div className="w-14 h-14 rounded-full bg-status-danger/10 flex items-center justify-center mx-auto">
          <Trash2 className="w-7 h-7 text-status-danger" />
        </div>

        <div className="text-base font-semibold text-center">
          <span>Tem certeza que deseja excluir?</span>
        </div>

        <p className="text-sm text-noozi-text leading-relaxed">
          O produto
          <span className="font-semibold"> {productName} </span>
          será deleta permanentemente! Esta ação não pode ser desfeita.
        </p>

        <div className="flex gap-2">
          <ActionButton
            variant="cancel"
            label="Cancelar"
            icon={XCircle}
            onClick={onCancel}
          />
          <ActionButton
            variant="delete"
            label="Apagar produto"
            icon={Trash2}
            isLoading={isLoading}
            onClick={onConfirm}
          />
        </div>
      </div>
    </BaseModal>
  );
}