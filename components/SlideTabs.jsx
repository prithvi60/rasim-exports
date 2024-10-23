"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SlideTabsExample = ({ data, isActive, setIsActive, val }) => {
    return (
        <div className="hidden md:block">
            <SlideTabs
                data={data}
                isActive={isActive}
                setIsActive={setIsActive}
                val={val}
            />
        </div>
    );
};

export const SlideTabsMobile = ({
    data,
    setIsMenuOpen,
    isActive,
    setIsActive,
}) => {
    return (
        <div>
            <MenuLinks
                data={data}
                setIsOpen={setIsMenuOpen}
                isActive={isActive}
                setIsActive={setIsActive}
            />
        </div>
    );
};

const SlideTabs = ({ data, isActive, setIsActive, val }) => {
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
            className="relative flex flex-col items-center justify-center gap-3.5 xl:gap-16 p-1 mx-auto font-semibold md:justify-start md:items-center md:flex-row w-max font-figtree"
        >
            {data.map((list, idx) => (
                <Link key={idx} href={list.ref} onClick={() => setIsActive(list.path)}>
                    <Tab
                        setPosition={setPosition}
                        val={val}
                        isActive={isActive}
                        list={list}
                    >
                        {list.menu}
                    </Tab>
                </Link>
            ))}
            {/* <Cursor position={position} /> */}
        </ul>
    );
};

const Tab = ({ children, setPosition, isActive, list, val }) => {
    const pathname = usePathname();
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
            className={`relative z-10 cursor-pointer px-3 py-1.5 text-base md:text-xs uppercase font-semibold hover:underline underline-offset-4 decoration-secondary transition-all duration-700 ease-linear xl:py-3 lg:text-lg ${val && pathname === "/" ? "text-white" : "text-primary"
                }  ${isActive && isActive === list.menu || isActive === list.path && pathname !== "/"
                    ? "underline underline-offset-8 decoration-secondary"
                    : "text-primary"
                }`}
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
            className={`absolute z-0 rounded-full bg-secondary h-7 md:h-12`}
        />
    );
};

const MenuLinks = ({ data, setIsOpen, isActive, setIsActive }) => {
    const pathname = usePathname();
    const handleClick = (value) => {
        // setIsActive(value)
        setIsOpen(false);
    };
    return (
        <ul className="relative flex flex-col items-center justify-center gap-3.5 p-1 mx-auto font-semibold w-max font-figtree">
            {data.map((list, idx) => (
                <div key={idx}>
                    <Link href={list.ref} onClick={() => handleClick(list.menu)}>
                        <h4
                            className={`text-base uppercase font-figtree ${isActive && isActive === list.menu || isActive === list.path && pathname !== "/"
                                ? "underline underline-offset-8 decoration-secondary"
                                : "text-white"
                                }`}
                        >
                            {list.menu}
                        </h4>
                    </Link>
                </div>
            ))}
        </ul>
    );
};
