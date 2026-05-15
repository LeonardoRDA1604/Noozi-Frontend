import { Search } from 'lucide-react';
import type { Searchbar } from '@/types/Searchbar.types';

export default function Searchbar({ currentText, setCurrentText}: Searchbar){

    return(
        <>
            <div className="flex flex-rows w-[50%] gap-2 items-center bg-[#dbdbdb] rounded-[5px] p-2">   
                <Search size={20} color="#8a8a8a" />
                <input className='text-2xl w-[100%] bg-transparent focus:outline-none
                placeholder:text-[#8a8a8a]' type="text" placeholder='Pesquise seu estoque aqui' value={currentText} onChange={(e) => setCurrentText(e.target.value)}/>
            </div>
        </>
    )

}