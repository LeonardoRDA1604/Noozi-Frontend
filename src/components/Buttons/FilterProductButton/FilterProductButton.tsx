import FilterButtonModal from "@/components/Modals/ProductFilterButtonModal";
import { Funnel } from "lucide-react";
import { useState } from "react";
import type { ProductFilters } from "@/types/ProductFilters.types";

interface FilterProductButtonProps {
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
  hasActiveFilters: boolean;
}

export default function FilterProductButton({
  filters,
  setFilters,
  hasActiveFilters,
}: FilterProductButtonProps) {
  const [filterModal, setFilterModal] = useState(false);

  return (
    <div className="mr-6 flex justify-center items-center w-[30px] h-[90%]">
      <div className="relative w-full">
        <button
          className="bg-noozi-input_field rounded-[3.5px] w-full"
          onClick={() => setFilterModal(true)}
        >
          <Funnel />
        </button>

        {/* Badge indicando filtros ativos */}
        {hasActiveFilters && (
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-noozi-bright_blue rounded-full" />
        )}
      </div>

      <FilterButtonModal
        isOpen={filterModal}
        onClose={() => setFilterModal(false)}
        onApply={setFilters}
        currentFilters={filters}
      />
    </div>
  );
}