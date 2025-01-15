'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function HeroReveal() {
  const container = useRef<HTMLDivElement | null>(null);
  const stickyMask = useRef<HTMLDivElement | null>(null);
  const initialMaskSize = 0.8;
  const targetMaskSize = 200;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    if (stickyMask.current) {
      stickyMask.current.style.webkitMaskSize =
        stickyMask.current.style.maskSize = `${(initialMaskSize + maskSizeProgress) * 100}%`;
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
      <div ref={container} className="relative h-[200vh] bg-[#141414] sm:!min-w-screen ">
        <div ref={stickyMask} className={styles.stickyMask}>
          <div className=""></div>
        </div>
      </div>
    </main>
  );
}
