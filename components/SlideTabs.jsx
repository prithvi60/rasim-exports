"use client"
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SlideTabsExample = ({ data, isActive, setIsActive }) => {
    return (
        <div className="hidden md:block">
            <SlideTabs data={data} isActive={isActive} setIsActive={setIsActive} />
        </div>
    );
};

export const SlideTabsMobile = ({ data, setIsMenuOpen, isActive, setIsActive }) => {
    return (
        <div>
            <MenuLinks data={data} setIsOpen={setIsMenuOpen} isActive={isActive} setIsActive={setIsActive} />
        </div>
    );
};

const SlideTabs = ({ data, isActive, setIsActive }) => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative flex flex-col items-center justify-center gap-3.5 p-1 mx-auto font-normal md:justify-start md:items-center md:flex-row w-max font-libreCaslonDisplay"
        >
            {data.map((list, idx) => (
                <Link key={idx} href={list.ref} onClick={() => setIsActive(list.menu)}>
                    <Tab setPosition={setPosition} isActive={isActive} list={list}>{list.menu}</Tab>
                </Link>
            ))}
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({
    children,
    setPosition,
    isActive,
    list
}) => {
    const pathname = usePathname()
    // const path = pathname.split('/');
    // console.log(path[1]);
    // console.log(list);
    console.log(pathname);

    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className={`relative z-10 cursor-pointer px-3 py-1.5 text-base md:text-xs uppercase  font-semibold xl:px-10 xl:py-3 lg:text-lg  ${isActive && isActive === list.menu && pathname !== "/" ? "rounded-full bg-secondary h-7 md:h-12 text-primary" : "text-white"}`}
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className={`absolute z-0 rounded-full bg-primary h-7 md:h-12`}
        />
    );
};

const MenuLinks = ({ data, setIsOpen, isActive, setIsActive }) => {

    const handleClick = (value) => {
        // setIsActive(value)
        setIsOpen(false)
    }
    return (
        <ul
            className="relative flex flex-col items-center justify-center gap-3.5 p-1 mx-auto font-normal w-max font-libreCaslonDisplay"
        >
            {data.map((list, idx) => (
                <div key={idx}>
                    <Link href={list.ref} onClick={() => handleClick(list.menu)}>
                        <h4 className={`text-base font-medium uppercase font-libreCaslonDisplay hover:underline underline-offset-4 decoration-primary `}>{list.menu}</h4>
                    </Link>
                </div>
            ))}
        </ul>
    );
}