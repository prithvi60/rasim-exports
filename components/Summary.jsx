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
                            "https://ik.imagekit.io/webibee/Rasim-Exports/summary-bg.jpg?updatedAt=1729664678937"
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

{
    /* <section 
  className='flex flex-col items-center justify-center w-full h-full gap-6 px-6 py-10 md:px-14 xl:px-32 bg-secondary'
  >
  <div className='relative flex flex-col items-center justify-center gap-10 lg:gap-5 jus lg:flex-row lg:justify-center lg:items-end'>
                  <div className='w-full h-[320px]  lg:w-[340px] lg:h-[430px] xl:h-[340px] overflow-hidden relative rounded-tl-[20px] cursor-pointer shadow-lg'>
                      <Image fill src={"https://ik.imagekit.io/webibee/Rasim-Exports/sample%201.png?updatedAt=1727336458598"} alt="textile image" className='object-cover object-center transition-all ease-in-out hover:scale-110 duration-400' />
                  </div>
                  <div className='relative w-full lg:w-3/5'>
                      <p className='w-full px-6 py-8 text-base font-medium leading-7 tracking-wide text-justify sm:text-lg text-secondary bg-primary rounded-tl-[20px] font-figtree indent-7'>Since <span className='text-[48px] font-libreCaslonDisplay font-medium'>2002</span> Rasim Exports Pvt Ltd has been at the heart of apparel manufacturing, committed to crafting high-quality clothing for men, women, and children. Our journey is driven by a passion for excellence and a dedication to <span className='text-lg italic font-medium sm:text-xl font-libreCaslonDisplay'>sustainability</span>.With a state-of-the-art manufacturing unit and a team of skilled professionals, we ensure every piece we create meets the highest standards. From the careful selection of materials to the expertise of our designers and textile developers, we pour our heart into every stitch, delivering timeless fashion that speaks of <span className='text-lg italic font-medium sm:text-xl font-libreCaslonDisplay'>quality, care, and a love for the craft</span>.</p>
                      <Link href={"/about"} className='absolute flex gap-2 right-2 1items-center -top-7 lg:-top-10 font-figtree group'>
                          <h4 className='group-hover:underline group-hover:underline-offset-4 decoration-primary'>More about us</h4>
                          <span className='w-5 h-5 rounded-full shadow-lg bg-primary'></span>
                      </Link>
                  </div>
              </div>
   <h1 className='font-libreCaslonDisplay text-lg text-center font-semibold sm:text-2xl lg:text-[40px] xl:text-[48px] uppercase tracking-wide'>With every piece, we build a legacy of Q</h1> 
  
  </section> */
}
