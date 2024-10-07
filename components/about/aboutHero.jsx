import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
    return (
        <section className="relative flex flex-col-reverse items-center w-full h-screen gap-8 px-6 py-10 mt-5 overflow-hidden md:mt-0 mt- md:justify-between md:flex-row md:px-14 xl:px-32">
            <div className='block w-full space-y-6 lg:w-[90%] md:w-3/4'>
                <h3 className='text-3xl md:text-4xl lg:text-[48px] font-libreCaslonDisplay font-normal tracking-wide leading-snug'>Lorem ipsum dolor sit amet consectetur. Suscipit</h3>
                <p className='text-base font-normal font-figtree md:text-lg'>Lorem ipsum dolor sit amet consectetur. Elit libero nec lectus in. Viverra aliquet lectus cursus alitate sed sed mauris leo eget et non id donec. Enim id massa</p>
            </div>
            <div className='relative w-full h-[420px]'>
                <div className='absolute top-6 sm:top-16 right-40 sm:right-44 lg:right-56 xl:right-64 w-[160px] sm:w-[180px] h-[250px] sm:h-[280px] lg:w-[210px] overflow-hidden lg:h-[340px] rounded-tl-[20px]'>
                    <Image priority loading='eager' alt='product image' src={"https://ik.imagekit.io/webibee/Rasim-Exports/aboutUs_page/abouthero1.jpeg?updatedAt=1728094156826"} fill className='object-cover object-center' />
                </div>
                <div className='absolute top-3 right-0 w-[150px] lg:w-[210px] overflow-hidden h-[150px] sm:h-[190px] lg:h-[230px] rounded-tl-[20px]'>
                    <Image priority loading='eager' alt='product image' src={"https://ik.imagekit.io/webibee/Rasim-Exports/aboutUs_page/abouthero2.jpeg?updatedAt=1728094155706"} fill className='object-cover object-center' />
                </div>
                <div className='absolute top-[170px] sm:top-56 lg:top-[270px] right-0 w-[150px] lg:w-[210px] overflow-hidden h-[120px] sm:h-[150px] lg:h-[180px] rounded-tl-[20px]'>
                    <Image priority loading='eager' alt='product image' src={"https://ik.imagekit.io/webibee/Rasim-Exports/aboutUs_page/abouthero3.jpeg?updatedAt=1728094156720"} fill className='object-cover object-center' />
                </div>
            </div>

        </section>
    )
}

export default AboutHero
