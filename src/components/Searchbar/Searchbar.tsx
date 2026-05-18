import { Search } from 'lucide-react';
import type { Searchbar } from '@/types/Searchbar.type';

export default function Searchbar({ currentText, setCurrentText}: Searchbar){

    return(
        <>
        <div className='flex justify-center mt-12 pl-12 pr-12'>
            <div className="flex flex-rows justify-center h-[70%] w-[100%] gap-2 items-center bg-[#dbdbdb] rounded-[5px] p-2">   
                <Search size={20} color="#8a8a8a" />
                <input className='text-xl w-[100%] bg-transparent focus:outline-none
                placeholder:text-[#8a8a8a]' type="text" placeholder='Pesquise seu estoque aqui' value={currentText} onChange={(e) => setCurrentText(e.target.value)}/>
            </div>
        </div>
        </>
    )

}