"use client"
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const RevealCards = () => {
    return (
        <div className="grid grid-cols-1 gap-4 max-w-7xl sm:grid-cols-2 lg:grid-cols-3" >
            <Card
                title="Silk/Woolen"
                description="Wool is not just a fiber, it’s a lifestyle."
                imgSrc="https://ik.imagekit.io/webibee/Rasim-Exports/cards/card%201.jpg?updatedAt=1727336415020"
                ListRef="#"
            />
            <Card
                title="Denim Jeans"
                description="Denim is a love that never fades."
                imgSrc="https://ik.imagekit.io/webibee/Rasim-Exports/cards/card%202.jpg?updatedAt=1727336415200"
                ListRef="#"
            />
            <Card
                title="Cotton"
                description="Cotton is the fabric of our lives."
                imgSrc="https://ik.imagekit.io/webibee/Rasim-Exports/cards/card%203.jpg?updatedAt=1727336415271"
                ListRef="#"
            />
        </div >
    );
};

{/* <span className="block mb-4 text-xl font-medium text-center">
                Hover a card
            </span> */}

const Card = ({
    imgSrc,
    title,
    description,
    ListRef
}) => {
    return (
        <motion.div whileHover="hover" className="w-full h-[300px] relative group md:last:col-span-2 lg:last:col-span-1">
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
                    <span className="text-xs">MORE</span>
                    <FiArrowUpRight className="text-lg" />
                </div>
            </a>
        </motion.div>
    );
};

export default RevealCards;