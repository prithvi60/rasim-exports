import React from 'react'
import { GridCards } from './GridCards'
import { variousProducts } from "@/libs/data";

const VariousTypesOfProducts = () => {
    return (
        <section>
            <GridCards data={variousProducts} />
        </section>
    )
}

export default VariousTypesOfProducts
