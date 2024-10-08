import MakingProcess from '@/components/services/MakingProcess'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceVideo from '@/components/services/ServiceVideo'
import React from 'react'

const page = () => {
    return (
        <main>
            <ServiceHero />
            <MakingProcess />
            <ServiceVideo />
        </main>
    )
}

export default page
