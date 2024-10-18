"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const ProductHero = () => {
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap font-bold rounded-md py-2 px-3.5 z-10 w-full sm:w-3/5 lg:w-3/5">
                <div className='block w-full p-2 space-y-5 text-center'>
                    <h1 className='font-medium   uppercase text-2xl md:text-4xl lg:text-[48px] font-libreCaslonDisplay text-white leading-8 lg:!leading-[50px] tracking-custom'>Discover Quality, Style, and Innovation in Every Piece</h1>
                    <div className='flex items-center justify-center gap-5 pb-3.5'>
                        <Link target='_blank' href={"/Rasim brochures.pdf"} download className='p-3 text-sm font-normal tracking-wide text-white uppercase transition-colors ease-linear bg-transparent border-2 md:text-lg md:border-4 hover:bg-secondary border-secondary duration-400 rounded-tl-xl font-figtree '>Get catalogue</Link>
                        <Link href={"/products#types"} className='p-3 text-sm font-normal tracking-wide text-white uppercase transition-colors ease-linear border-2 md:text-lg md:border-4 bg-secondary hover:bg-opacity-60 duration-400 hover:text-white border-secondary rounded-tl-xl font-figtree '>View products</Link>
                    </div>
                </div>
            </div>

            {blur === true && (
                <div className="absolute top-0 left-0 z-0 w-full h-screen">
                    <Image
                        priority
                        loading={"eager"}
                        alt="bg image"
                        src={"https://ik.imagekit.io/webibee/Rasim-Exports/product_page/productherobg.jpeg?updatedAt=1728093254352"}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        fill
                        className="brightness-[0.45]"
                    />
                </div>
            )}
            <div className="absolute top-0 left-0 z-0 w-full h-screen">
                <Image
                    alt="Contact bg image"
                    ref={loadingImage}
                    src={"https://ik.imagekit.io/webibee/Rasim-Exports/product_page/productherobg.jpeg?updatedAt=1728093254352"}
                    // style={{ objectFit: "cover", objectPosition: "center" }}
                    fill
                    className="object-cover object-center brightness-[0.50]"
                />
            </div>
        </section>
    )
}

export default ProductHero
