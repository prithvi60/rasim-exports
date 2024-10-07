import React from 'react'
import { GridCards } from './GridCards'
import { variousProducts } from "@/libs/data";

const VariousTypesOfProducts = () => {
    return (
        <section className='px-6 py-10 md:px-14 xl:px-32'>
            <GridCards data={variousProducts} />
        </section>
    )
}

export default VariousTypesOfProducts
