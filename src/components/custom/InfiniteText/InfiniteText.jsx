'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function InfiniteText() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1; // Initial direction: right to left

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.documentElement,
      scrub: 0.25,
      start: 0,
      end: window.innerHeight,
      onUpdate: (e) => {
        direction = e.scrollDirection < 0 ? -1 : 1; // Update direction based on scroll direction
      },
    });

    gsap.to(slider.current, {
      scrollTrigger,
      x: "-500px",
    });

    requestAnimationFrame(animate);

    return () => scrollTrigger.kill(); // Cleanup ScrollTrigger on unmount
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main className={styles.main}>
      <Image
        src="/images/parrallax/16.jpg"
        fill={true}
        alt="background"
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>- The Elevator Company - </p>
          <p ref={secondText}>The Elevator Company - </p>
        </div>
      </div>
    </main>
  );
}
