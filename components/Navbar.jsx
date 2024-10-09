"use client"
import { useState } from 'react';
import { SlideTabsExample, SlideTabsMobile } from './SlideTabs'
import { navbarLinks } from '@/libs/data'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
    const pathname = usePathname()
    const path = pathname.split('/');
    console.log(path[1]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState(path[0]);

    return (
        <nav className='w-full h-full mx-auto '>
            <div className="flex items-center justify-between md:justify-center gap-2.5 px-5 py-2 lg:px-16 z-[999] shadow-lg fixed top-0 rounded-full left-0 w-full  backdrop-blur-md bg-black/50 ">
                <SlideTabsExample data={navbarLinks.slice(0, 3)} isActive={isActive} setIsActive={setIsActive} />
                <Link href={"/"} className="text-2xl text-white cursor-pointer font-playFair md:text-3xl w-max">RE</Link>
                {/* py-0.5 md:py-1.5 px-3.5 md:px-5 rounded-full bg-secondary  */}
                <SlideTabsExample data={navbarLinks.slice(3, 6)} isActive={isActive} setIsActive={setIsActive} />
                <div className={`block p-1 rounded-lg cursor-pointer md:hidden bg-primary  ${isMenuOpen ? "opacity-0" : "opacity-100"}`} onClick={() => setIsMenuOpen(true)}>
                    <GiHamburgerMenu className='text-2xl text-white' />
                </div>
                <div className={`w-full h-dvh z-[1000] border-2 bg-secondary flex flex-col justify-start pt-16 items-center fixed top-0 ${isMenuOpen ? "right-0 transition-all duration-500 ease-linear" : "opacity-0 right-[-100%] transition-all duration-500 ease-linear"}`}>
                    <div className='absolute block p-1 rounded-lg cursor-pointer w-max bg-primary top-5 right-6' onClick={() => setIsMenuOpen(false)}>
                        <RiCloseLargeLine className='text-2xl text-white' />
                    </div>
                    {isMenuOpen && (
                        <div>
                            <SlideTabsMobile data={navbarLinks} setIsMenuOpen={setIsMenuOpen} />
                        </div>
                    )}

                </div>
            </div>
        </nav>
    )
}

export default Navbar
