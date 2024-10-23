import Link from "next/link";
import React from "react";

export const RevealCardMobile = ({ data, styles, type }) => {
    return (
        <section className="block w-full px-6 py-5 lg:hidden md:px-14 xl:px-32">
            <div className={`${styles}`}>
                {data.map((list, idx) => (
                    <Link
                        href={list.ref}
                        key={idx}
                        className={`relative flex flex-col justify-end px-2 overflow-hidden transition-colors shadow-lg group md:px-2 rounded-tl-2xl sm:last:col-span-2 lg:col-auto ${type === "founder" ? "h-96 w-full sm:w-96" : "h-80 w-full md:h-96"}`}
                    >
                        <div className="!bg-primary p-2.5 z-10 rounded-t-lg text-white">
                            <h2 className="relative font-libreCaslonDisplay text-[18px] md:text-[28px] leading-tight transition-transform duration-500 capitalize group-hover:-translate-y-2 ">
                                {list.title}
                            </h2>
                            <h3 className="relative font-libreCaslonDisplay text-base md:text-[18px] leading-tight capitalize">
                                {list.desc}
                            </h3>
                        </div>

                        <div
                            className={`absolute top-0 bottom-0 left-0 right-0 transition-all group-hover:scale-110 ${type === "certificate"
                                ? "bg-no-repeat bg-white bg-contain"
                                : "bg-transparent bg-cover"
                                }`}
                            style={{
                                backgroundImage: `url(${list.img})`,
                                // backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};
