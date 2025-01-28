'use client';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';

const images: string[] = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
  '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg',
];

type Dimension = {
  width: number;
  height: number;
};

type ColumnProps = {
  images: string[];
  y: any; // The `useTransform` return type is `MotionValue<any>`
};

export default function SmoothScroll() {
  const gallery = useRef<HTMLDivElement | null>(null);
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      {/* Parallax Gallery */}
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y1} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </main>
  );
}

const Column: React.FC<ColumnProps> = ({ images, y }) => (
  <motion.div className={styles.column} style={{ y }}>
    {images.map((src, index) => (
      <div key={index} className={styles.imageContainer}>
        <Image  src={`/images/parrallax/${src}`} alt={`Parallax ${index}`} fill />
      </div>
    ))}
  </motion.div>
);
