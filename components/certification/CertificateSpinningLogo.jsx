import React from 'react'
import Spinning from '../SpinningLogos'
import { certificatePageLogos } from '@/libs/data'

const CertificateSpinningLogo = () => {
    return (
        <section className="mt-14 md:py-16 md:px-14 xl:px-32">
            <Spinning logos={certificatePageLogos} />
        </section>
    )
}

export default CertificateSpinningLogo
