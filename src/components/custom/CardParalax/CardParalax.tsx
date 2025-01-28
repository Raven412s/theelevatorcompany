'use client';
import { umbrellaPoints } from '@/data/index';
import Card from '@/components/animated/Card/index';
import { useScroll, MotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface usp {
  link: string;
  title: string;
  description: string;
  src: string;
  color: string;
  text: string;
  keyUSPs: string[]
}

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
        <h2 className={`text-center text-golden-400 absolute top-10 w-full lg:text-8xl text-4xl font-bold`}>What Makes Us Different</h2>
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
