import React from "react";
import { GridCards } from "../GridCards";
import { variousProducts } from "@/libs/data";
import Image from "next/image";

const ProductRange = () => {
    return (
        <section className="px-6 py-10 space-y-8 md:px-14 xl:px-32">
            <h2 className="text-2xl md:text-3xl lg:text-[48px] uppercase font-libreCaslonDisplay font-medium tracking-wider text-center w-full ">
                Our range of products
            </h2>
            <GridCards data={variousProducts} />
            <div className="block space-y-8">
                <h4 className="text-xl md:text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize">
                    Men
                </h4>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {men.map((list, idx) => (
                        <div key={idx} className="relative w-full h-[200px] sm:h-[220px] lg:h-[280px] overflow-hidden rounded-tl-[20px]">
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
                <h4 className="text-xl md:text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize">
                    women
                </h4>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {women.map((list, idx) => (
                        <div key={idx} className="relative w-full h-[200px] sm:h-[220px] lg:h-[280px] overflow-hidden rounded-tl-[20px]">
                            <Image
                                alt="image"
                                src={list}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="block space-y-8">
                <h4 className="text-xl md:text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize">
                    children
                </h4>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {children.map((list, idx) => (
                        <div key={idx} className="relative w-full h-[200px] sm:h-[220px] lg:h-[280px] overflow-hidden rounded-tl-[20px]">
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
                <h4 className="text-xl md:text-2xl xl:text-[36px] font-normal font-libreCaslonDisplay capitalize">
                    Infant
                </h4>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {infant.map((list, idx) => (
                        <div key={idx} className="relative w-full h-[200px] sm:h-[220px] lg:h-[280px] overflow-hidden rounded-tl-[20px]">
                            <Image
                                alt="image"
                                src={list}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductRange;

const men = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/men%201.png?updatedAt=1728092942519",
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/men%202.png?updatedAt=1728092942160",
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/men%203.png?updatedAt=1728092940281",
];
const women = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/women%201.png?updatedAt=1728092939925",
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/women%202.png?updatedAt=1728092940075",
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/women%203.png?updatedAt=1728092940217",
];
const children = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/children%201.jpeg?updatedAt=1728092938960",
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/children%202.jpeg?updatedAt=1728092938932",
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/children%203.jpeg?updatedAt=1728092939104",
];
const infant = [
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/infant%201.jpeg?updatedAt=1728092938456",
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/infant%202.jpeg?updatedAt=1728092938902",
    "https://ik.imagekit.io/webibee/Rasim-Exports/product_page/products/infant%203.jpeg?updatedAt=1728092938899",
];
