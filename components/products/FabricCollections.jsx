import { fabricCollections } from '@/libs/data'
import React from 'react'
import ScrollToSection from '../ScrollToSection '
import { SliderComponent } from './ProductRange'

const FabricCollections = () => {
    return (
        <>
            <ScrollToSection offset={-100} duration={600} />
            <section id='fabric' className='block w-full h-full px-6 py-10 space-y-5 md:px-14 xl:px-32'>
                <h2 className='text-2xl md:text-3xl lg:text-[48px] uppercase font-libreCaslonDisplay font-medium tracking-wider text-center w-full'>We Weave strong</h2>
                <h4 className='text-xl md:text-2xl lg:text-[36px] capitalize font-figtree font-medium tracking-wider text-center w-full text-black/80'>Fabric Collections</h4>
                <div className="block space-y-8">
                    <SliderComponent data={fabricCollections} rtl={false} type={"fabric"} />
                </div>
            </section>
        </>
    )
}

export default FabricCollections
