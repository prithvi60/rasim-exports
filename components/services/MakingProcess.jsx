/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const smoothScrollTo = (element, target, duration) => {
    const start = element.scrollLeft;
    const change = target - start;
    let startTime = null;

    const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
        const newPos = start + change * easeInOutQuad(progress);
        element.scrollLeft = newPos;

        if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
        }
    };

    window.requestAnimationFrame(animateScroll);
};

const MakingProcess = () => {
    const targetRef = useRef(null);
    const isInView = useInView(targetRef, { amount: 0.3, once: true });
    const scrollContainerRef = useRef(null);

    React.useEffect(() => {
        const scrollToEnd = () => {
            const scrollWidth = scrollContainerRef.current.scrollWidth;
            const clientWidth = scrollContainerRef.current.clientWidth;
            const targetScrollPosition = scrollWidth - clientWidth;
            smoothScrollTo(scrollContainerRef.current, targetScrollPosition, 1200);
        };
        if (isInView && scrollContainerRef.current) {
            scrollToEnd();
        }
    }, [isInView]);

    return (
        <section className="relative w-full h-full px-6 py-10 md:px-14 xl:px-32 md:py-12 ">
            <div className="overflow-x-scroll shadow-xl lg:overflow-x-hidden lg:hover:overflow-x-scroll custom rounded-tl-xl" ref={scrollContainerRef}>
                <div ref={targetRef} className="flex">
                    <img src={"https://ik.imagekit.io/webibee/Rasim-Exports/tree.png?updatedAt=1728364756196"} alt="legacy-image" loading="lazy" className="max-w-[350%] md:max-w-[450%]" />
                </div>
            </div>
        </section>
    )
}

export default MakingProcess
