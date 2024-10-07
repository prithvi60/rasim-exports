"use client"
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const RevealCards = ({ data }) => {
    return (
        <div className="grid grid-cols-1 gap-4 max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
            {data.map((list, idx) => (
                <Card
                    key={idx}
                    title={list.title}
                    description={list.desc}
                    imgSrc={list.img}
                    ListRef={list.ref}
                    link={list.link}
                />
            ))}
        </div >
    );
};

export const AboutRevealCards = ({ data }) => {
    return (
        <div className="grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2">
            {data.map((list, idx) => (
                <AboutCard
                    key={idx}
                    title={list.title}
                    description={list.desc}
                    imgSrc={list.img}
                    ListRef={list.ref}
                    link={list.link}
                />
            ))}
        </div >
    );
};

const AboutCard = ({
    imgSrc,
    title,
    description,
    ListRef,
    link
}) => {
    return (
        <motion.div whileHover="hover" className="w-full h-[300px] relative group shadow-lg">
            <div className="flex flex-col justify-center p-6 bg-primary h-1/2 rounded-tl-[20px]">
                <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm font-light text-slate-300">{description}</p>
            </div>
            <motion.div
                initial={{
                    top: "0%",
                    right: "0%",
                }}
                variants={{
                    hover: {
                        top: "50%",
                        right: "50%",
                    },
                }}
                className="absolute inset-0 z-10 bg-slate-200 rounded-tl-[20px] group-hover:!rounded-none object-center lg:object-top"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    // backgroundPosition: "center",
                }}
            />
            <a
                href={ListRef}
                rel="nofollow"
                className="absolute bottom-0 right-0 z-0 grid w-1/2 text-black transition-colors bg-secondary h-1/2 place-content-center hover:text-primary"
            >
                <div className="flex items-center">
                    <span className="text-xs sm:text-base">{link}</span>
                    <FiArrowUpRight className="text-lg" />
                </div>
            </a>
        </motion.div>
    );
};

const Card = ({
    imgSrc,
    title,
    description,
    ListRef,
    link
}) => {
    return (
        <motion.div whileHover="hover" className="w-full h-[300px] relative group md:last:col-span-2 lg:last:col-span-1 shadow-lg">
            <div className="flex flex-col justify-center p-6 bg-primary h-1/2 rounded-tl-[20px]">
                <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm font-light text-slate-300">{description}</p>
            </div>
            <motion.div
                initial={{
                    top: "0%",
                    right: "0%",
                }}
                variants={{
                    hover: {
                        top: "50%",
                        right: "50%",
                    },
                }}
                className="absolute inset-0 z-10 bg-slate-200 rounded-tl-[20px] group-hover:!rounded-none"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <a
                href={ListRef}
                rel="nofollow"
                className="absolute bottom-0 right-0 z-0 grid w-1/2 text-black transition-colors bg-secondary h-1/2 place-content-center hover:text-primary"
            >
                <div className="flex items-center">
                    <span className="text-xs sm:text-base">{link}</span>
                    <FiArrowUpRight className="text-lg" />
                </div>
            </a>
        </motion.div>
    );
};

export default RevealCards;