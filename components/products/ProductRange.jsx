"use client";
import React from "react";
import Image from "next/image";
import ScrollToSection from "../ScrollToSection ";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

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
                    <SliderComponent data={men} rtl={false} />
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
                    <SliderComponent data={children} rtl={false} />
                </div>
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        Infant
                    </h4>
                    <SliderComponent data={infant} rtl={true} />
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
                        <div
                            key={idx}
                            className="relative h-[390px] sm:h-[320px] !w-[300px] md:!w-[220px] lg:!w-[300px] lg:h-[360px] xl:h-[400px] overflow-hidden customBorder"
                        >
                            <Image
                                alt="image"
                                src={list}
                                fill
                                className="object-cover object-bottom"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

const men = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0024.jpg?updatedAt=1729757184754",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0037.jpg?updatedAt=1729757187823",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0027.jpg?updatedAt=1729757184799",
];
const women = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0031.jpg?updatedAt=1729757185515",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0032.jpg?updatedAt=1729757185519",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0029.jpg?updatedAt=1729757185298",
];
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
