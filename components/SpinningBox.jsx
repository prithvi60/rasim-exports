import { motion } from "framer-motion";

const SpinningBox = () => {
    return (
        <div className="absolute z-10 grid w-full -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
            <SpinningBoxText />
        </div>
    );
};

const SpinningBoxText = () => {
    return (
        <div className="flex items-center justify-between w-full gap-10 text-sm font-normal tracking-wide text-black md:text-3xl backdrop-blur-md md:gap-4 font-libreCaslonDisplay">
            WE EXCEL IN <Box front="Quality" bottom="Safety" back="Best" top="Learn" />
        </div>
    );
};

const Box = ({ front, bottom, back, top }) => {
    return (
        <motion.span
            className="relative h-20 font-black uppercase w-36 md:h-20 md:w-48"
            style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center -40px",
            }}
            initial={{ rotateX: "0deg" }}
            animate={{
                rotateX: [
                    "0deg",
                    "90deg",
                    "90deg",
                    "180deg",
                    "180deg",
                    "270deg",
                    "270deg",
                    "360deg",
                ],
            }}
            transition={{
                repeat: Infinity,
                duration: 10,
                ease: "backInOut",
                times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
            }}
        >
            {/* FRONT */}
            <span className="absolute flex items-center justify-center w-full h-full text-secondary bg-[#222926] border-2 border-secondary font-figtree italic font-medium">
                {front}
            </span>

            {/* BOTTOM */}
            <span
                style={{ transform: "translateY(5rem) rotateX(-90deg)" }}
                className="absolute flex items-center justify-center w-full h-full text-secondary origin-top bg-[#222926] border-2 border-secondary font-figtree italic font-medium"
            >
                {bottom}
            </span>

            {/* TOP */}
            <span
                style={{ transform: "translateY(-5rem) rotateX(90deg)" }}
                className="absolute flex items-center justify-center w-full h-full text-secondary origin-bottom bg-[#222926] border-2 border-secondary font-figtree italic font-medium"
            >
                {top}
            </span>

            {/* BACK */}
            <span
                style={{
                    transform: "translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)",
                }}
                className="absolute flex items-center justify-center w-full h-full text-secondary origin-center bg-[#222926] border-2 border-secondary font-figtree italic font-medium"
            >
                {back}
            </span>
        </motion.span>
    );
};

export default SpinningBox;