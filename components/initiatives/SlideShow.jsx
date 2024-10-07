"use client"
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";

const SlideShow = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <section className='px-6 py-10 my-6 md:px-14 xl:px-32'>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='relative w-full overflow-hidden h-[250px] md:h-[280px] xl:h-[320px] rounded-tl-[20px]'>
                        <Image alt='slideshow image' src={"https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/initiative%20card%201.png?updatedAt=1728273440803"} fill className='object-cover object-center' />
                    </div>
                    <div className='relative w-full overflow-hidden h-[250px] md:h-[280px] xl:h-[320px] rounded-tl-[20px]'>
                        <Image alt='slideshow image' src={"https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/initiative%20card%202.jpeg?updatedAt=1728273456828"} fill className='object-cover object-center' />
                    </div>
                    <div className='relative w-full overflow-hidden h-[250px] md:h-[280px] xl:h-[320px] rounded-tl-[20px]'>
                        <Image alt='slideshow image' src={"https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/initiative%20card%203.png?updatedAt=1728273441088"} fill className='object-cover object-center' />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default SlideShow
