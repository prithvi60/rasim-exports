import AboutCompany from '@/components/about/AboutCompany'
import AboutHero from '@/components/about/aboutHero'
import FounderRevealCard from '@/components/about/FounderRevealCard'
import VisionMission from '@/components/about/Vision&Mission'
import WorldDistributors from '@/components/about/WorldDistributors'
import React from 'react'

const page = () => {
    return (
        <main>
            <AboutHero />
            <AboutCompany />
            <VisionMission />
            <WorldDistributors />
            <FounderRevealCard />
        </main>
    )
}

export default page
