import AboutCompany from '@/components/about/AboutCompany'
import AboutHero from '@/components/about/aboutHero'
import FounderRevealCard from '@/components/about/FounderRevealCard'
import VisionMission from '@/components/about/Vision&Mission'
import { ReactMarquee } from '@/components/ReactMarquee'
import React from 'react'
import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("@/components/about/WorldMap"), { ssr: false });

const page = () => {
    return (
        <main>
            <AboutHero />
            <AboutCompany />
            <VisionMission />
            <WorldMap />
            <ReactMarquee data={"Pillars of Rasim exports pvt limited"} direction={"left"} />
            <FounderRevealCard />
        </main>
    )
}

export default page
