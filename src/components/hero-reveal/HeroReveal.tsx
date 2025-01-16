'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import AnimatedText from '@/components/animated/AnimatedText';
import Image from 'next/image';

export default function HeroReveal() {
  const container = useRef<HTMLDivElement | null>(null);
  const stickyMask = useRef<HTMLDivElement | null>(null);
  const initialMaskSize = 0.8;
  const targetMaskSize = 200;
  const easing = 0.15;
  let easedScrollProgress = 0;
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    if (stickyMask.current) {
      stickyMask.current.style.webkitMaskSize =
        stickyMask.current.style.maskSize = `${(initialMaskSize + maskSizeProgress) * 100}%`;
    }

    if ((initialMaskSize + maskSizeProgress) >= targetMaskSize) {
      // Mark animation as complete when the mask reaches the target size
      setAnimationComplete(true);
    }

    requestAnimationFrame(animate);
  };

  const getScrollProgress = (): number => {
    if (stickyMask.current && container.current) {
      const containerHeight = container.current.getBoundingClientRect().height;
      const scrollProgress =
        stickyMask.current.offsetTop / (containerHeight - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
    }
    return 0;
  };

  return (
    <main className="mb-[20vh] sm:w-full">
      <div ref={container} className="relative h-[120vh] sm:!min-w-screen">
        <div ref={stickyMask} className={styles.stickyMask}>
            <div className="h-full relative  flex justify-center items-center">
            {/* <Image src={"/images/noise.jpg"} alt='texture' width={720} height={300} className=' absolute z-20 opacity-15 w-[72vw] h-[99vh] object-cover ' /> */}
            <video
              className="w-[72vw] h-[99vh] rounded-lg  z-10"
              autoPlay
              muted
              loop
              src="/videos/company-profile-video-for-infra-elevators-enwizage-films-1080-publer.io.mp4" // Replace with your video path
            />
            </div>
        </div>
      </div>
    </main>
  );
}
