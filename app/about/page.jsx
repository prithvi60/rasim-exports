import AboutCompany from '@/components/about/AboutCompany'
import AboutHero from '@/components/about/aboutHero'
import FounderRevealCard from '@/components/about/FounderRevealCard'
import VisionMission from '@/components/about/Vision&Mission'
import WorldDistributors from '@/components/about/WorldDistributors'
import { ReactMarquee } from '@/components/ReactMarquee'
import React from 'react'

const page = () => {
    return (
        <main>
            <AboutHero />
            <AboutCompany />
            <ReactMarquee data={"Crafting Excellence with Precision and Expertise"} direction={"left"} />
            <VisionMission />
            <WorldDistributors />
            <FounderRevealCard />

        </main>
    )
}

export default page
