"use client"
import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

export const VelocityHero = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

    return (
        <section
            ref={targetRef}
            className="h-[500vh] relative"
        // className="px-6 py-10 overflow-hidden md:px-14 xl:px-32 bg-secondary"
        >
            <div className="sticky top-0 flex flex-col h-screen xl:h-[80vh] overflow-hidden bg-secondary px-6 py-10">
                <div className='flex flex-col items-center justify-center gap-10 lg:gap-5 jus lg:flex-row lg:justify-center lg:items-end'>
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

                <motion.p
                    style={{ skewX, x }}
                    className="origin-bottom-left whitespace-nowrap font-libreCaslonDisplay text-lg text-center font-semibold sm:text-2xl lg:text-[40px] xl:text-[48px] uppercase tracking-wide mt-5"
                >
                    With every piece, we build a legacy of Q.With every piece, we build a legacy of Q.With every piece, we build a legacy of Q.With every piece, we build a legacy of Q
                </motion.p>
                {/* <ScrollArrow /> */}
            </div>
        </section>
    );
};

//   const Nav = () => {
//     return (
//       <div className="relative flex justify-between w-full p-6 mb-1">
//         <p className="hidden text-xs text-neutral-400 md:block">
//           40° 42' 46" N, 74° 0' 21" W
//           <br />
//         </p>
//         <Logo />
//         <Links />
//       </div>
//     );
//   };

//   const Logo = () => {
//     // Temp logo from https://logoipsum.com/
//     return (
//       <svg
//         width="36"
//         height="auto"
//         viewBox="0 0 50 39"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute translate-x-0 -translate-y-1/2 right-4 top-1/2 h-fit fill-neutral-950 md:right-1/2 md:translate-x-1/2"
//       >
//         <path
//           d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
//           stopColor="#000000"
//         ></path>
//         <path
//           d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
//           stopColor="#000000"
//         ></path>
//       </svg>
//     );
//   };

//   const Links = () => {
//     return (
//       <nav className="flex gap-3 text-sm">
//         <a href="#">Supply</a>
//         <a href="#">Merch</a>
//         <a href="#">Locations</a>
//       </nav>
//     );
//   };

//   const CenterCopy = () => {
//     return (
//       <div className="flex items-center justify-center px-4">
//         <img
//           src="https://images.unsplash.com/photo-1622599511051-16f55a1234d0?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Placeholder image"
//           className="object-cover w-20 h-full mr-2 bg-neutral-200"
//         />
//         <h1 className="text-3xl font-bold text-neutral-400 sm:text-5xl md:text-7xl">
//           Life is short. <br />
//           Don't waste it. <br />
//           It's time to{" "}
//           <span className="inline-block -skew-x-[18deg] font-black text-neutral-950">
//             SHIFT.
//           </span>
//         </h1>
//       </div>
//     );
//   };

// const ScrollArrow = () => {
//     return (
//         <>
//             <div className="absolute hidden text-xs -translate-y-1/2 left-4 top-1/2 lg:block">
//                 <span
//                     style={{
//                         writingMode: "vertical-lr",
//                     }}
//                 >
//                     SCROLL
//                 </span>
//                 <FiArrowDown className="mx-auto" />
//             </div>
//             <div className="absolute hidden text-xs -translate-y-1/2 right-4 top-1/2 lg:block">
//                 <span
//                     style={{
//                         writingMode: "vertical-lr",
//                     }}
//                 >
//                     SCROLL
//                 </span>
//                 <FiArrowDown className="mx-auto" />
//             </div>
//         </>
//     );
// };