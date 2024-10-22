"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SpinningBox from "./SpinningBox";
import Image from "next/image";


const Spinning = ({ logos }) => {
    return (
        <div className="grid w-full px-4 py-12 overflow-hidden bg-white place-content-center">
            <SpinningLogos logos={logos} />
        </div>
    );
};

const SpinningLogos = ({ logos }) => {
    const { width } = useWindowSize();

    const [sizes, setSizes] = useState({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
        ringPadding: RING_PADDING.lg,
    });

    useEffect(() => {
        if (!width) return;

        if (width < BREAKPOINTS.sm) {
            setSizes({
                radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.sm,
                iconWrapperWidth: ICON_WRAPPER_WIDTH.sm,
                ringPadding: RING_PADDING.sm,
            });
        } else if (width < BREAKPOINTS.md) {
            setSizes({
                radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.md,
                iconWrapperWidth: ICON_WRAPPER_WIDTH.md,
                ringPadding: RING_PADDING.md,
            });
        } else {
            setSizes({
                radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
                iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
                ringPadding: RING_PADDING.lg,
            });
        }
    }, [width]);

    return (
        <div className="relative w-full rounded-full shadow-lg shrink-0">
            <div
                style={{
                    width:
                        sizes.radiusToCenterOfIcons +
                        sizes.iconWrapperWidth +
                        sizes.ringPadding,
                    height:
                        sizes.radiusToCenterOfIcons +
                        sizes.iconWrapperWidth +
                        sizes.ringPadding,
                }}
                className="grid rounded-full shadow-inner place-content-center bg-primary"
            >
                <SpinningBox />
                <div className="w-full p-1 rounded-full md:p-4">
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={TRANSITION}
                        style={{
                            width:
                                sizes.radiusToCenterOfIcons -
                                sizes.iconWrapperWidth -
                                sizes.ringPadding,
                            height:
                                sizes.radiusToCenterOfIcons -
                                sizes.iconWrapperWidth -
                                sizes.ringPadding,
                        }}
                        className="relative grid bg-white rounded-full shadow place-items-center"
                    >

                        {/* <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -360 }}
                            transition={TRANSITION}
                            className="text-lg font-bold uppercase text-neutral-900 sm:text-xl md:text-3xl"
                        >

                        </motion.div> */}

                        {logos.map((logo, idx) => {
                            const degrees = (360 / logos.length) * idx;
                            return (
                                <motion.div
                                    key={idx}
                                    style={{
                                        marginTop:
                                            sizes.radiusToCenterOfIcons *
                                            Math.sin(degreesToRadians(degrees)),
                                        marginLeft:
                                            sizes.radiusToCenterOfIcons *
                                            Math.cos(degreesToRadians(degrees)),
                                        width: sizes.iconWrapperWidth,
                                        height: sizes.iconWrapperWidth,
                                    }}
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: -360 }}
                                    transition={TRANSITION}
                                    className={`absolute grid place-content-center bg-transparent `}
                                // rounded-full shadow-xl overflow-hidden w-28 h-28
                                >
                                    {/* <icon.Icon
                                        style={{
                                            fontSize: sizes.logoFontSize,
                                        }}
                                    /> */}
                                    <Image src={logo.src} alt={logo.alt} fill className="object-contain object-center" />
                                </motion.div>
                            );
                        })}

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Spinning;

// interface Size {
//   width: number | undefined;
//   height: number | undefined;
// }

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [setWindowSize]);

    return windowSize;
};

const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
};

// Defines the distance from the center of the circle to the center
// of the icons
const RADIUS_TO_CENTER_OF_ICONS = {
    sm: 310,
    md: 325,
    lg: 490
};
// Defines the width of the icon circles
const ICON_WRAPPER_WIDTH = {
    sm: 80,
    md: 55,
    lg: 120,
};
// Defines the padding between the icon circles and the inner and outer rings
const RING_PADDING = {
    sm: 10,
    md: 8,
    lg: 10,
};
// Defines the font size for logos
// const LOGO_FONT_SIZE = {
//     sm: 28,
//     md: 24,
//     lg: 36,
// };

const BREAKPOINTS = {
    sm: 480,
    md: 640,
};

const TRANSITION = {
    repeat: Infinity,
    repeatType: "loop",
    duration: 50,
    ease: "linear",
};