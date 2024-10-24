"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ContactHero = () => {
    const [blur, setBlur] = useState(true);
    const loadingImage = useRef();

    useEffect(() => {
        if (loadingImage.current && loadingImage.current.complete) {
            setBlur(false);
        }

        loadingImage.current.addEventListener("load", () => {
            setBlur(false);
        });
    }, []);
    return (
        <section className="relative w-full h-[40vh] md:h-screen overflow-hidden slider-container">
            {blur === true && (
                <div className="absolute top-0 left-0 z-0 w-full h-[40vh] md:h-screen">
                    <Image
                        priority
                        loading={"eager"}
                        alt="bg image"
                        src={
                            "https://ik.imagekit.io/webibee/Rasim-Exports/contact_page/contactherobg.jpeg?updatedAt=1728093705435"
                        }
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        fill
                        className="brightness-[0.45]"
                    />
                </div>
            )}
            <div className="absolute top-0 left-0 z-0 w-full h-[40vh] md:h-screen">
                <Image
                    alt="Contact bg image"
                    ref={loadingImage}
                    src={
                        "https://ik.imagekit.io/webibee/Rasim-Exports/contact_page/contactherobg.jpeg?updatedAt=1728093705435"
                    }
                    // style={{ objectFit: "cover", objectPosition: "center" }}
                    fill
                    className="object-cover object-left md:object-center"
                />
            </div>
            {/* <video
                muted
                loop
                autoPlay
                playsInline
                ref={loadingImage}
                className={`h-screen w-full object-cover object-center translate-y-0 transition-all duration-700 ease-linear brightness-[0.45] -z-10`}
            >
                <source
                    src={
                        "https://ik.imagekit.io/webibee/Rasim-Exports/sample-video.mp4?updatedAt=1727335810255"
                    }
                    type="video/mp4"
                />
            </video> */}
        </section>
    );
};

export default ContactHero;
