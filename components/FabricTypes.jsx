import React from 'react'
import RevealCards from './RevealCards'
import { fabricTypes } from '@/libs/data'
import { RevealCardMobile } from './RevealCardMobile'

const FabricTypes = () => {
    return (
        <section className='w-full px-6 py-10 md:px-14 xl:px-32'>
            <RevealCards data={fabricTypes} />
            <RevealCardMobile data={fabricTypes} styles={"grid-cols-1 sm:grid-cols-2"} />
        </section>
    )
}

export default FabricTypes
