import { Send } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { useProductMetrics } from "@/hooks/useProductMetrics";

export default function NewProduct() {
  const { isLoading } = useProductMetrics();
  return (
    <>
      <div className="p-4">
        <h1 className="flex items-center justify-center text-4xl font-bold text-noozi-bright_blue">
          Noozi/new-product-page
        </h1>
      </div>

      {/* Div do botão de submit */}
      <div className="flex flex-col gap-2 my-6 max-w-xs">
        <ActionButton
          variant="submit"
          icon={Send}
          label="Cadastrar produto"
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
