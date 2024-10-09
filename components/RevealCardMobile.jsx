import Link from "next/link";
import React from "react";

export const RevealCardMobile = ({ data, styles }) => {
    return (
        <section className="block px-6 py-10 my-6 lg:hidden md:px-14 xl:px-32">
            <div className={`grid  gap-3 md:gap-5 ${styles}`}>
                {data.map((list, idx) => (
                    <Link
                        href={list.ref}
                        key={idx}
                        className={`relative flex flex-col justify-end h-56 px-2 overflow-hidden transition-colors shadow-lg group md:h-80 md:px-2 rounded-tl-2xl sm:last:col-span-2 lg:col-auto`}
                    >
                        <div className="!bg-primary p-2.5 z-10 rounded-t-lg">
                            <h2 className="relative font-libreCaslonDisplay text-[18px] md:text-[28px] leading-tight transition-transform duration-500 capitalize group-hover:-translate-y-2 text-secondary">
                                {list.title}
                            </h2>
                            <h3 className="relative font-libreCaslonDisplay text-base md:text-[18px] leading-tight capitalize text-secondary">
                                {list.desc}
                            </h3>
                        </div>

                        <div
                            className="absolute top-0 bottom-0 left-0 right-0 transition-all group-hover:scale-110"
                            style={{
                                backgroundImage: `url(${list.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};
