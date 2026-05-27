import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import ProductFilterButtonModal from "@/components/Modals/ProductFilterButtonModal/ProductFilterButtonModal";
import type { ProductFilters } from "@/types/ProductFilters.types";

interface FilterProductButtonProps {
  filters: ProductFilters;
  setFilters: (f: ProductFilters) => void;
  hasActiveFilters: boolean;
}

export default function FilterProductButton({ filters, setFilters, hasActiveFilters }: FilterProductButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ActionButton
        variant="filter"
        label="Filtrar"
        icon={SlidersHorizontal}
        isActive={hasActiveFilters}
        onClick={() => setIsOpen(true)}
      />

      <ProductFilterButtonModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onApply={setFilters}
        currentFilters={filters}
      />
    </>
  );
}