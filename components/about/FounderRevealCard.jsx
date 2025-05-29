import React from 'react'
import { AboutRevealCards } from '../RevealCards'
import { founderData } from '@/libs/data'
import { RevealCardMobile } from '../RevealCardMobile'

const FounderRevealCard = () => {
    return (
        <section className='w-full h-auto px-5 py-7 lg:px-16 lg:py-12'>
            <div className='flex items-center justify-center w-full space-y-5 sm:space-y-8'>
                <AboutRevealCards data={founderData} />
                <RevealCardMobile data={founderData} styles={"flex flex-col md:flex-row gap-3 md:gap-5 justify-center items-center"} type={"founder"} />
            </div>
            {/* <ReactMarquee data={"Pillars of Rasim exports pvt limited"} direction={"right"} /> */}
        </section>
    )
}

export default FounderRevealCard
