"use client"
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";

const CertificateCarousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
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
        <section className="px-6 py-10 mt-20 space-y-6 md:px-14 xl:px-32">
            <h2 className="text-xl md:text-2xl lg:text-[40px] !leading-snug uppercase font-libreCaslonDisplay font-medium tracking-wider w-full">
                Outstanding with unwavering focus and dedication
            </h2>
            <p className='text-base font-normal sm:text-lg font-figtree '>Take a look at our certification!</p>
            <div className="p-5 slider-container bg-secondary rounded-tl-[20px]">
                <Slider {...settings}>
                    <div className='relative w-full overflow-hidden h-[460px]'>
                        <Image alt='' src={"https://ik.imagekit.io/webibee/Rasim-Exports/certification_page/certificates/certificate%201.png?updatedAt=1728093529344"} fill className='object-contain object-center' />
                    </div>
                    <div className='relative w-full overflow-hidden h-[460px]'>
                        <Image alt='' src={"https://ik.imagekit.io/webibee/Rasim-Exports/certification_page/certificates/certificate%202.png?updatedAt=1728093529250"} fill className='object-contain object-center' />
                    </div>
                    <div className='relative w-full overflow-hidden h-[460px]'>
                        <Image alt='' src={"https://ik.imagekit.io/webibee/Rasim-Exports/certification_page/certificates/certificate%203.png?updatedAt=1728093529142"} fill className='object-contain object-center' />
                    </div>
                    <div className='relative w-full overflow-hidden h-[460px]'>
                        <Image alt='' src={"https://ik.imagekit.io/webibee/Rasim-Exports/certification_page/certificates/certificate%201.png?updatedAt=1728093529344"} fill className='object-contain object-center' />
                    </div>
                    <div className='relative w-full overflow-hidden h-[460px]'>
                        <Image alt='' src={"https://ik.imagekit.io/webibee/Rasim-Exports/certification_page/certificates/certificate%202.png?updatedAt=1728093529250"} fill className='object-contain object-center' />
                    </div>
                    <div className='relative w-full overflow-hidden h-[460px]'>
                        <Image alt='' src={"https://ik.imagekit.io/webibee/Rasim-Exports/certification_page/certificates/certificate%203.png?updatedAt=1728093529142"} fill className='object-contain object-center' />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default CertificateCarousel


// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "red" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//         />
//     );
// }
