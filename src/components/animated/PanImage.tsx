"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const PanImage = () => {
  const clipRef = useRef<HTMLDivElement>(null); // Ref for the mask-clip-path container

  useEffect(() => {
    if (clipRef.current) {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: clipRef.current,
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px] flex flex-col gap-[8vh] items-center justify-center">
          <AnimatedText
            className="!text-[5vw] !font-black text-golden-400"
            phrase="The Elevator Company"
          />
        </h2>
        <div className="about-subtext text-center">
          <p>Leading the industry with innovative and reliable elevator solutions.</p>
          <p>Tailored systems ensuring efficiency, safety, and seamless mobility.</p>
        </div>
      </div>
      <div className="h-screen w-screen" id="clip" ref={clipRef}>
        <div className="mask-clip-path about-image relative w-full h-full">
          <img
            src="/images/interior/2.jpg"
            alt="background"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PanImage;
