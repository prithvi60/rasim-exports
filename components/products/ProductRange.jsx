import React from "react";
import { GridCards } from "../GridCards";
import { variousProducts } from "@/libs/data";
import Image from "next/image";
import ScrollToSection from "../ScrollToSection ";

const ProductRange = () => {
    return (
        <>
            <ScrollToSection offset={-120} duration={600} />
            <section id="types" className="px-6 py-10 space-y-8 text-white md:px-14 xl:px-32 bg-primary">
                <h2 className="text-2xl md:text-3xl lg:text-[48px] uppercase font-libreCaslonDisplay tracking-custom font-medium text-center w-full ">
                    Our range of products
                </h2>
                <GridCards data={variousProducts} />
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        Men
                    </h4>
                    <div className="grid w-full grid-cols-1 gap-5 place-content-center place-items-center md:grid-cols-3">
                        {men.map((list, idx) => (
                            <div key={idx} className="relative h-[390px] sm:h-[320px] w-[300px] md:w-[220px] lg:w-[300px] lg:h-[360px] xl:h-[400px] overflow-hidden customBorder">
                                <Image
                                    alt="image"
                                    src={list}
                                    fill
                                    className="object-cover object-bottom"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        women
                    </h4>
                    <div className="grid w-full grid-cols-1 gap-5 place-content-center place-items-center md:grid-cols-3">
                        {women.map((list, idx) => (
                            <div key={idx} className="relative h-[390px] sm:h-[320px] w-[300px] md:w-[220px] lg:w-[300px] lg:h-[360px] xl:h-[400px] overflow-hidden customBorder">
                                <Image
                                    alt="image"
                                    src={list}
                                    fill
                                    className="object-cover object-bottom"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        children
                    </h4>
                    <div className="grid w-full grid-cols-1 gap-5 place-content-center place-items-center md:grid-cols-3">
                        {children.map((list, idx) => (
                            <div key={idx} className="relative h-[390px] sm:h-[320px] w-[300px] md:w-[220px] lg:w-[300px] lg:h-[360px] xl:h-[400px] overflow-hidden customBorder">
                                <Image
                                    alt="image"
                                    src={list}
                                    fill
                                    className="object-cover object-bottom"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="block space-y-8">
                    <h4 className="text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize tracking-custom">
                        Infant
                    </h4>
                    <div className="grid w-full grid-cols-1 gap-5 place-content-center place-items-center md:grid-cols-3">
                        {infant.map((list, idx) => (
                            <div key={idx} className="relative h-[390px] sm:h-[320px] w-[300px] md:w-[220px] lg:w-[300px] lg:h-[360px] xl:h-[400px] overflow-hidden customBorder">
                                <Image
                                    alt="image"
                                    src={list}
                                    fill
                                    className="object-cover object-bottom"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductRange;

const men = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0024.jpg?updatedAt=1729757184754",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0037.jpg?updatedAt=1729757187823",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0027.jpg?updatedAt=1729757184799",
];
const women = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0031.jpg?updatedAt=1729757185515",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0032.jpg?updatedAt=1729757185519",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0029.jpg?updatedAt=1729757185298",
];
const children = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/children%201.jpeg?updatedAt=1728092938960",
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/children%202.jpeg?updatedAt=1728092938932",
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/children%203.jpeg?updatedAt=1728092939104",
];
const infant = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0043.jpg?updatedAt=1729757188283",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0074.jpg?updatedAt=1729757198673",
    "https://ik.imagekit.io/webibee/Rasim-Exports/dress%20collections/IMG-20241024-WA0052.jpg?updatedAt=1729757191272",
];
