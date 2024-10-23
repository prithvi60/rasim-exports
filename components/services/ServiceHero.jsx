import Image from 'next/image'
import React from 'react'

const ServiceHero = () => {
    return (
        <section className="relative flex flex-col-reverse items-center w-full 2xl:h-[65vh] gap-8 px-6 pb-10 mt-28 overflow-hidden lg:justify-between lg:flex-row lg:px-14 xl:px-32">
            <div className='block w-full space-y-6 md:w-4/5'>
                <h3 className='text-3xl md:text-4xl lg:text-[48px] font-libreCaslonDisplay font-normal tracking-custom !leading-custom-head uppercase'>Expert Apparel Manufacturing Solutions</h3>
                <p className='text-base font-normal font-figtree md:text-lg'>Rasim Exports provides end-to-end garment production, specializing in men’s, women’s, and children’s wear. From concept development to final output, our expertise ensures seamless execution at every stage. Whether it’s custom designs or large-scale orders, we prioritize craftsmanship, timely delivery, and the specific needs of our clients to create standout apparel for global markets.</p>
            </div>
            <div className='relative w-full overflow-hidden h-[320px] lg:h-[500px] customBorder'>
                <Image priority loading='eager' alt='product image' src={"https://ik.imagekit.io/webibee/Rasim-Exports/service_page/serviceherobg.jpeg?updatedAt=1728093883463"} fill className='object-cover object-left md:object-center' />
            </div>

        </section>
    )
}

export default ServiceHero
