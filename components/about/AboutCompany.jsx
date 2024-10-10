import Image from 'next/image'
import React from 'react'
import { ReactMarquee } from '../ReactMarquee'

const AboutCompany = () => {
    return (
        <section
            className='flex flex-col items-center justify-center w-full h-full gap-6 bg-secondary'
        >
            <div className='relative flex flex-col items-center justify-center gap-10 px-5 lg:gap-5 py-7 lg:px-16 lg:py-12 lg:flex-row lg:justify-center lg:items-end'>
                <div className='w-full h-[320px] lg:w-[340px] lg:h-[430px] xl:h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-lg'>
                    <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/aboutUs_page/about%201.jpeg?updatedAt=1728094155828"} alt="textile image" className='object-cover object-center transition-all ease-in-out hover:scale-110 duration-400' />
                </div>
                <div className='relative w-full px-6 rounded-tl-[20px] py-12 lg:w-3/5 bg-primary'>
                    <p className='w-full text-base font-medium tracking-wide text-justify sm:text-lg text-secondary font-figtree sm:indent-7'><span className='text-[48px] font-libreCaslonDisplay font-medium whitespace-nowrap'>Rasim Exports</span> Pvt Ltd specializes in delivering high-quality, durable apparel across men&apos;s, women&apos;s, and kids&apos;s categories. With advanced manufacturing capabilities and a focus on innovation, we ensure that every product meets the highest standards of craftsmanship and reliability. Our dedicated team, coupled with expert textile knowledge, ensures consistent excellence in every garment we produce</p>
                </div>
            </div>
            <ReactMarquee data={"Crafting Excellence with Precision and Expertise"} direction={"left"} />
        </section>
    )
}

export default AboutCompany