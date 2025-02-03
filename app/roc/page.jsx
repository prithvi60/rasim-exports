"use client"
import PdfList from '@/components/PdfViewer';
import dynamic from 'next/dynamic';
import React from 'react';
// import { Spinner } from "@heroui/spinner"

// const PdfListSSR = dynamic(
//     () => import('@/components/PdfViewer'),
//     { ssr: false, }
// )

const page = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen gap-8 px-6 py-10 mt-5 overflow-hidden text-white justify- md:gap-14 md:mt-0 md:px-14 xl:px-32 bg-primary">
            <h3 className="text-[27px] md:text-[40px] lg:text-[48px] font-libreCaslonDisplay font-normal !leading-snug uppercase xl:mt-0 tracking-custom">
                ROC Filing
            </h3>
            <h4 className='text-lg font-semibold'>View the Roc&apos;s by selecting the links</h4>
            <div className="text-base font-semibold text-justify !leading-custom-line sm:text-lg font-figtree sm:indent-7 w-full sm:w-max">
                <PdfList />
            </div>
        </section>
    );
};

export default page;



