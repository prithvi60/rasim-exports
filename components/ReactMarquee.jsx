import React from 'react'
import Marquee from "react-fast-marquee";

export const ReactMarquee = ({ data, direction }) => {
    return (
        <Marquee autoFill direction={direction}>
            <h1 className=" font-figtree text-lg text-center font-normal sm:text-2xl lg:text-[40px] px-4 italic py-8 xl:text-[48px] uppercase tracking-wide text-[#454545]">
                {data}
            </h1>
        </Marquee>
    )
}
