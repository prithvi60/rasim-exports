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
                        Mens Collection
                    </h4>
                    <SliderComponent data={mens} rtl={false} />
                </div>
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        Womens Collection
                    </h4>
                    <SliderComponent data={women} rtl={true} />
                </div>
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        Kids Collection
                    </h4>
                    <SliderComponent data={kids} rtl={false} />
                </div>
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        Infants Collection
                    </h4>
                    <SliderComponent data={infants} rtl={true} />
                </div>
            </section>
        </>
    );
};

export default ProductRange;

export const SliderComponent = ({ data, rtl, type }) => {
    const isFabric = type === "fabric";
    const settings = {
        rtl: rtl,
        lazyLoad: false,
        infinite: true,
        speed: 500,
        slidesToShow: isFabric ? 8 : 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        rows: isFabric ? 6 : 4,
        // dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    rows: isFabric ? 8 : 5
                },
            },
        ],
    };
    const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==";
    return (
        <div className="w-full h-full">
            <div className="slider-container">
                <Slider {...settings}>
                    {data.map((list, idx) => (
                        <div key={idx}>
                            <div className={`relative ${isFabric ? "h-[95px] sm:h-[218px] w-[85px] md:w-[150px] lg:w-[204px] lg:h-[245px] xl:h-[272px] xl:w-[238px]" : "h-[112px] sm:h-[256px] w-[100px] md:w-[176px] lg:w-[240px] lg:h-[288px] xl:h-[320px] xl:w-[280px] "}overflow-hidden customBorder group`}>
                                <Image
                                    alt="image"
                                    src={list.img}
                                    fill
                                    placeholder="blur"
                                    loading="lazy"
                                    blurDataURL={blurDataURL}
                                    className="object-cover object-center"
                                />
                                <div
                                    className={`bg-white absolute bottom-0 left-0 text-primary w-full p-3.5 z-10 rounded-t-lg translate-y-[100vh] md:translate-y-96 md:hidden group-hover:block group-hover:translate-y-0 transition-all duration-[2000] ease-in-out`}
                                >
                                    <h2 className="relative uppercase font-libreCaslonDisplay text-[8px] md:text-[28px] leading-tight">
                                        {list.category}
                                    </h2>
                                    <ul className="font-semibold tracking-wide text-primary font-figtree">
                                        <li className="text-[8px] sm:text-base">{list.material}</li>
                                        <li className="text-[8px] sm:text-base">{list.type}</li>
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
