import React from 'react'
import { AboutRevealCards } from '../RevealCards'
import { founderData } from '@/libs/data'

const FounderRevealCard = () => {
    return (
        <section className='w-full px-6 py-10 space-y-5 sm:space-y-8 md:px-14 xl:px-32'>
            <AboutRevealCards data={founderData} />
            <h1 className='font-libreCaslonDisplay text-lg text-center font-medium sm:text-2xl lg:text-[40px] xl:text-[48px] uppercase tracking-wide'>Pillars of Rasim exports pvt limited</h1>
        </section>
    )
}

export default FounderRevealCard
