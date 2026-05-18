import { Funnel } from "lucide-react"
import { useState } from "react"
import FilterButtonModal  from "../../Modals/ProductFilterButtonModal";

export default function FilterProductButton() {
    const [filterModalOpen, setFilterModalOpen] = useState(false);

    return (
        <>
            <div>
                <button className="bg-[#DDDfE3] rounded-[3.5px]" onClick={() => setFilterModalOpen(true)}>
                    <Funnel />
                </button>
                
                <FilterButtonModal
                    isOpen={filterModalOpen}
                    onClose={() => setFilterModalOpen(false)}
                />
            </div>
        </>
    )
}