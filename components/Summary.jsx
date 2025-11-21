import Image from "next/image";
import Link from "next/link";
import React from "react";

const Summary = () => {

    return (
        <section className="flex flex-col items-center justify-center w-full h-full px-5 text-white py-7 lg:px-16 lg:py-12 bg-primary">
            <div className="relative flex flex-col items-start justify-center gap-14 md:gap-10 lg:gap-5 lg:flex-row lg:justify-center">
                <div className="w-full h-[320px]  lg:w-[340px] lg:h-[430px] xl:h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-xl customBorder">
                    <Image
                        fill
                        src={
                            "https://cdn.shopifyapp.shop/Rasim%20exports/summary-bg.jpg"
                        }
                        alt="textile image"
                        className="object-cover object-center transition-all ease-in-out scale-110 hover:scale-125 duration-400"
                    />
                </div>
                <div className="relative w-full px-6 space-y-3 xl:w-1/2">
                    <h4 className="text-xl xl:text-[30px] tracking-widest !leading-[34px] font-normal font-libreCaslonDisplay uppercase">
                        Every piece we manufacture, adds to a lasting legacy of unmatched quality
                    </h4>
                    <p className="pb-4 md:pb-0 md:pt-4 lg:pt-6 text-base font-medium !leading-custom-line tracking-[0.5px] sm:text-xl rounded-tl-[20px] font-figtree">
                        Rasim Exports was founded on numerous commitment to deliver high quality and sustainable products, with each garment reflecting the hard work and passion of our employees, reinforced by strong customer connections. Since our inception, the company has steadily expanded through effective management practices and robust export strategies, ensuring high product standards that resonate with our clients. We pride ourselves on fostering long-term partnerships and consistently delivering exceptional value, making us a trusted name in the global textile market.
                    </p>
                    <Link
                        href={"/about#vision"}
                        className="flex items-center gap-2 pt-4 w-max font-figtree group scroll-smooth"
                    >
                        <h4 className="group-hover:underline group-hover:underline-offset-8 decoration-secondary">
                            More about us
                        </h4>
                        <span className="w-5 h-5 rounded-full shadow-lg bg-secondary"></span>
                    </Link>
                </div>
            </div>
            {/* <ReactMarquee data={"With every piece, we build a legacy of Q"} direction={"left"} /> */}
        </section>
    );
};

export default Summary;

