
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { LuArrowDownRightFromCircle } from "react-icons/lu";

export const GridCards = ({ data }) => {
    return (
        // <div className="p-4 md:p-12">
        <div className="grid grid-cols-2 rounded-tl-[20px] md:grid-cols-3 lg:grid-cols-4 divide-secondary md:divide-x md:divide-y-0">
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
    return (
        <a
            href={href}
            // target="_blank"
            className="relative flex flex-col justify-end h-56 px-2 overflow-hidden transition-colors shadow-lg group md:h-80 md:px-2 md:last:col-span-3 lg:last:col-span-1"
        >
            <div className="flex justify-between items-center gap-3 !bg-primary p-2.5 z-10 rounded-t-lg">
                <h2 className="relative font-libreCaslonDisplay text-[18px] md:text-[28px] leading-tight transition-transform duration-500 group-hover:-translate-y-2 text-secondary">
                    {title}
                </h2>

                <ul className="space-y-1.5 font-semibold tracking-wide text-white list-disc font-figtree">
                    {lists.map((list, idx) => (
                        <li className="text-sm sm:text-base" key={idx}>{list}</li>
                    ))}
                </ul>
            </div>

            <div className="bg-primary p-1.5 rounded-full absolute z-10 right-3 top-4">
                <LuArrowDownRightFromCircle className="text-xl text-white transition-colors -rotate-90 group-hover:text-secondary group-hover:scale-110" />
            </div>

            <div
                className="absolute top-0 bottom-0 left-0 right-0 transition-all brightness-50 group-hover:brightness-50 md:brightness-[0.80] group-hover:scale-110"
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

const Corners = () => (
    <>
        <span className="absolute left-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute left-[1px] top-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] right-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] right-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] left-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] left-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute right-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute right-[1px] top-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    </>
);

const TitleCard = () => {
    return (
        <a
            href="#"
            target="_blank"
            className="relative flex flex-col justify-between h-56 p-6 group bg-neutral-950 md:h-80 md:p-9"
        >
            <h2 className="text-4xl leading-tight uppercase">
                <span className="transition-colors duration-500 text-neutral-400 group-hover:text-emerald-300">
                    Join our
                </span>
                <br />
                Weekly Newsletter
            </h2>
            <div className="flex items-center gap-1.5 text-xs uppercase text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
                <FiBookOpen className="text-base" />
                <span>your.beehiiv.com</span>
            </div>

            <FiArrowUpRight className="absolute text-2xl transition-colors duration-500 right-3 top-4 text-neutral-400 group-hover:text-emerald-300" />
        </a>
    );
};