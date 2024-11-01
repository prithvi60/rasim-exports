"use client";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";

const RevealCards = ({ data, type, slide, rtl = false }) => {
    const settings = {
        rtl: rtl,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            {!slide ? (
                <div className="hidden w-full grid-cols-1 gap-4 md:gap-12 lg:grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((list, idx) => (
                        <Card
                            key={idx}
                            title={list.title}
                            description={list.desc}
                            imgSrc={list.img}
                            ListRef={list.ref}
                            link={list.link}
                            type={type}
                        />
                    ))}
                </div>
            ) : (
                <div className="hidden w-full h-full max-w-7xl lg:block slider-container">
                    <Slider {...settings}>
                        {data.map((list, idx) => (
                            <Card
                                key={idx}
                                title={list.title}
                                description={list.desc}
                                imgSrc={list.img}
                                ListRef={list.ref}
                                link={list.link}
                                type={type}
                            />
                        ))}
                    </Slider>
                </div>
            )}
        </>
    );
};

// const RevealCardsSlider = ({data, type}) => {
//     return (
//         <div className="hidden w-full grid-cols-1 gap-4 md:gap-12 lg:grid max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
//             {data.map((list, idx) => (
//                 <Card
//                     key={idx}
//                     title={list.title}
//                     description={list.desc}
//                     imgSrc={list.img}
//                     ListRef={list.ref}
//                     link={list.link}
//                     type={type}
//                 />
//             ))}
//         </div>
//     );
// }

export const AboutRevealCards = ({ data }) => {
    return (
        <div className="items-center justify-center hidden w-full max-w-6xl gap-4 lg:flex">
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
        </div>
    );
};

const AboutCard = ({ imgSrc, title, description, ListRef, link }) => {
    return (
        <motion.div
            whileHover="hover"
            className="w-[400px] h-[400px] relative group shadow-lg "
        >
            <div className="flex flex-col justify-center p-6 bg-primary h-1/2 customBorder">
                <h3 className="mb-2 text-xl font-medium text-white font-libreCaslonDisplay tracking-custom">
                    {title}
                </h3>
                <p className="text-sm font-light font-figtree text-slate-300">
                    {description}
                </p>
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
                className="absolute inset-0 z-10 bg-slate-200 group-hover:!rounded-none object-center lg:object-top customBorder"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    // backgroundPosition: "center",
                }}
            />
            <a
                href={ListRef}
                rel="nofollow"
                className="absolute bottom-0 right-0 z-0 grid w-1/2 text-black transition-colors bg-secondary h-1/2 place-content-center hover:text-primary font-figtree"
            >
                <div className="flex items-center">
                    <span className="text-xs sm:text-base">{link}</span>
                    <FiArrowUpRight className="text-lg" />
                </div>
            </a>
        </motion.div>
    );
};

const Card = ({ imgSrc, title, description, ListRef, link, type }) => {
    return (
        <motion.div
            whileHover="hover"
            className="w-full h-[400px] relative group md:last:col-span-2 lg:last:col-span-1 shadow-lg "
        >
            <div className="flex flex-col justify-center p-6 bg-primary h-1/2 customBorder">
                <h3 className="mb-2 text-xl font-medium text-white font-libreCaslonDisplay tracking-custom">
                    {title}
                </h3>
                <p className="text-sm font-light font-figtree text-slate-300">
                    {description}
                </p>
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
                className={`absolute inset-0 z-10 rounded-tl-[20px] group-hover:!rounded-none customBorder  ${type === "certificate"
                    ? "bg-no-repeat bg-white bg-contain"
                    : "bg-transparent bg-cover"
                    }`}
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    // backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            />
            <a
                href={ListRef}
                rel="nofollow"
                className="absolute bottom-0 right-0 z-0 grid w-1/2 text-black transition-colors font-figtree bg-secondary h-1/2 place-content-center hover:text-primary"
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

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 rounded-full bg-primary absolute top-1/2 cursor-pointer -right-5 md:-right-10 xl:-right-14 group"
            }
            onClick={onClick}
        >
            <FaArrowRight className="text-sm text-white md:text-lg xl:text-xl group-hover:text-secondary" />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 rounded-full bg-primary absolute top-1/2 cursor-pointer -left-5 md:-left-10 xl:-left-14 group"
            }
            onClick={onClick}
        >
            <FaArrowLeft className="text-sm text-white md:text-lg xl:text-xl group-hover:text-secondary" />
        </div>
    );
}
