import Image from 'next/image'
import React from 'react'
import { ReactMarquee } from '../ReactMarquee'

const AboutCompany = () => {
    return (
        <section
            className='flex flex-col items-center justify-center w-full h-full gap-6 bg-primary'
        >
            <div className='relative flex flex-col items-center justify-center gap-10 px-5 lg:gap-5 py-7 lg:px-16 lg:py-12 lg:flex-row lg:justify-center lg:items-start'>
                <div className='w-full h-[320px] lg:w-[340px] lg:h-[430px] xl:h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-lg'>
                    <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/aboutUs_page/about%201.jpeg?updatedAt=1728094155828"} alt="textile image" className='object-cover object-center transition-all ease-in-out hover:scale-110 duration-400' />
                </div>
                <div className='relative w-full rounded-tl-[20px] lg:w-3/5 bg-primary'>
                    <p className='w-full text-base font-semibold text-justify text-white !leading-custom-line sm:text-lg font-figtree sm:indent-7'>Rasim Exports is founded in  context to quality and dedication, with each garment reflecting <span className='text-secondary font-figtree'>employees’ hard work and passion</span> through strong <span className='text-secondary font-figtree'>customer connections</span>.
                        Since Rasim’s inception, the company has grown steadily through effective management and robust export strategies, ensuring high product standards.
                        Today, Rasim produces over <span className='text-secondary font-figtree'>400,000+</span> garments annually for the global brands, showcasing efficient management, consistent scaling and quality.</p>
                </div>
            </div>
            {/* <ReactMarquee data={"Crafting Excellence with Precision and Expertise"} direction={"left"} /> */}
        </section>
    )
}

export default AboutCompany