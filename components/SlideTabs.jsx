"use client"
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const SlideTabsExample = ({ data }) => {
    return (
        <div className="hidden md:block">
            <SlideTabs data={data} />
        </div>
    );
};

export const SlideTabsMobile = ({ data, setIsMenuOpen }) => {
    return (
        <div>
            <MenuLinks data={data} setIsOpen={setIsMenuOpen} />
        </div>
    );
};

const SlideTabs = ({ data }) => {
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
            className="relative flex flex-col items-center justify-center gap-3.5 p-1 mx-auto font-normal md:bg-white md:justify-start md:items-center md:flex-row w-max font-libreCaslonDisplay"
        >
            {data.map((list, idx) => (
                <Link key={idx} href={list.ref}>
                    <Tab setPosition={setPosition} >{list.menu}</Tab>
                </Link>
            ))}
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({
    children,
    setPosition,
}) => {
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
            className="relative z-10 cursor-pointer px-3 py-1.5 text-base md:text-xs uppercase text-white mix-blend-difference xl:px-10 xl:py-3 lg:text-lg"
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
            className="absolute z-0 rounded-full bg-secondary h-7 md:h-12"
        />
    );
};

const MenuLinks = ({ data, setIsOpen }) => {
    return (
        <ul
            className="relative flex flex-col items-center justify-center gap-3.5 p-1 mx-auto font-normal w-max font-libreCaslonDisplay"
        >
            {data.map((list, idx) => (
                <div key={idx}>
                    <Link href={list.ref} onClick={() => setIsOpen(false)}>
                        <h4 className="text-base font-medium uppercase font-libreCaslonDisplay ">{list.menu}</h4>
                    </Link>
                </div>
            ))}
        </ul>
    );
}