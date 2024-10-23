import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ReactMarquee } from './ReactMarquee'

const OurVision_Mission = () => {
    return (
        <section
            className='flex flex-col items-center justify-center w-full h-full px-5 text-white bg-primary py-7 lg:px-16 lg:py-12'
        >
            <div className="relative flex flex-col items-center justify-center gap-14 md:gap-10 lg:gap-5 lg:flex-row lg:justify-center lg:items-end">
                <div className="w-full h-[320px]  lg:w-[340px] lg:h-[430px] xl:h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-xl customBorder">
                    <Image
                        fill
                        src={
                            "https://ik.imagekit.io/webibee/Rasim-Exports/founders/founder%201.jpeg?updatedAt=1728273260885"
                        }
                        alt="textile image"
                        className="object-cover object-center transition-all ease-in-out hover:scale-110 duration-400"
                    />
                </div>
                <div className="relative w-full px-6 space-y-1 lg:w-3/5">
                    <h4 className="text-lg ml-auto md:text-xl text-center md:text-end w-full md:w-4/5 xl:text-[30px] tracking-custom !leading-[34px] font-normal font-libreCaslonDisplay uppercase">
                        Global Brands Trust Rasim for Unmatched Quality and Scale
                    </h4>
                    <p className="w-full pb-4 md:pb-0 md:pt-4 lg:pt-6 text-sm font-medium !leading-custom-line text-justify sm:text-base rounded-tl-[20px] font-figtree indent-7">
                        Rasim consistently delivers over 400,000 garments annually, meeting the high standards of renowned global brands. Our efficient management ensures seamless production, while a focus on quality and scalability drives continuous growth and customer satisfaction. Through years of experience, we have built a reputation for reliability and excellence in every piece we create.
                    </p>
                    <Link
                        href={"/about#vision"}
                        className="absolute flex gap-2 right-2 1items-center -top-10 lg:-top-16 font-figtree group scroll-smooth"
                    >
                        <h4 className="group-hover:underline group-hover:underline-offset-8 decoration-secondary">
                            More about us
                        </h4>
                        <span className="w-5 h-5 rounded-full shadow-lg bg-secondary"></span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OurVision_Mission
