import Image from 'next/image'
import React from 'react'

const Carousel = () => {
    return (
        <section className='flex flex-col items-center justify-center w-full h-full gap-6 px-6 py-10 md:px-14 xl:px-32'>
            <div className='w-full h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-lg'>
                <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/slide%201.png?updatedAt=1727336458558"} alt="textile image" className='object-cover object-bottom transition-all ease-in-out hover:scale-110 duration-400' />
            </div>
            <div className='w-full h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-lg'>
                <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/slide%202.png?updatedAt=1727336458712"} alt="textile image" className='object-cover object-center transition-all ease-in-out hover:scale-110 duration-400' />
            </div>
        </section>
    )
}

export default Carousel
