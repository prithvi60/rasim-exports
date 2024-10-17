import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ReactMarquee } from './ReactMarquee'

const OurVision_Mission = () => {
    return (
        <section
            className='flex flex-col items-center justify-center w-full h-full px-5 bg-primary py-7 lg:px-16 lg:py-12'
        >
            <div className='relative flex flex-col items-center justify-center gap-10 lg:gap-5 lg:flex-row lg:justify-center lg:items-end'>
                <div className='w-full h-[320px] lg:w-[340px] lg:h-[360px] xl:h-[290px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-lg'>
                    <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/sample%202.png?updatedAt=1727336458438"} alt="textile image" className='object-cover object-center transition-all ease-in-out hover:scale-110 duration-400' />
                </div>
                <div className='relative w-full lg:w-3/5'>
                    <p className='w-full px-6 pt-4 md:pt-8 text-base font-medium !leading-custom-line text-justify sm:text-lg text-white rounded-tl-[20px] font-figtree indent-7'>We stand for quality, sustainability, and a commitment to excellence in <span className='text-lg italic font-medium sm:text-xl font-libreCaslonDisplay text-secondary'>apparel manufacturing</span>. From the careful selection of materials to the expertise of our designers and textile developers, we ensure that every piece is crafted with meticulous <span className='text-lg italic font-medium sm:text-xl font-libreCaslonDisplay text-secondary'>attention to detail</span>. Our focus on strict quality control and durability reflects our dedication to delivering clothing that meets the highest standards.</p>
                    <Link href={"/about#vision"} className='absolute flex gap-2 right-2 1items-center -top-7 lg:-top-10 font-figtree group'>
                        <h4 className='text-white group-hover:underline group-hover:underline-offset-4 decoration-secondary'>More about us</h4>
                        <span className='w-5 h-5 rounded-full shadow-lg bg-secondary'></span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OurVision_Mission
