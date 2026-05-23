import { Funnel } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function FilterProductButton(){
    const navigate = useNavigate()
   return (
    <>
    <div>
        <button className="bg-noozi-input_field rounded-[3.5px]" onClick={() => navigate("/")}>
            <Funnel/>
        </button>
    </div>
    </>
   ) 
}