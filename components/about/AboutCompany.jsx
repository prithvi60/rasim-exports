import Image from 'next/image'
import React from 'react'

const AboutCompany = () => {
    return (
        // <VelocityHero />
        <section
            className='flex flex-col items-center justify-center w-full h-full gap-6 px-6 py-10 md:px-14 xl:px-32 bg-secondary'
        >
            <div className='relative flex flex-col items-center justify-center gap-10 lg:gap-5 jus lg:flex-row lg:justify-center lg:items-end'>
                <div className='w-full h-[320px]  lg:w-[340px] lg:h-[430px] xl:h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-lg'>
                    <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/aboutUs_page/about%201.jpeg?updatedAt=1728094155828"} alt="textile image" className='object-cover object-center transition-all ease-in-out hover:scale-110 duration-400' />
                </div>
                <div className='relative w-full lg:w-3/5'>
                    <p className='w-full px-6 py-8 text-base font-medium tracking-wide text-justify sm:text-lg text-secondary bg-primary rounded-tl-[20px] font-figtree sm:indent-7'><span className='text-[48px] font-libreCaslonDisplay font-medium whitespace-nowrap'>Rasim Exports</span> Pvt Ltd specializes in delivering high-quality, durable apparel across men&apos;s, women&apos;s, and kids&apos;s categories. With advanced manufacturing capabilities and a focus on innovation, we ensure that every product meets the highest standards of craftsmanship and reliability. Our dedicated team, coupled with expert textile knowledge, ensures consistent excellence in every garment we produce</p>
                    {/* <Link href={"/about"} className='absolute flex gap-2 right-2 1items-center -top-7 lg:-top-10 font-figtree group'>
                        <h4 className='group-hover:underline group-hover:underline-offset-4 decoration-primary'>More about us</h4>
                        <span className='w-5 h-5 rounded-full shadow-lg bg-primary'></span>
                    </Link> */}
                </div>
            </div>
            <h1 className='font-libreCaslonDisplay text-lg text-center font-semibold sm:text-2xl lg:text-[40px] xl:text-[48px] uppercase tracking-wide !leading-snug'>Crafting Excellence with Precision and Expertise</h1>

        </section>
    )
}

export default AboutCompany