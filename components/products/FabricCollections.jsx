import { fabricCollections } from '@/libs/data'
import Link from 'next/link'
import React from 'react'

const FabricCollections = () => {
    return (
        <section className='block px-6 py-10 space-y-5 md:px-14 xl:px-32'>
            <h2 className='text-2xl md:text-3xl lg:text-[48px] uppercase font-libreCaslonDisplay font-medium tracking-wider text-center w-full'>We Weave strong</h2>
            <h4 className='text-xl md:text-2xl lg:text-[36px] capitalize font-libreCaslonDisplay font-medium tracking-wider text-center w-full text-[#6A6A6A]'>Fabric Collections</h4>
            <div className='p-3.5 bg-secondary columns-1 md:columns-2 xl:columns-3 '>
                {fabricCollections.map((list, idx) => (
                    <Link
                        key={idx}
                        href={""}
                        className={`relative flex flex-col justify-end h-56 px-2 overflow-hidden transition-colors shadow-lg group md:h-80 md:px-2 md:last:col-span-3 lg:last:col-span-1 rounded-tl-2xl ${list.span} break-inside-avoid`}
                    >
                        <div className="!bg-primary p-2.5 z-10 rounded-t-lg">
                            <h2 className="relative font-libreCaslonDisplay text-[18px] md:text-[28px] leading-tight transition-transform duration-500 capitalize group-hover:-translate-y-2 text-secondary">
                                {list.title}
                            </h2>
                        </div>

                        <div
                            className="absolute top-0 bottom-0 left-0 right-0 transition-all brightness-50 group-hover:brightness-50 md:brightness-[0.80] group-hover:scale-110"
                            style={{
                                backgroundImage: `url(${list.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default FabricCollections
