"use client";
import Image from "next/image";

const WorldMap = () => {
    return (
        <section className='w-full px-2 py-4 md:py-10 md:px-14 xl:px-32'>
            <div className="relative w-full h-[35vh]  sm:h-[65vh] lg:h-[90vh] overflow-hidden">
                <Image alt="world map" src={"https://cdn.shopifyapp.shop/Rasim%20exports/world%201.svg"} fill className="object-contain object-center" />
            </div>
        </section>
    );
};

export default WorldMap;
