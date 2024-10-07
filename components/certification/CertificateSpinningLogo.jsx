import React from 'react'
import Spinning from '../SpinningLogos'
import { certificatePageLogos } from '@/libs/data'

const CertificateSpinningLogo = () => {
    return (
        <section className="px-6 py-10 space-y-8 md:px-14 xl:px-32">
            <Spinning logos={certificatePageLogos} />
        </section>
    )
}

export default CertificateSpinningLogo
