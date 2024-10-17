"use client"
import { TypeAnimation } from "react-type-animation";

const SpinningBox = () => {
    return (
        <div className="absolute z-10 flex items-center justify-center text-base font-medium -translate-x-1/2 -translate-y-1/2 md:text-2xl xl:text-3xl font-libreCaslonDisplay top-1/2 left-1/2">
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    500,
                    "WE EXCEL IN Quality",
                    1000,
                    "WE EXCEL IN Safety",
                    1000,
                    "WE EXCEL IN Best",
                    1000,
                    "WE EXCEL IN Learn",
                    500,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
            />
        </div>
    );
};

const Box = () => {
    <TypeAnimation
        preRenderFirstString={true}
        sequence={[
            500,
            "WE EXCEL IN Quality",
            1000,
            "WE EXCEL IN Safety",
            1000,
            "WE EXCEL IN Best",
            1000,
            "WE EXCEL IN Learn",
            500,
        ]}
        speed={50}
        // style={{ fontSize: '2em', color: "black" }}
        repeat={Infinity}
        wrapper="span"
        cursor={true}
        style={{ fontSize: "2em", display: "inline-block", color: "black" }}
    />
};

// const Box = ({ front, bottom, back, top }) => {
//     return (
//         <motion.span
//             className="relative h-20 font-black uppercase w-36 md:h-20 md:w-48"
//             style={{
//                 transformStyle: "preserve-3d",
//                 transformOrigin: "center center -40px",
//             }}
//             initial={{ rotateX: "0deg" }}
//             animate={{
//                 rotateX: [
//                     "0deg",
//                     "90deg",
//                     "90deg",
//                     "180deg",
//                     "180deg",
//                     "270deg",
//                     "270deg",
//                     "360deg",
//                 ],
//             }}
//             transition={{
//                 repeat: Infinity,
//                 duration: 10,
//                 ease: "backInOut",
//                 times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
//             }}
//         >
//             {/* FRONT */}
//             <span className="absolute flex items-center justify-center w-full h-full text-secondary bg-[#222926] border-2 border-secondary font-figtree italic font-medium">
//                 {front}
//             </span>

//             {/* BOTTOM */}
//             <span
//                 style={{ transform: "translateY(5rem) rotateX(-90deg)" }}
//                 className="absolute flex items-center justify-center w-full h-full text-secondary origin-top bg-[#222926] border-2 border-secondary font-figtree italic font-medium"
//             >
//                 {bottom}
//             </span>

//             {/* TOP */}
//             <span
//                 style={{ transform: "translateY(-5rem) rotateX(90deg)" }}
//                 className="absolute flex items-center justify-center w-full h-full text-secondary origin-bottom bg-[#222926] border-2 border-secondary font-figtree italic font-medium"
//             >
//                 {top}
//             </span>

//             {/* BACK */}
//             <span
//                 style={{
//                     transform: "translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)",
//                 }}
//                 className="absolute flex items-center justify-center w-full h-full text-secondary origin-center bg-[#222926] border-2 border-secondary font-figtree italic font-medium"
//             >
//                 {back}
//             </span>
//         </motion.span>
//     );
// };

export default SpinningBox;
