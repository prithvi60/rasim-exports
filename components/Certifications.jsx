import React from 'react'
import RevealCards from './RevealCards'
import { certification } from '@/libs/data'
import { RevealCardMobile } from './RevealCardMobile'

const Certifications = () => {
    return (
        <section className='flex flex-row items-center justify-center px-6 py-10 md:px-14 xl:px-32'>
            <RevealCards data={certification} type="certificate" slide={true} />
            <RevealCardMobile data={certification} styles={"w-full h-full slider-container block lg:hidden"} type="certificate" slide={true} />
        </section>
    )
}

export default Certifications
