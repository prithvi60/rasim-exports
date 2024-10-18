import { CountUpStats3 } from '@/components/CounterUp'
import Founders from '@/components/initiatives/Founders'
import Hero from '@/components/initiatives/Hero'
import SlideShow from '@/components/initiatives/SlideShow'
import Summary1 from '@/components/initiatives/summary1'
import { ReactMarquee } from '@/components/ReactMarquee'
import React from 'react'

const page = () => {
    return (
        <main>
            <Hero />
            <Summary1 />
            <ReactMarquee data={"Crafting Excellence with Precision and Expertise"} direction={"left"} />
            <SlideShow />
            <CountUpStats3 />
            <Summary1 />
            <Founders />
        </main>
    )
}

export default page
