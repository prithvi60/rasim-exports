import React from 'react'
import RevealCards from './RevealCards'
import { fabricTypes } from '@/libs/data'
import { RevealCardMobile } from './RevealCardMobile'

const FabricTypes = () => {
    return (
        <section className=' px-6 py-10 '>
                <h4 className="text-xl xl:text-[30px] tracking-widest !leading-[34px] font-normal font-libreCaslonDisplay uppercase text-center mb-8">
                        Our Products
                    </h4>
                    <div className='flex flex-row items-center justify-center w-full'>
            <RevealCards data={fabricTypes} />
            <RevealCardMobile data={fabricTypes} styles={"grid gap-3 md:gap-5 grid-cols-1 sm:grid-cols-2"} />
            </div>
        </section>
    )
}

export default FabricTypes
