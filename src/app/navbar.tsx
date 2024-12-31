'use client'
import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "./components/form-components/search-form";
import DarkButton from "./components/form-components/buttons/button-dark";
import LightButton from "./components/form-components/buttons/light-button";
import { useColourMode } from "./lib/colourModeContext";
import { useWindowSize } from "./lib/windowSizeContext";
import { useEffect, useState } from "react";
import { IoIosMenu, IoIosSearch } from "react-icons/io";


const DesktopNavbar = () => {

    const { isDark, toggleColourMode } = useColourMode();
    return <ul className=" nav-padding nav-text flex justify-start items-center h-16 bg-transparent space-x-4">

        <li className="flex items-center justify-center gap-4 text-foreground">

            {!isDark ?
                <Image src="/icons/atz-icon-dark.svg" alt="ATZ Elevators" width={20} height={20} /> :
                <Image src="/icons/atz-icon-light.svg" alt="ATZ Elevators" width={20} height={20} />
            }


            <Link href="/"
                className="flex items-center justify-center space-x-2">
                <span className="text-2xl"> ATZ</span> <span className="text-sm"> &nbsp;ELEVATORS</span>
            </Link>

        </li>

        <li className="">
            <ul className="text-sm flex justify-center items-center space-x-4 ml-12">
                <li>
                    <Link href="/about">About </Link>
                </li>
                <li>
                    <Link href="/projects">Showcase </Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li className="relative">
                    <Link href='/elevators'>Elevators</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>

            </ul>
        </li>


        <li className="w-full">
            <ul className="flex justify-end items-center space-x-4">

                <li>
                    <DarkButton label="Contact Us" onClick={() => { }} className="" />
                </li>
                <li>
                    <LightButton label="Get a Quote" onClick={() => { }} className="" />
                </li>
                <li>
                    <SearchForm />
                </li>
                {/* <li>
                                <LightButton label={isDark ? 'Dark' : 'Light'}
                                    onClick={() => { toggleColourMode() }}
                                    className="" />
                            </li> */}


            </ul>
        </li>


    </ul>
}


export default function Navbar() {
    const { isTablet, isMobile, isDesktop } = useWindowSize()
    // console.log('isDark', isDark);

    return (
        <nav className="border-b-[1px] border-gray-200 ">
            {(!isTablet && !isMobile && !isDesktop) ?
                <DesktopNavbar />
                :
                <MobileNavbar />
            }
        </nav>
    )


}

export const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen)


    const handleSearchClick = () => setIsSearchOpen(!isSearchOpen)



    useEffect(() => {
        let nav_button_div = document.getElementsByClassName('nav-button')[0] as HTMLElement;
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            nav_button_div.classList.add('border-b-[1px]');
        }
        else {
            document.body.style.overflow = 'auto';
            nav_button_div.classList.remove('border-b-[1px]');
        }
    })



    return (
        <div className="">
            <div className="w-full nav-button flex justify-end border-white border-collapse">
                <button onClick={handleSearchClick}>
                    <IoIosSearch size={24} />
                </button>
                <button onClick={handleClick} className="p-4" > <IoIosMenu size={36} /></button>
            </div>
            {isOpen &&
                <ul className="flex flex-col  space-y-4 w-full min-h-screen bg-background p-8 *:text-foreground">
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/projects'>Showcase</Link>
                    </li>
                    <li>
                        <Link href='/services'>Services</Link>
                    </li>
                    <li>
                        <Link href='/elevators'>Elevators</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact Us</Link>
                    </li>
                </ul>
            }
        </div>
    )
}