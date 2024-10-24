"use client";
import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const SlideShow = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <section className="p-6 my-3 md:px-14 xl:px-32">
            <div className="slider-container">
                <Slider {...settings}>
                    {carouselImages.map((list, idx) => (
                        <div
                            key={idx}
                            className="relative w-full overflow-hidden h-[250px] md:h-[280px] xl:h-[320px] customBorder"
                        >
                            <Image
                                alt="slideshow image"
                                src={list}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default SlideShow;

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

const carouselImages = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/slide%201.jpg?updatedAt=1729760883662",
    "https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/initiativesBgHero.jpeg?updatedAt=1728273455068",
    "https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/slide%203.jpg?updatedAt=1729760884168",
    "https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/slide%204.jpg?updatedAt=1729760883826",
    "https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/initiative%20card%202.jpeg?updatedAt=1728273456828",
    "https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/initiative%201.jpeg?updatedAt=1728273457315",
];
