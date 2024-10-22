import React from "react";

const page = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen px-6 py-10 mt-5 overflow-hidden text-white justify- md:gap-20 md:mt-0 md:px-14 xl:px-32 bg-primary">
            <h3 className="text-[27px] md:text-[40px] lg:text-[48px] font-libreCaslonDisplay font-normal !leading-snug uppercase xl:mt-0 tracking-custom">
                Terms and Conditions
            </h3>
            <p className="text-base font-semibold text-justify !leading-custom-line sm:text-lg font-figtree sm:indent-7 w-full md:w-4/5">
                By accessing and using the services provided by{" "}
                <span className="text-lg md:text-xl text-secondary font-figtree">
                    At Rasim Export Pvt. Ltd.
                </span>{" "}
                , you agree to comply with the following terms and conditions. All
                products and services offered are subject to availability and may be
                modified or discontinued at any time without prior notice. Prices are
                subject to change without notice. Rasim Export Pvt. Ltd. is not
                responsible for any delays or damages caused by third-party carriers.
                All disputes arising in connection with any transaction will be subject
                to the exclusive jurisdiction of the courts where the company is
                registered.
            </p>
        </section>
    );
};

export default page;
