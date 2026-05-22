import { Funnel } from "lucide-react"
import { useState } from "react"
import FilterButtonModal  from "../../Modals/ProductFilterButtonModal";

export default function FilterProductButton() {
    const [filterModalOpen, setFilterModalOpen] = useState(false);

    return (
        <>
            <div className=" h-12 w-[5%] mr-4">
                <button className="flex bg-noozi-input_field rounded-md h-[90%] w-full justify-center items-center" onClick={() => setFilterModalOpen(true)} >
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