'use client';
import { umbrellaPoints } from '@/data/index';
import Card from '@/components/animated/Card/index';
import { useScroll, MotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { usp } from '@/types';


export default function CardParallax() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    // Animation frame callback
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Clean up the Lenis instance on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="py-[15rem] sticky top-[25%] ">
      {umbrellaPoints.map((usp: usp, i: number) => {
        const targetScale = 1 - (umbrellaPoints.length - i) * 0.01;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            url={usp.link}
            title={usp.title}
            description={usp.description}
            src={usp.src}
            color={usp.color}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            textColor={usp.text}
            keyUsp={usp.keyUSPs}
          />
        );
      })}
    </main>
  );
}
