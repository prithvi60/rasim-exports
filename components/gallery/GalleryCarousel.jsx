"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { carouselImg } from "@/libs/data";

const GalleryCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <section className="w-full h-full px-6 py-10 mt-14 md:px-14 xl:px-20 slider-container">
            <Slider {...settings}>
                {carouselImg.map((item, idx) => (
                    <div
                        className="w-full h-[30vh] sm:h-[60vh] lg:h-[75vh] xl:h-[85vh] overflow-hidden relative cursor-pointer shadow-lg"
                        key={idx}
                    >
                        <Image
                            fill
                            src={item.img}
                            alt="textile image"
                            className={`${item.style} object-cover rounded-tl-[20px]`}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default GalleryCarousel;

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
