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
            <ReactMarquee data={"Crafting Excellence with Precision and Expertise"} direction={"left"} />
            <VisionMission />
            <WorldMap />
            <FounderRevealCard />
            <ReactMarquee data={"Pillars of Rasim exports pvt limited"} direction={"right"} />
        </main>
    )
}

export default page
