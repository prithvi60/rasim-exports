"use client"
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Carousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <section className='w-full h-full px-6 py-10 md:px-14 xl:px-32 slider-container'>
            <Slider {...settings}>
                <div className='w-full h-[340px] overflow-hidden relative cursor-pointer shadow-lg'>
                    <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/slide%201.png?updatedAt=1727336458558"} alt="textile image" className='object-cover object-bottom transition-all ease-in-out hover:scale-110 duration-400' />
                </div>
                <div className='w-full h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-lg'>
                    <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/slide%202.png?updatedAt=1727336458712"} alt="textile image" className='object-cover object-center transition-all ease-in-out hover:scale-110 duration-400' />
                </div>
            </Slider>
        </section>
    )
}

export default Carousel


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={"p-1.5 md:p-2 xl:p-3 rounded-full bg-primary absolute top-1/2 cursor-pointer -right-5 md:-right-10 xl:-right-14 group"}
            onClick={onClick}
        >
            <FaArrowRight className='text-sm text-white md:text-lg xl:text-xl group-hover:text-secondary' />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={"p-1.5 md:p-2 xl:p-3 rounded-full bg-primary absolute top-1/2 cursor-pointer -left-5 md:-left-10 xl:-left-14 group"}
            onClick={onClick}
        >
            <FaArrowLeft className='text-sm text-white md:text-lg xl:text-xl group-hover:text-secondary' />
        </div>
    );
}