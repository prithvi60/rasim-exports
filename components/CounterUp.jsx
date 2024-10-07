"use client"
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats1 = () => {
    return (
        <div className="px-4 pt-20 md:pt-24 bg-secondary">
            <div className="flex flex-col items-center justify-center sm:flex-row">
                <Stat1
                    num={10}
                    suffix="+"
                    subheading="COUNTRIES EXPORTED"
                />
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-6 sm:w-[1px]" />
                <Stat1
                    num={35000}
                    // decimals={1}
                    suffix=""
                    subheading="AREA"
                />
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-6 sm:w-[1px]" />
                <Stat1
                    num={70}
                    suffix="%"
                    subheading="FEMALE EMPLOYEES"
                />
            </div>
        </div>
    );
};

export const CountUpStats2 = () => {
    return (
        <div className="px-4 py-20 md:py-24 bg-secondary">
            <div className="flex flex-col items-center justify-center sm:flex-row">
                <Stat2
                    num={40000}
                    suffix="per month"
                    subheading="CAPCITY"
                />
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
                <Stat2
                    num={90}
                    suffix="days approx"
                    subheading="LEAD TIME"
                />
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
                <StatData
                    val={"India&China"}
                    subheading="FABRIC SOURCING"
                />
            </div>
        </div>
    );
};

export const CountUpStats3 = () => {
    return (
        <div className="px-6 py-10 my-6 md:px-14 xl:px-32">
            <div className="flex flex-col items-center justify-center sm:flex-row">
                <Stat3
                    num={10}
                    suffix="+"
                    subheading="COUNTRIES EXPORTED"
                />
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-6 sm:w-[1px]" />
                <Stat3
                    num={35000}
                    // decimals={1}
                    suffix=""
                    subheading="AREA"
                />
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-6 sm:w-[1px]" />
                <Stat3
                    num={70}
                    suffix="%"
                    subheading="FEMALE EMPLOYEES"
                />
            </div>
        </div>
    );
};

const Stat1 = ({ num, suffix, decimals = 0, subheading }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex flex-col items-center py-8 first:rounded-tl-[20px] w-full sm:w-96 bg-primary">
            <p className="mb-2 text-center text-5xl text-secondary sm:text-4xl md:text-5xl xl:text-[96px] font-libreCaslonDisplay font-normal">
                <span ref={ref}></span>
                {/* <span className="text-[92px]">{val}</span> */}
                <span className="text-lg lg:text-[48px]">{suffix}</span>
            </p>
            <p className="text-center text-lg lg:text-[24px] xl:text-[32px] text-white font-figtree font-semibold">{subheading}</p>
        </div>
    );
};

const Stat2 = ({ num, suffix, decimals = 0, subheading }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex flex-col items-center py-8 first:rounded-tl-[20px] w-full sm:w-96 bg-primary">
            <p className="mb-2 text-center text-5xl text-secondary sm:text-4xl md:text-5xl xl:text-[92px] font-libreCaslonDisplay font-normal">
                <span ref={ref}></span>
                <span className="text-[18px]">{suffix}</span>
                {/* <span className="text-base font-libreCaslonDisplay md:text-xl"></span> */}
            </p>
            <p className="text-center text-lg lg:text-[24px] xl:text-[32px] text-white font-figtree font-semibold">{subheading}</p>
        </div>
    );
};

const Stat3 = ({ num, suffix, decimals = 0, subheading }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex flex-col items-center py-8 first:rounded-tl-[20px] w-full sm:w-96 bg-primary">
            <p className="mb-2 text-center text-5xl text-secondary sm:text-4xl md:text-5xl xl:text-[92px] font-libreCaslonDisplay font-normal">
                <span ref={ref}></span>
                <span className="text-[18px]">{suffix}</span>
                {/* <span className="text-base font-libreCaslonDisplay md:text-xl"></span> */}
            </p>
            <p className="text-center text-lg lg:text-[24px] xl:text-[32px] text-white font-figtree font-semibold">{subheading}</p>
        </div>
    );
};

const StatData = ({ val, subheading }) => {

    return (
        <div className="flex flex-col items-center py-10 lg:py-8 xl:py-10 first:rounded-tl-[20px] w-full sm:w-96 bg-primary ">
            <p className="font-normal text-center text-secondary font-libreCaslonDisplay">
                {/* <span ref={ref}></span> */}
                <span className="text-[27px] lg:text-[36px] xl:text-[54px] uppercase">{val}</span>
                {/* <span className="text-[48px]">{suffix}</span> */}
            </p>
            <p className="text-center text-lg lg:text-[24px] xl:text-[32px] text-white font-figtree font-semibold">{subheading}</p>
        </div>
    );
};