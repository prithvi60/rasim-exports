import { footerLinks } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-6 pt-10 pb-4 space-y-4 md:px-14 xl:px-32">
            <div className="flex flex-col items-center justify-center gap-3 md:justify-between md:flex-row md:gap-0">
                <div className="block">
                    <div
                        className="relative w-16 h-16 ml-1 md:ml-0 md:w-24 md:h-20"
                    >
                        <Image
                            alt="Rasim Exports Logo"
                            className={`object-contain object-center`}
                            fill
                            src={"https://ik.imagekit.io/webibee/Rasim-Exports/RE-logo.png"}
                        />
                    </div>
                    <h4 className=" text-[#454545] text-lg md:text-xl lg:text-2xl 2xl:text-3xl">EST. 2002</h4>
                </div>
                <div className="block space-y-2 md:space-y-5">
                    <ul className="flex items-center justify-center gap-3 md:-mt-5 md:justify-end sm:gap-6">
                        {footerLinks.map((list, idx) => (
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
                    <div className="flex items-center justify-center gap-6 md:justify-end">
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
            </div>
            <p className="w-full font-normal leading-6 tracking-wide text-center capitalize cursor-pointer md:text-base lg:text-lg font-figtree hover:text-primary">
                Rasims export {new Date().getFullYear()} | ® All rights reserved
            </p>
        </footer >
    );
};

export default Footer;
