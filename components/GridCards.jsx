"use client"
import { usePathname } from "next/navigation";
import React from "react";
import { LuArrowDownRightFromCircle } from "react-icons/lu";

export const GridCards = ({ data }) => {
    return (
        // <div className="p-4 md:p-12">
        <div className="grid grid-cols-2 gap-3 rounded-tl-[20px] md:grid-cols-3 lg:grid-cols-4 ">
            {data.map((item, idx) => (
                <Card
                    key={idx}
                    href={item.ref}
                    title={item.title}
                    src={item.img}
                    lists={item.lists}
                />
            ))}
        </div>
        // {/* </div> */}
    );
};

const Card = ({
    href,
    title,
    src,
    lists
}) => {
    const pathname = usePathname();

    return (
        <a
            href={href}
            // target="_blank"
            className="relative flex flex-col justify-end px-2 overflow-hidden transition-colors shadow-lg h-60 group md:h-96 md:px-2 md:last:col-span-3 lg:last:col-span-1"
        >
            <div className={` ${pathname === "/products" ? "bg-white text-primary" : "bg-primary text-white"} flex justify-center items-center gap-3 bg-primary p-3.5 z-10 rounded-t-lg`}>
                <h2 className="relative font-libreCaslonDisplay text-[18px] md:text-[28px] leading-tight transition-transform duration-500 group-hover:-translate-y-2">
                    {title}
                </h2>

                {/* <ul className="space-y-1.5 font-semibold tracking-wide text-white list-disc font-figtree">
                    {lists.map((list, idx) => (
                        <li className="text-sm sm:text-base" key={idx}>{list}</li>
                    ))}
                </ul> */}
            </div>

            <div className="bg-primary p-1.5 rounded-full absolute z-10 right-3 top-4">
                <LuArrowDownRightFromCircle className="text-xl text-white transition-colors -rotate-90 group-hover:text-secondary group-hover:scale-110" />
            </div>

            <div
                className="absolute top-0 bottom-0 left-0 right-0 transition-all group-hover:brightness-50 md:brightness-[0.80] group-hover:scale-110"
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* <Corners /> */}
        </a>
    );
};
