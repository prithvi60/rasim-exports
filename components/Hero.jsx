"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState ,forwardRef} from "react";

const Hero = () => {
  const [blur, setBlur] = useState(true);
  const loadingImage = useRef();

  useEffect(() => {
    if (loadingImage.current.complete) {
      setBlur(false);
    }

    loadingImage.current.addEventListener("load", () => {
      setBlur(false);
    });
  }, []);
  return (
    <section className="relative w-full h-screen overflow-hidden slider-container">
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap font-bold rounded-md py-2 md:px-3.5 z-10">
        <div className="mt-16 md:mt-64 block w-full py-2 mx-auto space-y-5 text-center rounded-md px-16 sm:px-0  md:mr-6">
          {/* <div className="md:-mt-72"> */}
          
            <p className="text-3xl font-medium tracking-wide text-white uppercase sm:text-4xl xl:text-5xl font-libreCaslonDisplay">
              Exports pvt Ltd
            </p>
          {/* </div> */}
          <p className="w-full mx-auto text-sm italic font-semibold text-white uppercase tracking-custom sm:w-full text-basefont-bold sm:text-xl font-figtree">
            MANUFACTURERS AND EXPORTERS OF FASHION APPARELS
          </p>
        </div>
      </div>

      {blur === true && (
        <div className="absolute top-0 left-0 z-0 w-full h-screen">
          <Image
            priority
            loading={"eager"}
            alt="bg image"
            src={
              "https://ik.imagekit.io/webibee/Rasim-Exports/sample-2.png?updatedAt=1728292923188"
            }
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
            className="brightness-[0.45]"
          />
        </div>
      )}
<HeroVideo ref={loadingImage}/>
    </section>
  );
};

export default Hero;

const HeroVideo = forwardRef((props, ref) => {
  useEffect(() => {
    const isInstagramBrowser = navigator.userAgent.includes("Instagram");
  
    const playVideo = () => {
      if (ref.current) {
        ref.current.play().catch((error) => {
          console.log("Autoplay failed:", error);
        });
      }
    };
  
    // Attempt autoplay with a small delay
    const autoplayTimeout = setTimeout(() => {
      playVideo();
    }, 300);
  
    // Listen to visibility change for retrying autoplay
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    });
  
    // Fallback on user interaction for Instagram browsers
    if (isInstagramBrowser) {
      document.addEventListener("touchstart", playVideo);
    }
  
    // Cleanup
    return () => {
      clearTimeout(autoplayTimeout);
      document.removeEventListener("visibilitychange", playVideo);
      document.removeEventListener("touchstart", playVideo);
    };
  }, [ref]);
  return    <>
      {/* Desktop Video */}
      <video
        muted
        loop
        autoPlay
        playsInline
        ref={ref}
        className="hidden sm:block h-screen w-full object-cover object-center translate-y-0 transition-all duration-700 ease-linear -z-10"
      >
        <source src="https://ik.imagekit.io/a7ag28udt/Rasim/herosection-web.mp4?q-70" type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        muted
        loop
        autoPlay
        playsInline
        ref={ref}
        className="block sm:hidden  w-full h-screen object-cover  object-center translate-y-0 transition-all duration-700 ease-linear -z-10"
      >
        <source src="https://ik.imagekit.io/a7ag28udt/Rasim/herosection-mobile.mp4?q-70" type="video/mp4" />
      </video>
    </>
  })
  HeroVideo.displayName = 'HeroVideo';
