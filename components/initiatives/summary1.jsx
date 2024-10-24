import Image from 'next/image'
import React from 'react'
import { ReactMarquee } from '../ReactMarquee'

const Summary1 = () => {
    return (

        <section
            className='flex flex-col items-center justify-center w-full h-full gap-6 px-5 text-white py-7 lg:px-16 lg:py-12 bg-primary'
        >
            <div className='relative flex flex-col items-center justify-center gap-10 lg:gap-5 lg:flex-row lg:justify-center md:items-start xl:items-end'>
                <div className='w-full h-[320px] lg:w-[340px] lg:h-[430px] xl:h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-lg'>
                    <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/Initiatives_Page/initiative%201.jpeg?updatedAt=1728273457315"} alt="textile image" className='object-cover object-center transition-all ease-in-out hover:scale-110 duration-400' />
                </div>
                <div className='relative w-full rounded-tl-[20px] lg:w-1/2 xl:w-3/5 bg-primary'>
                    <p className='w-full text-base font-medium tracking-wide text-justify sm:text-lg !leading-custom-line font-figtree'>At <span className='text-2xl md:text-4xl xl:text-[42px] text-secondary font-libreCaslonDisplay font-medium whitespace-nowrap'>Rasim Exports</span> Pvt Ltd, we believe that women empowerment is vital for sustainable growth and social progress. By offering equal opportunities in education, leadership, and career advancement, we are committed to helping women break barriers and contribute meaningfully to society. Empowerment for us goes beyond representation; it’s about creating an environment where women lead with confidence and innovation. Through mentorship programs, skill-building workshops, flexible work policies, and promoting financial independence, we nurture women’s talents and foster a culture of inclusion and diversity. Our efforts extend to community initiatives focusing on women’s education and well-being, as we believe empowered women transform their lives and those around them. We are proud to be part of a movement striving for a more equitable and prosperous world, where every woman can rise, lead, and succeed.</p>
                </div>
            </div>
            {/* <ReactMarquee data={"Crafting Excellence with Precision and Expertise"} direction={"left"} /> */}
        </section>
    )
}

export default Summary1