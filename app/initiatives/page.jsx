import { CountUpStats3 } from '@/components/CounterUp'
import Founders from '@/components/initiatives/Founders'
import Hero from '@/components/initiatives/Hero'
import Summary1 from '@/components/initiatives/summary1'
import React from 'react'

const page = () => {
    return (
        <main>
            <Hero />
            <Summary1 />
            <CountUpStats3 />
            <Summary1 />
            <Founders />
        </main>
    )
}

export default page
