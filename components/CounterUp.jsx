"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats1 = () => {
    return (
        <div className="px-6 pt-12 md:pt-16 ">
            <div className="flex flex-col items-center justify-center md:flex-row">
                <Stat1 num={8} suffix="+" subheading="COUNTRIES EXPORTED" />
                <div className="h-[1px] w-full bg-white md:h-28 md:w-[1px]" />
                <Stat1 num={300}  subheading="MOQ" />
                <div className="h-[1px] w-full bg-white md:h-28 md:w-[1px]" />
                <Stat1 num={90} suffix="days" subheading="LEAD TIME" />
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
        <div className="px-6 pb-8 ">
            <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="block md:hidden h-[1px] w-full bg-white md:h-28 md:w-[1px]" />
                <Stat2 num={40000} suffix="/ per month" subheading="CAPACITY" />
                <div className="h-[1px] w-full bg-white md:h-28 md:w-[1px]" />
                <StatData val={"India, Taiwan, China"} subheading="FABRIC SOURCING" />
                <div className="h-[1px] w-full bg-white md:h-28 md:w-[1px]" />
                <Stat2
                    num={35000}
                    // decimals={1}
                    suffix="sq.ft"
                    subheading="AREA"
                />
            </div>
        </div>
    );
};

export const CountUpStats3 = () => {
    return (
        <div className="px-8 py-12 my-8 md:px-16 xl:px-36">
            <div className="flex flex-col items-center justify-center md:flex-row">
                <Stat3 num={8} suffix="+" subheading="COUNTRIES EXPORTED" />
                <div className="h-[1px] w-full bg-white md:h-28 md:w-[1px]" />
                <Stat3
                    num={35000}
                    // decimals={1}
                    suffix=""
                    subheading="AREA"
                />
                <div className="h-[1px] w-full bg-white md:h-28 md:w-[1px]" />
                <Stat3 num={70} suffix="%" subheading="FEMALE EMPLOYEES" />
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
        <div className="flex flex-col justify-center items-center h-48 first:rounded-tl-[20px] w-full md:w-96 bg-primary">
            <p className="mb-2 text-center text-5xl text-white md:text-5xl xl:text-[86px] font-libreCaslonDisplay font-normal">
                <span ref={ref}></span>
                {/* <span className="text-[92px]">{val}</span> */}
                <span className="text-lg lg:text-[48px]">{suffix}</span>
            </p>
            <p className="text-center text-lg lg:text-[24px] xl:text-[32px] text-white font-figtree font-semibold">
                {subheading}
            </p>
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
        <div className="flex flex-col items-center justify-center w-full h-48 md:w-96 bg-primary">
            <p className="mb-2 text-center text-5xl text-white md:text-4xl lg:text-4xl xl:text-[86px] font-libreCaslonDisplay font-normal">
                <span ref={ref}></span>
                <span className="text-[18px]">{suffix}</span>
                {/* <span className="text-base font-libreCaslonDisplay md:text-xl"></span> */}
            </p>
            <p className="text-center text-lg lg:text-[24px] xl:text-[32px] text-white font-figtree font-semibold">
                {subheading}
            </p>
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
        <div className="flex flex-col items-center py-[35px] first:rounded-tl-[20px] w-full md:w-96 bg-primary">
            <p className="mb-2 text-center text-2xl text-white md:text-2xl xl:text-[64px] font-libreCaslonDisplay font-normal">
                <span ref={ref}></span>
                <span className="text-[18px]">{suffix}</span>
                {/* <span className="text-base font-libreCaslonDisplay md:text-xl"></span> */}
            </p>
            <p className="text-center text-lg lg:text-[24px] xl:text-[32px] text-white font-figtree font-semibold">
                {subheading}
            </p>
        </div>
    );
};

const StatData = ({ val, subheading }) => {
    return (
        <div className="flex flex-col justify-center items-center h-48 first:rounded-tl-[20px] w-full md:w-96 bg-primary">
            <p className="my-4 font-normal text-center text-white font-libreCaslonDisplay">
                {/* <span ref={ref}></span> */}
                <span className={`text-2xl lg:text-[24px] xl:text-[32px] uppercase`}>
                    {val}
                </span>
                {/* <span className="text-[48px]">{suffix}</span> */}
            </p>
            <p className="text-center text-lg lg:text-[24px] xl:text-[32px] text-white font-figtree font-semibold">
                {subheading}
            </p>
        </div>
    );
};
