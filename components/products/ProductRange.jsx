"use client";
import React from "react";
import Image from "next/image";
import ScrollToSection from "../ScrollToSection ";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { infants, kids, mens, women } from "@/libs/data";

const ProductRange = () => {
    return (
        <>
            <ScrollToSection offset={-120} duration={600} />
            <section
                id="types"
                className="px-6 py-10 space-y-8 text-white md:px-14 xl:px-32 bg-primary"
            >
                <h2 className="text-2xl md:text-3xl lg:text-[48px] uppercase font-libreCaslonDisplay tracking-custom font-medium text-center w-full ">
                    Our range of products
                </h2>
                {/* <GridCards data={variousProducts} /> */}
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        Men
                    </h4>
                    <SliderComponent data={mens} rtl={false} />
                </div>
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        women
                    </h4>
                    <SliderComponent data={women} rtl={true} />
                </div>
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        children
                    </h4>
                    <SliderComponent data={kids} rtl={false} />
                </div>
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        Infant
                    </h4>
                    <SliderComponent data={infants} rtl={true} />
                </div>
            </section>
        </>
    );
};

export default ProductRange;

const SliderComponent = ({ data, rtl }) => {
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
        <div className="w-full h-full">
            <div className="slider-container">
                <Slider {...settings}>
                    {data.map((list, idx) => (
                        <div key={idx}>
                            <div className="relative h-[390px] sm:h-[320px] !w-[300px] md:!w-[220px] lg:!w-[300px] lg:h-[360px] xl:h-[400px] xl:!w-[350px] overflow-hidden customBorder group">
                                <Image
                                    alt="image"
                                    src={list.img}
                                    fill
                                    className="object-cover object-bottom"
                                />
                                <div
                                    className={`bg-white absolute bottom-0 left-0 text-primary w-full p-3.5 z-10 rounded-t-lg translate-y-96 group-hover:translate-y-0 transition-all duration-[2000] ease-in-out`}
                                >
                                    <h2 className="relative uppercase font-libreCaslonDisplay text-[18px] md:text-[28px] leading-tight">
                                        {list.category}
                                    </h2>
                                    <ul className="font-semibold tracking-wide text-primary font-figtree">
                                        <li className="text-sm sm:text-base">{list.material}</li>
                                        <li className="text-sm sm:text-base">{list.type}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};


const children = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0079.jpg?updatedAt=1729757199899",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0005.jpg?updatedAt=1729757176359",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0060.jpg?updatedAt=1729757194554",
];
const infant = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0040.jpg?updatedAt=1729757188205",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0021.jpg?updatedAt=1729757181557",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0041.jpg?updatedAt=1729757188660",
];

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 rounded-full bg-secondary absolute top-1/2 cursor-pointer -right-5 md:-right-10 xl:-right-14 group"
            }
            onClick={onClick}
        >
            <FaArrowRight className="text-sm text-primary md:text-lg xl:text-xl group-hover:text-white" />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 rounded-full bg-secondary absolute top-1/2 cursor-pointer -left-5 md:-left-10 xl:-left-14 group"
            }
            onClick={onClick}
        >
            <FaArrowLeft className="text-sm text-primary md:text-lg xl:text-xl group-hover:text-white" />
        </div>
    );
}
