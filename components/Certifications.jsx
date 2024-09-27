import React from 'react'
import RevealCards from './RevealCards'
import { certification } from '@/libs/data'

const Certifications = () => {
    return (
        <section className='w-full px-6 py-10 md:px-14 xl:px-32'>
            <RevealCards data={certification} />
        </section>
    )
}

export default Certifications
