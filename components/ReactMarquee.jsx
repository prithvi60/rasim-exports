import React from 'react'
import Marquee from "react-fast-marquee";

export const ReactMarquee = ({ data, direction }) => {
    return (
        <Marquee autoFill direction={direction}>
            <h1 className=" font-libreCaslonDisplay text-lg text-center font-semibold sm:text-2xl lg:text-[40px] px-4 py-8 xl:text-[48px] uppercase tracking-wide text-primary">
                {data}
            </h1>
        </Marquee>
    )
}
