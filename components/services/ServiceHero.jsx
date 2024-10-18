import Image from 'next/image'
import React from 'react'

const ServiceHero = () => {
    return (
        <section className="relative flex flex-col-reverse items-center w-full h-screen gap-8 px-6 py-10 mt-5 overflow-hidden md:mt-0 mt- md:justify-between md:flex-row md:px-14 xl:px-32">
            <div className='block w-full space-y-6 md:w-4/5'>
                <h3 className='text-3xl md:text-4xl lg:text-[48px] font-libreCaslonDisplay font-normal tracking-wide leading-snug'>Lorem ipsum dolor sit amet consectetur. Suscipit</h3>
                <p className='text-base font-normal font-figtree md:text-lg'>Lorem ipsum dolor sit amet consectetur. Elit libero nec lectus in. Viverra aliquet lectus cursus alitate sed sed mauris leo eget et non id donec. Enim id massa ac a</p>
            </div>
            <div className='relative w-full overflow-hidden h-[380px] customBorder'>
                <Image priority loading='eager' alt='product image' src={"https://ik.imagekit.io/webibee/Rasim-Exports/service_page/serviceherobg.jpeg?updatedAt=1728093883463"} fill className='object-cover object-center' />
            </div>

        </section>
    )
}

export default ServiceHero
