import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { VelocityHero } from './VelocitScroll'

const OurVision_Mission = () => {
    return (
        // <VelocityHero />
        <section
            className='flex flex-col items-center justify-center w-full h-full gap-6 px-6 py-10 md:px-14 xl:px-32 bg-secondary'
        >
            <div className='relative flex flex-col items-center justify-center gap-10 lg:gap-5 jus lg:flex-row lg:justify-center lg:items-end'>
                <div className='w-full h-[320px] lg:w-[340px] lg:h-[430px] xl:h-[290px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-lg'>
                    <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/sample%202.png?updatedAt=1727336458438"} alt="textile image" className='object-cover object-center transition-all ease-in-out hover:scale-110 duration-400' />
                </div>
                <div className='relative w-full lg:w-3/5'>
                    <p className='w-full px-6 py-8 text-base font-medium leading-7 tracking-wide text-justify sm:text-lg text-secondary bg-primary rounded-tl-[20px] font-figtree indent-7'>We stand for quality, sustainability, and a commitment to excellence in <span className='text-lg italic font-medium sm:text-xl font-libreCaslonDisplay'>apparel manufacturing</span>. From the careful selection of materials to the expertise of our designers and textile developers, we ensure that every piece is crafted with meticulous <span className='text-lg italic font-medium sm:text-xl font-libreCaslonDisplay'>attention to detail</span>. Our focus on strict quality control and durability reflects our dedication to delivering clothing that meets the highest standards.</p>
                    <Link href={"/about"} className='absolute flex gap-2 right-2 1items-center -top-7 lg:-top-10 font-figtree group'>
                        <h4 className='group-hover:underline group-hover:underline-offset-4 decoration-primary'>More about us</h4>
                        <span className='w-5 h-5 rounded-full shadow-lg bg-primary'></span>
                    </Link>
                </div>
            </div>
            <h1 className='font-libreCaslonDisplay text-lg text-center font-semibold sm:text-2xl lg:text-[40px] xl:text-[48px] uppercase tracking-wide'>Guided by deep commitment to ethical</h1>

        </section>
    )
}

export default OurVision_Mission