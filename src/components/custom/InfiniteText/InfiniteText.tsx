"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function InfiniteText() {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slider.current) return;

    // Infinite horizontal scrolling animation
    const sliderWidth = slider.current.scrollWidth / 2;

    const tl = gsap.timeline({
      repeat: -1,
      paused: false,
    });

    tl.to(slider.current, {
      x: -sliderWidth, // Move to the left by the width of the slider
      duration: 10, // Duration of one full scroll (adjust as needed)
      ease: "linear",
    });

    return () => {
      tl.kill(); // Cleanup on component unmount
    };
  }, []);


  return (
    <main className={styles.main}>
      {/* Background Image */}
      <div className={styles.background}>
        <Image
          src="/images/parrallax/16.jpg"
          layout="fill"
          alt="background"
          className={styles.backgroundImage}
        />
      </div>

      {/* Scrolling Text */}
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p>- The Elevator Company - </p>
          <p>- The Elevator Company - </p>
        </div>
      </div>
    </main>
  );
}
