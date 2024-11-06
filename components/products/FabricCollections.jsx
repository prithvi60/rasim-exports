import { fabricCollections } from '@/libs/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollToSection from '../ScrollToSection '
import { SliderComponent } from './ProductRange'

const FabricCollections = () => {
    return (
        <>
            <ScrollToSection offset={-100} duration={600} />
            <section id='fabric' className='block w-full h-full px-6 py-10 space-y-5 md:px-14 xl:px-32'>
                <h2 className='text-2xl md:text-3xl lg:text-[48px] uppercase font-libreCaslonDisplay font-medium tracking-wider text-center w-full'>We Weave strong</h2>
                <h4 className='text-xl md:text-2xl lg:text-[36px] capitalize font-figtree font-medium tracking-wider text-center w-full text-black/80'>Fabric Collections</h4>
                {/* <div className='p-3.5  columns-1 md:columns-3 h-full '>
                    {fabricCollections.map((list, idx) => (
                        <Link
                            key={idx}
                            href={""}
                            className={`relative flex flex-col justify-end overflow-hidden shadow-lg group mb-3 break-inside-avoid customBorder`}
                        >

                            <div style={{ height: `${list.span}` }} className={`relative overflow-hidden w-full transition-all group-hover:brightness-50 md:brightness-[0.80] group-hover:scale-110 rounded-tl-2xl`}>
                                <Image alt='' src={list.src} fill className='object-cover object-center' />

                            </div>
                            <div className="absolute bottom-0 left-0 right-0 !bg-primary p-2.5 z-10 rounded-t-lg">
                                <h2 className="relative font-libreCaslonDisplay text-[14px] md:text-[18px] transition-transform duration-500 capitalize group-hover:-translate-y-2 text-white tracking-custom">
                                    {list.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div> */}
                 <div className="block space-y-8">
                <SliderComponent data={fabricCollections} rtl={false} type={"fabric"}/>
                </div>
            </section>
        </>
    )
}

export default FabricCollections
