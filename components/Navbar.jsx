"use client";
import { useEffect, useState } from "react";
import { SlideTabsExample, SlideTabsMobile } from "./SlideTabs";
import { navbarLinks } from "@/libs/data";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Navbar = () => {
    const pathname = usePathname();
    const path = pathname.split("/");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState("" || path[1]);
    const [percent, setPercent] = useState(null);
    const [scrollYValue, setScrollYValue] = useState(0);
    const [scrollValue, setScrollValue] = useState({
        value1: 0,
    });

    const handleScroll = () => {
        const ele = document.body.clientHeight;
        const scrollPosition = window.scrollY;
        setScrollYValue(() => scrollPosition); // => scroll position
        let percentage = ((scrollPosition + window.innerHeight) / ele) * 100;
        setPercent(() => Math.trunc(percentage));
        // console.log(Math.trunc(percentage));
        const percent1 = Math.floor(ele * 0.08);

        setScrollValue({
            value1: percent1
        });
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [percent])
    const val = scrollYValue <= scrollValue.value1

    return (
        <nav className="w-full h-full mx-auto ">
            <div className={`flex items-center justify-between md:justify-center gap-2.5 px-5 lg:px-8 xl:px-16 z-[999] transition-colors duration-500 ease-linear fixed top-0 left-0 w-full shadow-lg ${val && pathname === "/" ? "bg-white/50 " : "bg-white"}`}>
                <SlideTabsExample
                    data={navbarLinks.slice(0, 3)}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    val={val}
                />
                {/* <div className="px-5 py-2 bg-secondary"> */}
                <Link
                    href={"/"}
                    className="relative w-16 h-16 font-bold rounded-full cursor-pointer md:h-20 md:w-24 font-libreCaslonDisplay"
                >
                    <Image
                        alt="Rasim Exports Logo"
                        className={` object-contain object-center rounded-full`}
                        fill
                        src={"https://ik.imagekit.io/webibee/Rasim-Exports/RE-logo.png"}
                    />
                    <h4 className="absolute -bottom-0.5 md:-bottom-0 right-1 lg:right-3 xl:right-[20px] text-primary text-xs font-figtree font-semibold">EST. 2002</h4>
                </Link>
                {/* </div> */}
                {/* py-0.5 md:py-1.5 px-3.5 md:px-5 rounded-full bg-secondary  */}
                <SlideTabsExample
                    data={navbarLinks.slice(3, 6)}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    val={val}
                />
                <div
                    className={`block p-1 rounded-lg cursor-pointer md:hidden bg-primary  ${isMenuOpen ? "opacity-0" : "opacity-100"
                        }`}
                    onClick={() => setIsMenuOpen(true)}
                >
                    <GiHamburgerMenu className="text-2xl text-white" />
                </div>
                <div
                    className={`w-full h-dvh z-[1000] border-2 bg-primary/95 text-white flex flex-col justify-start pt-16 items-center fixed top-0 ${isMenuOpen
                        ? "right-0 transition-all duration-500 ease-linear"
                        : "opacity-0 right-[-100%] transition-all duration-500 ease-linear"
                        }`}
                >
                    <div
                        className="absolute block p-1 rounded-lg cursor-pointer w-max bg-primary top-5 right-6"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <RiCloseLargeLine className="text-2xl text-white" />
                    </div>
                    {isMenuOpen && (
                        <div>
                            <SlideTabsMobile
                                data={navbarLinks}
                                setIsMenuOpen={setIsMenuOpen}
                            />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
