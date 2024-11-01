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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap font-bold rounded-md py-2 md:px-3.5 z-10">
                <div className='block w-full py-2 mx-auto space-y-5 text-center rounded-md px-16 sm:px-0  md:mr-6'>
                    <div className='md:-mt-14'>
                    <div className='relative mx-auto overflow-hidden h-32 w-72 md:h-80 md:w-[450px]'>
                            <video
                                muted
                                loop
                                autoPlay
                                playsInline
                                className="h-full w-full object-cover"
                                style={{ filter: "brightness(2)" }} 
                            >
                                <source
                                    src={"/rasimani.webm"}
                                    type="video/webm"
                                />
                            </video>
                        </div>
                        <p className='text-3xl font-medium tracking-wide text-white uppercase sm:text-4xl xl:text-5xl font-libreCaslonDisplay'>Exports pvt Ltd</p>
                    </div>
                    <p className='w-full mx-auto text-sm italic font-semibold text-white uppercase tracking-custom sm:w-full text-basefont-bold sm:text-xl font-figtree'>MANUFACTURERS AND EXPORTERS OF FASHION APPARELS</p>
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
                        "https://ik.imagekit.io/webibee/Rasim-Exports/bg-video.mp4?updatedAt=1730462512687"
                    }
                    type="video/mp4"
                />
            </video>
        </section>
    )
}

export default Hero
