"use client"
import Link from 'next/link';
import { scroller } from 'react-scroll';

const ScrollLink = ({ children, href, sectionId }) => {
    const handleClick = (e) => {
        e.preventDefault();
        scroll.to(sectionId, 1000);
    };

    return (
        <Link href={href}>
            <div onClick={handleClick}>{children}</div>
        </Link>
    );
};

export default ScrollLink;


const scroll = {
    to: (element, duration = 1000) => {
        scroller.scrollTo(element, {
            duration,
            smooth: true,
        });
    },
};
