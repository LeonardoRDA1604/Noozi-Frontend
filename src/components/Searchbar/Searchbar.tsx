import { Search } from 'lucide-react';
import type { Searchbar } from '@/types/Searchbar.types';

export default function Searchbar({ currentText, setCurrentText}: Searchbar){

    return(
        <>
        <div className='flex justify-center pl-8 pr-8 w-[90%]'>
            <div className="flex flex-rows justify-center h-[90%] w-[100%] gap-2 items-center bg-noozi-input_field rounded-[5px] p-2">   
                <Search size={20} color="#8a8a8a" />
                <input 
                    className='text-xl w-[100%] bg-transparent focus:outline-none placeholder:text-[#8a8a8a]' 
                    type="text" placeholder='Pesquise seu estoque aqui' 
                    value={currentText} 
                    onChange={(e) => setCurrentText(e.target.value)}
                />
            </div>
        </div>
        </>
    )

}