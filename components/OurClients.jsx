import React from 'react'
import Spinning from './SpinningLogos'
import { logos } from "@/libs/data";
import SpinningBox from './SpinningBox';

const OurClients = () => {
    return (
        <section>
            <Spinning logos={logos} />
        </section>
    )
}

export default OurClients
