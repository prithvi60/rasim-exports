"use client"
import Image from 'next/image';
import Link from 'next/link';
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
        <section className="relative w-full h-screen overflow-hidden slider-container">
            <div className="absolute bottom-5 right-0 flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap font-bold rounded-md py-2 px-3.5 z-10 w-full sm:w-3/5 lg:w-3/5">
                <div className='flex flex-col justify-between items-end gap-14 p-2 sm:w-[90%] backdrop-blur-[3px] w-max'>
                    <h1 className='font-medium tracking-wide uppercase text-2xl md:text-4xl lg:text-[48px] font-libreCaslonDisplay text-secondary leading-8 lg:!leading-[50px] text-end'>Lorem ipsum dolor sit amet consectetur. Suscipit</h1>
                    <div className='flex items-center justify-center gap-5 pb-3.5'>
                        <Link href={""} className='p-3 text-sm font-normal tracking-wide uppercase border-2 bg-secondary text-primary md:text-lg md:border-4 border-secondary rounded-tl-xl font-figtree '>Green initiatives</Link>
                        <Link href={""} className='p-3 text-sm font-normal tracking-wide uppercase border-2 text-primary md:text-lg md:border-4 bg-secondary border-secondary rounded-tl-xl font-figtree '>Women empowerment</Link>
                    </div>
                </div>
            </div>

            {blur === true && (
                <div className="absolute top-0 left-0 z-0 w-full h-screen">
                    <Image
                        priority
                        loading={"eager"}
                        alt="bg image"
                        src={"https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/initiativesBgHero.jpeg?updatedAt=1728273455068"}
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
                    src={"https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/initiativesBgHero.jpeg?updatedAt=1728273455068"}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    fill
                />
            </div>
        </section>
    )
}

export default Hero
