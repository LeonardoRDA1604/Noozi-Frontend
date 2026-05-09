import { Menu, Bell } from 'lucide-react'
import nooziLogo from '../../assets/logos/Logo + Texto.svg'
// import barsMenu from './assets/images/bars-solid.png'
// import logoNoozi from './assets/images/noozi-logo.png'
// import notiBell from './assets/images/bell-regular.png'

export default function Header(){


    return(
     
        <header className="cadastro">
            <div id="header" className="p-2.5 px-[5%] justify-between flex fixed w-full left-0 h-14 mb-2.5 top-0 items-center z-50 bg-white">
                <div id="h_menu" className="flex justify-center items-center cursor-pointer hover:scale-[1.3]">
                    <Menu width="30" aria-label="menu" />
                </div>
                <div id="h_logo_noozi" className='pr-12.5 flex justify-center items-center'>
                    <img src={nooziLogo} width="80" alt="logo-noozi" />
                </div>
                <div id="h_notificacoes" className='flex justify-center items-center cursor-pointer hover:scale-[1.3]'>
                    <Bell width="30" aria-label="notificacoes" />
                </div>
            </div>
        </header>
    
    );

}