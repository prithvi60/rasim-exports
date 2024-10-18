"use client"
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats1 = () => {
    return (
        <div className="px-4 pt-10 md:pt-14">
            <div className="flex flex-col items-center justify-center sm:flex-row">
                <Stat1
                    num={8}
                    suffix="+"
                    subheading="COUNTRIES EXPORTED"
                />
                <div className="h-[1px] w-12 bg-white sm:h-6 sm:w-[1px]" />
                <Stat1
                    num={35000}
                    // decimals={1}
                    suffix=""
                    subheading="AREA"
                />
                <div className="h-[1px] w-12 bg-white sm:h-6 sm:w-[1px]" />
                <Stat2
                    num={90}
                    suffix="days"
                    subheading="LEAD TIME"
                />
                {/* <StatData
                    val={"India"}
                    subheading="FABRIC SOURCING"
                /> */}
            </div>
        </div>
    );
};

export const CountUpStats2 = () => {
    return (
        <div className="px-4 pt-0.5 pb-6">
            <div className="flex flex-col items-center justify-center sm:flex-row">
                <Stat2
                    num={40000}
                    suffix="per month"
                    subheading="CAPCITY"
                />
                <div className="h-[1px] w-12 bg-white sm:h-12 sm:w-[1px]" />
                <StatData
                    val={"India,Taiwan&China"}
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
                    num={8}
                    suffix="+"
                    subheading="COUNTRIES EXPORTED"
                />
                <div className="h-[1px] w-12 bg-white sm:h-6 sm:w-[1px]" />
                <Stat3
                    num={35000}
                    // decimals={1}
                    suffix=""
                    subheading="AREA"
                />
                <div className="h-[1px] w-12 bg-white sm:h-6 sm:w-[1px]" />
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
            <p className="mb-2 text-center text-5xl text-white sm:text-4xl md:text-5xl xl:text-[86px] font-libreCaslonDisplay font-normal">
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
        <div className="flex flex-col items-center w-full py-8 sm:w-[470px] bg-primary">
            <p className="mb-2 text-center text-5xl text-white sm:text-4xl md:text-5xl xl:text-[86px] font-libreCaslonDisplay font-normal">
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
            <p className="mb-2 text-center text-5xl text-white sm:text-4xl md:text-5xl xl:text-[92px] font-libreCaslonDisplay font-normal">
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
        <div className="flex flex-col justify-center items-center py-6 xl:py-10 first:rounded-tl-[20px] w-full sm:w-[650px] bg-primary">
            <p className="my-4 font-normal text-center text-white font-libreCaslonDisplay">
                {/* <span ref={ref}></span> */}
                <span className={`text-3xl md:text-[40px] xl:text-[56px] uppercase`}>{val}</span>
                {/* <span className="text-[48px]">{suffix}</span> */}
            </p>
            <p className="text-center text-lg lg:text-[24px] xl:text-[32px] text-white font-figtree font-semibold">{subheading}</p>
        </div>
    );
};