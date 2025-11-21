import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
    return (
        <section className="relative flex flex-col-reverse items-center w-full h-screen px-6 py-10 mt-5 overflow-hidden md:gap-8 md:mt-0 md:justify-between md:flex-row md:px-14 xl:px-32">
            <div className='block w-full space-y-6 lg:w-[90%] md:w-3/4'>
                <h3 className='text-[27px] md:text-[40px] lg:text-[48px] font-libreCaslonDisplay font-normal !leading-snug uppercase xl:mt-0 tracking-custom'>Delivering quality clothing, crafted with precision for global markets.</h3>
                {/* <p className='text-base font-normal font-figtree md:text-lg'>Lorem ipsum dolor sit amet consectetur. Elit libero nec lectus in. Viverra aliquet lectus cursus alitate sed sed mauris leo eget et non id donec. Enim id massa</p> */}
            </div>
            <div className='relative w-full h-[420px]'>
                <div className='absolute top-5 sm:top-4 lg:top-[20px] right-40 sm:right-44 lg:right-56 xl:right-64 w-[150px] lg:w-[210px] overflow-hidden h-[120px] sm:h-[150px] lg:h-[180px] customBorder'>
                    <Image priority loading='eager' alt='product image' src={"https://cdn.shopifyapp.shop/Rasim%20exports/gallery_page/gallery3.jpg"} fill className='object-cover object-center' />
                </div>
                <div className='absolute top-36 sm:top-48 lg:top-[220px] right-40 sm:right-44 lg:right-56 xl:right-64 w-[150px] lg:w-[210px] h-[150px] sm:h-[190px] lg:h-[230px] overflow-hidden customBorder'>
                    <Image priority loading='eager' alt='product image' src={"https://cdn.shopifyapp.shop/Rasim%20exports/service_page/serviceherobg.jpeg"} fill className='object-cover object-right' />
                </div>
                <div className='absolute top-3 right-0 w-[150px] lg:w-[210px] overflow-hidden h-[150px] sm:h-[190px] lg:h-[230px] customBorder'>
                    <Image priority loading='eager' src={"https://cdn.shopifyapp.shop/Rasim%20exports/aboutUs_page/goods.jpg"} alt='product image' fill className='object-cover object-left' />
                </div>
                <div className='absolute top-[170px] sm:top-56 lg:top-[270px] right-0 w-[150px] lg:w-[210px] overflow-hidden h-[120px] sm:h-[150px] lg:h-[180px] customBorder'>
                    <Image priority loading='eager' alt='product image' src={"https://cdn.shopifyapp.shop/Rasim%20exports/aboutUs_page/cads.jpg"} fill className='object-cover object-center' />
                </div>
            </div>

        </section>
    )
}

export default AboutHero
