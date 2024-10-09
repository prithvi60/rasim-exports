import React from 'react'
import { AboutRevealCards } from '../RevealCards'
import { founderData } from '@/libs/data'
import { RevealCardMobile } from '../RevealCardMobile'
import { ReactMarquee } from '../ReactMarquee'

const FounderRevealCard = () => {
    return (
        <section className='w-full h-auto py-2.5 sm:py-5'>
            <div className='w-full space-y-5 sm:space-y-8 px-6 py-2.5 sm:py-5 md:px-14 xl:px-32'>
                <AboutRevealCards data={founderData} />
                <RevealCardMobile data={founderData} styles={"grid-cols-1 sm:grid-cols-2"} />
            </div>
            <ReactMarquee data={"Pillars of Rasim exports pvt limited"} direction={"right"} />
        </section>
    )
}

export default FounderRevealCard
