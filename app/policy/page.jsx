import React from 'react'
import { MdPolicy } from "react-icons/md";

const page = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-full px-6 py-10 overflow-hidden text-white mt-14 justify- md:gap-5 md:px-14 xl:px-32 bg-primary">
            <h3 className="text-[27px] md:text-[40px] lg:text-[48px] font-libreCaslonDisplay font-normal !leading-snug uppercase xl:mt-0 tracking-custom">
                Policy
            </h3>
            <MdPolicy className='text-6xl text-white  xl:text-9xl' />
            <p className="w-full text-base font-semibold text-justify !leading-custom-line sm:text-lg font-figtree sm:indent-7 md:w-4/5">
                <span className="text-lg md:text-xl text-secondary font-figtree">
                    At Rasim Export Pvt. Ltd.
                </span>{" "}
                we are committed to maintaining the highest standards of integrity and transparency in all our operations. We prioritize customer satisfaction and ensure that all products meet our quality standards. Personal information collected during transactions is treated with strict confidentiality and used solely for order processing and service improvements. We do not share customer data with third parties without prior consent, except as required by law. Our company complies with all applicable regulations and standards related to international trade and ethical business practices.
            </p>
        </section>
    )
}

export default page
