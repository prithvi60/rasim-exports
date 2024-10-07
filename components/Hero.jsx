"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const Hero = () => {
    const [blur, setBlur] = useState(true);
    const loadingImage = useRef();

    useEffect(() => {
        if (loadingImage.current.complete) {
            setBlur(false);
        }

        loadingImage.current.addEventListener("load", () => {
            setBlur(false);
        });
    }, []);
    return (
        <section className="relative w-full h-screen overflow-hidden slider-container">
            {/* mt-[45px] md:mt-[52px] xl:mt-[75px] */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max  flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap font-bold rounded-md py-2 px-3.5 z-10">
                <div className='block w-full py-2 mx-auto space-y-5 text-center rounded-md'>
                    <h1 style={{ backgroundImage: "url('https://ik.imagekit.io/webibee/Rasim-Exports/fabric.jpg?updatedAt=1727343133229')" }} className='font-bold tracking-widest text-transparent uppercase bg-no-repeat bg-cover select-none text-7xl sm:text-[160px] font-playFair bg-clip-text'>Rasim</h1>
                    <p className='text-base font-bold tracking-wide uppercase sm:text-xl font-libreCaslonDisplay text-secondary'>Rasim Exports pvt limited</p>
                    <p className='w-3/5 mx-auto text-sm tracking-wide text-white uppercase sm:w-full text-basefont-bold sm:text-xl font-libreCaslonDisplay'>Quality you can Feel, sustainability you can trust</p>
                </div>
            </div>

            {blur === true && (
                <div className="absolute top-0 left-0 z-0 w-full h-screen">
                    <Image
                        priority
                        loading={"eager"}
                        alt="bg image"
                        src={"https://ik.imagekit.io/webibee/Rasim-Exports/sample-2.png?updatedAt=1728292923188"}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        fill
                        className="brightness-[0.45]"
                    />
                </div>
            )}
            <video
                muted
                loop
                autoPlay
                playsInline
                ref={loadingImage}
                className={`h-screen w-full object-cover object-center translate-y-0 transition-all duration-700 ease-linear brightness-[0.45] -z-10`}
            >
                <source
                    src={
                        "https://ik.imagekit.io/webibee/Rasim-Exports/bg-video.mp4?updatedAt=1728292775504"
                    }
                    type="video/mp4"
                />
            </video>
        </section>
    )
}

export default Hero
