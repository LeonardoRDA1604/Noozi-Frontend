import { Menu, Bell } from 'lucide-react'
import nooziLogo from '../../assets/logos/logoNoozi.svg'

export default function Header() {

    return (
    <>
        <header className="mb-10">
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
    </>
    );

}