import FabricCollections from '@/components/products/FabricCollections'
import ProductHero from '@/components/products/ProductHero'
import ProductRange from '@/components/products/ProductRange'
import React from 'react'

const page = () => {
    return (
        <main>
            <ProductHero />
            {/* <FabricCollections /> */}
            <ProductRange />
        </main>
    )
}

export default page
