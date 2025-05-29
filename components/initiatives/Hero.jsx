"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const Hero = () => {
    const [blur, setBlur] = useState(true);
    const loadingImage = useRef();

    useEffect(() => {
        if (loadingImage.current && loadingImage.current.complete) {
            setBlur(false);
        }

        loadingImage.current.addEventListener("load", () => {
            setBlur(false);
        });
    }, []);
    return (
        <section className="relative w-full h-screen 2xl:h-[65vh] overflow-hidden slider-container">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap font-bold rounded-md py-2 px-3.5 z-10 w-full lg:w-3/5">
                <div className='flex flex-col w-full gap-2 p-3 md:gap-5 xl:w-4/5'>
                    <h1 className='font-bold uppercase text-4xl sm:text-[64px] md:text-[74px] lg:text-[68px] xl:text-[74px] font-libreCaslonDisplay text-white w-full text-center leading-8 lg:!leading-[30px] tracking-custom'>RASIM EXPORTS</h1>
                    <h4 className='mr-4 text-base font-bold sm:mr-8 md:mr-16 lg:mr-4 xl:mr-10 tracking-custom text-secondary md:text-lg xl:text-xl text-end font-libreCaslonDisplay'>PVT LTD</h4>
                    <div className='w-full h-2 mx-auto xl:w-[90%] bg-secondary'>
                    </div>
                    <p className='text-base italic font-semibold md:text-xl font-figtree text-white !leading-[30px] text-center tracking-custom'>MANUFACTURERS AND EXPORTERS OF FASHION APPARELS</p>
                    {/* <div className='flex flex-col sm:flex-row items-center justify-center gap-5 pb-3.5'>
                        <Link href={""} className='p-3 text-sm font-medium tracking-wide uppercase transition-colors ease-linear border-2 text-primary md:text-lg md:border-4 bg-secondary hover:bg-opacity-60 duration-400 hover:text-white border-secondary rounded-tl-xl font-figtree '>Green initiatives</Link>
                        <Link href={""} className='p-3 text-sm font-medium tracking-wide uppercase transition-colors ease-linear border-2 text-primary md:text-lg md:border-4 bg-secondary hover:bg-opacity-60 duration-400 hover:text-white border-secondary rounded-tl-xl font-figtree '>Women empowerment</Link>
                    </div> */}
                </div>
            </div>

            {blur === true && (
                <div className="absolute top-0 left-0 z-0 w-full h-screen">
                    <Image
                        priority
                        loading={"eager"}
                        alt="bg image"
                        src={"https://cdn.webibee.com/Rasim%20exports/Initiatives_Page/initiativesBgHero.jpeg"}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        fill
                        className="blur-md"
                    />
                </div>
            )}
            <div className="absolute top-0 left-0 z-0 w-full h-screen">
                <Image
                    alt="Contact bg image"
                    ref={loadingImage}
                    src={"https://cdn.webibee.com/Rasim%20exports/Initiatives_Page/initiativesBgHero.jpeg"}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    fill
                    className='brightness-[0.65]'
                />
            </div>
        </section>
    )
}

export default Hero
