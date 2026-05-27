import { Trash2, XCircle } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { BaseModal } from "@/components/Modals/BaseModal/BaseModal";

interface CardDeleteProps {
  productName: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function CardDelete({
  productName,
  onConfirm,
  onCancel,
  isLoading = false,
}: CardDeleteProps) {
  return (
    <BaseModal
      isOpen={true}
      onClose={onCancel}
      title="Apagar produto"
      size="sm"
    >
      {/* Ícone */}
      <div className="flex justify-center">
        <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
          <Trash2 className="w-7 h-7 text-red-500" />
        </div>
      </div>

      {/* Texto */}
      <div className="text-center flex flex-col gap-1">
        <h2 className="text-base font-semibold text-gray-800">
          Tem certeza que deseja apagar?
        </h2>
        <p className="text-sm text-gray-500">
          O produto{" "}
          <span className="font-semibold text-gray-700">
            {productName}
          </span>{" "}
          será removido permanentemente. Essa ação não pode ser desfeita.
        </p>
      </div>

      {/* Botões */}
      <div className="flex gap-2">
        <ActionButton
          variant="cancel"
          label="Cancelar"
          icon={XCircle}
          onClick={onCancel}
        />
        <ActionButton
          variant="delete"
          label="Confirmar"
          icon={Trash2}
          onClick={onConfirm}
          isLoading={isLoading}
        />
      </div>

    </BaseModal>
  )
}