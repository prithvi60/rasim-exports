import Image from 'next/image'
import React from 'react'
import { ReactMarquee } from '../ReactMarquee'

const AboutCompany = () => {
    return (
        <section
            className="flex flex-col items-center justify-center w-full h-full px-5 text-white py-7 lg:px-16 lg:py-12 bg-primary"
        >
            <div className="relative flex flex-col items-start justify-center gap-14 md:gap-10 lg:gap-5 lg:flex-row lg:justify-center">
                <div className="w-full h-[320px]  lg:w-[340px] lg:h-[430px] xl:h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-xl customBorder">
                    <Image
                        fill
                        src={
                            "https://ik.imagekit.io/webibee/Rasim-Exports/aboutUs_page/about%201.jpeg?updatedAt=1728094155828"
                        }
                        alt="textile image"
                        className="object-cover object-center transition-all ease-in-out hover:scale-110 duration-400"
                    />
                </div>
                <div className="relative w-full px-6 space-y-3 xl:w-1/2">
                    <h4 className="text-xl xl:text-[30px] tracking-widest !leading-[34px] font-normal font-libreCaslonDisplay uppercase">
                        Apparel that Defines Quality and Innovation
                    </h4>
                    <p className="pb-4 md:pb-0 md:pt-4 lg:pt-6 text-base font-medium !leading-custom-line text-justify sm:text-xl rounded-tl-[20px] font-figtree">
                        Rasim Exports Pvt Ltd creates versatile apparel for men, women, and children, blending innovation with exceptional quality. Using advanced manufacturing processes, we ensure every garment is crafted to meet rigorous standards. Our experienced team brings expertise and precision to every step, delivering reliable, high-performance products trusted by global brands.
                    </p>
                </div>
            </div>
            {/* <div className="relative flex flex-col items-center justify-center gap-14 md:gap-10 lg:gap-5 lg:flex-row lg:justify-center lg:items-end">
                <div className="w-full h-[320px]  lg:w-[340px] lg:h-[430px] xl:h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-xl customBorder">
                    <Image
                        fill
                        src={"https://ik.imagekit.io/webibee/Rasim-Exports/aboutUs_page/about%201.jpeg?updatedAt=1728094155828"}
                        alt="textile image"
                        className="object-cover object-center transition-all ease-in-out hover:scale-110 duration-400"
                    />
                </div>
                <div className="relative w-full px-6 space-y-1 lg:w-3/5">
                    <h4 className="text-lg ml-auto md:text-xl text-center md:text-end w-full md:w-3/5 xl:text-[30px] tracking-custom !leading-[34px] font-normal font-libreCaslonDisplay uppercase">
                        Apparel that Defines Quality and Innovation
                    </h4>
                    <p className="w-full pb-4 md:pb-0 md:pt-4 lg:pt-6 text-sm font-medium !leading-custom-line text-justify sm:text-base rounded-tl-[20px] font-figtree indent-7">
                        Rasim Exports Pvt Ltd creates versatile apparel for men, women, and children, blending innovation with exceptional quality. Using advanced manufacturing processes, we ensure every garment is crafted to meet rigorous standards. Our experienced team brings expertise and precision to every step, delivering reliable, high-performance products trusted by global brands.
                    </p>
                </div>
            </div> */}

        </section>
    )
}

export default AboutCompany