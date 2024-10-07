// components/ScrollToSection.jsx
"use client";
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

const ScrollToSection = ({ offset = -100, duration = 500 }) => {
    useEffect(() => {
        if (window.location.hash) {
            const sectionId = window.location.hash.replace('#', '');
            scroller.scrollTo(sectionId, {
                smooth: true,
                duration,
                offset,
            });
        }
    }, [offset, duration]);

    return null; // This component does not render anything visible
};

export default ScrollToSection;
