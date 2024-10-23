import { ReactMarquee } from '@/components/ReactMarquee'
import MakingProcess from '@/components/services/MakingProcess'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceVideo from '@/components/services/ServiceVideo'
import React from 'react'

const page = () => {
    return (
        <main>
            <ServiceHero />
            <ServiceVideo />
            <ReactMarquee
                data={"We give all in right fROm the start till the end"}
                direction={"left"}
            />
            <MakingProcess />
        </main>
    )
}

export default page
