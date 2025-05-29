"use client"
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import ScrollToSection from '../ScrollToSection ';

const CertificateCarousel = () => {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px"
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <>
            <ScrollToSection offset={-50} duration={600} />
            <section id='certificate' className="px-6 py-10 mt-20 space-y-6 text-center md:px-14 xl:px-32">
                <h2 className="text-xl md:text-2xl lg:text-[40px] !leading-snug uppercase font-libreCaslonDisplay font-medium tracking-wider w-full">
                    Outstanding with unwavering focus and dedication
                </h2>
                <p className="text-base font-normal sm:text-lg font-figtree">
                    Take a look at our certification!
                </p>
                <div className=" py-4 md:p-5 bg-secondary rounded-tl-[20px] slider-container max-w-6xl mx-auto">
                    <Slider {...settings}>
                        <div className="relative w-full h-[460px]">
                            <Image alt="Certificate 1" src={"https://cdn.webibee.com/Rasim%20exports/certification_page/certificates/certificate%201.png"} fill className="object-contain" />
                        </div>
                        <div className="relative w-full h-[460px]">
                            <Image alt="Certificate 2" src={"https://cdn.webibee.com/Rasim%20exports/certification_page/certificates/certificate%202.png"} fill className="object-contain" />
                        </div>
                        <div className="relative w-full h-[460px]">
                            <Image alt="Certificate 3" src={"https://cdn.webibee.com/Rasim%20exports/certification_page/certificates/certificate%203.png"} fill className="object-contain" />
                        </div>
                        <div className="relative w-full h-[460px]">
                            <Image alt="Certificate 1" src={"https://cdn.webibee.com/Rasim%20exports/certification_page/certificates/certificate%201.png"} fill className="object-contain" />
                        </div>
                        <div className="relative w-full h-[460px]">
                            <Image alt="Certificate 2" src={"https://cdn.webibee.com/Rasim%20exports/certification_page/certificates/certificate%202.png"} fill className="object-contain" />
                        </div>
                        <div className="relative w-full h-[460px]">
                            <Image alt="Certificate 3" src={"https://cdn.webibee.com/Rasim%20exports/certification_page/certificates/certificate%203.png"} fill className="object-contain" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
}

export default CertificateCarousel;
