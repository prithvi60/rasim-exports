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
                            "https://cdn.shopifyapp.shop/Rasim%20exports/contact_page/contactherobg.jpeg"
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
                        "https://cdn.shopifyapp.shop/Rasim%20exports/contact_page/contactherobg.jpeg"
                    }
                    fill
                    className="object-cover object-top md:object-top scale-110"
                />
            </div>
        </section>
    );
};

export default ContactHero;
