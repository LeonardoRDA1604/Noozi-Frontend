import FilterButtonModal from "@/components/Modals/ProductFilterButtonModal/ProductFilterButtonModal";
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
    <div className="flex items-center pr-6">
      <div className="relative">
        <button
          onClick={() => setFilterModal(true)}
          className="flex items-center justify-center h-[70%] aspect-square min-h-[42px] min-w-[42px] bg-noozi-input_field border border-solid border-noozi-gray-300 rounded-lg hover:bg-noozi-gray-100 transition-colors duration-150"
        >
          <Funnel size={18} color={hasActiveFilters ? "#0B4EFF" : "#8a8a8a"} />
        </button>

        {/* Badge indicando filtros ativos */}
        {hasActiveFilters && (
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-noozi-bright_blue rounded-full border-2 border-white" />
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
