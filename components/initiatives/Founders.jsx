import { founders } from '@/libs/data'
import React from 'react'
import ScrollToSection from '../ScrollToSection '

const Founders = () => {
    return (
        <>
            <ScrollToSection offset={120} duration={600} />
            <section id='founder' className='px-6 py-10 my-6 md:px-14 xl:px-32'>
                <div className='grid grid-cols-1 gap-3 text-white md:gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                    {founders.map((list, idx) => (
                        <div
                            key={idx}
                            className={`relative flex flex-col justify-end px-2 overflow-hidden transition-colors shadow-lg group h-80 md:px-2 rounded-tl-2xl`}
                        >
                            <div className="!bg-primary space-y-2 p-2.5 z-10 rounded-t-lg">
                                <h2 className="relative font-libreCaslonDisplay text-[18px] md:text-[24px] leading-tight tracking-custom transition-transform duration-500 !capitalize group-hover:-translate-y-2">
                                    {list.position}
                                </h2>
                                <h3 className="relative font-figtree text-base md:text-[18px] leading-tight !capitalize">
                                    {list.name}
                                </h3>
                            </div>

                            <div
                                className="absolute top-0 bottom-0 left-0 right-0 transition-all brightness-50 group-hover:brightness-50 md:brightness-[0.80] group-hover:scale-110"
                                style={{
                                    backgroundImage: `url(${list.src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Founders
