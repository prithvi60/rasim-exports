import React from 'react'
import Spinning from './SpinningLogos'
import { logos } from "@/libs/data";

const OurClients = () => {
    return (
        <section>
            <Spinning logos={logos} />
        </section>
    )
}

export default OurClients
