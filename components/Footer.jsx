import { footerLinks } from "@/libs/data";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-3 px-6 py-10 md:justify-between md:flex-row md:gap-0 md:px-14 xl:px-32">
            <div className="block space-y-2 md:space-y-5">
                <ul className="flex flex-wrap items-center justify-center gap-3 md:justify-start sm:gap-6">
                    {footerLinks.slice(0, 3).map((list, idx) => (
                        <li key={idx}>
                            <Link
                                href={list.ref}
                                className="text-sm font-normal leading-6 tracking-wide uppercase transition-all ease-in-out md:text-base lg:text-lg font-figtree hover:underline underline-offset-4 decoration-primary duration-400"
                            >
                                {list.menu}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center gap-6 md:justify-start">
                    <Link href={"#"}>
                        <FaFacebook className="text-3xl md:text-4xl lg:text-[48px] text-[#0866FF] hover:scale-105 transition-all duration-400 ease-in-out" />
                    </Link>
                    <Link href={"#"}>
                        <FaInstagram className="text-3xl md:text-4xl lg:text-[48px] text-[#E4405F] hover:scale-105 transition-all duration-400 ease-in-out" />
                    </Link>
                    <Link href={"#"}>
                        <FaYoutube className="text-3xl md:text-4xl lg:text-[48px] text-[#FF0000] hover:scale-105 transition-all duration-400 ease-in-out" />
                    </Link>
                </div>
            </div>
            <div className="block space-y-2 md:space-y-5">
                <ul className="flex items-center justify-center gap-3 md:-mt-5 md:justify-end sm:gap-6">
                    {footerLinks.slice(3, 5).map((list, idx) => (
                        <li key={idx}>
                            <Link
                                href={list.ref}
                                className="text-sm font-normal leading-6 tracking-wide uppercase md:text-base lg:text-lg font-figtree hover:underline underline-offset-4 decoration-primary"
                            >
                                {list.menu}
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="font-normal leading-6 tracking-wide text-center capitalize cursor-pointer sm:text-right md:text-base lg:text-lg font-figtree hover:text-primary">
                    Rasims export 2024 | All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
