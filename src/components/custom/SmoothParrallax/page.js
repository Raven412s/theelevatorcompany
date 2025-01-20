'use client';
import Lenis from '@studio-freight/lenis';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
];

export default function SmoothScroll() {
  const gallery = useRef(null);
  const spacerRef = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }


  // Check if the spacer div is in view
  const spacerInView = useInView(spacerRef, { once: true }); // `once: true` ensures the animation runs only the first time it comes into view

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      {/* Spacer with animated content */}
      {/* <div ref={spacerRef} className={styles.spacer}>
        {spacerInView && (
          <>
            <motion.div
              className="bg-gray-200/30 w-3/5 translate-x-40 my-40 h-32 pt-2 rounded-2xl border flex items-center justify-center"
              style={{ border: '2px solid rgba(255, 255, 255, 0.2)' }}
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: '10vw', opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h1 className="text-5xl"><AnimatedText phrase={"THE LIFT THAT SUITS YOU"}/></h1>
            </motion.div>
            <motion.div
              className="bg-gray-200/30 w-3/4 translate-x-40 my-40 h-36 pt-2 rounded-2xl border flex items-center justify-center"
              style={{ border: '2px solid rgba(255, 255, 255, 0.2)' }}
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: '24vw', opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
              <h1 className="text-5xl  "><AnimatedText phrase={"ELEVATING SAFETY AND SATISFACTION"}/></h1>
            </motion.div>
          </>
        )}
      </div> */}

      {/* Parallax Gallery */}
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image src={`/images/parrallax/${src}`} alt="image" fill />
        </div>
      ))}
    </motion.div>
  );
};
