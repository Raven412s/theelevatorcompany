"use client";

import { ScrollBasedMarqueeProps } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ScrollBasedMarquee: React.FC<ScrollBasedMarqueeProps> = ({
  componentClass,
  logos,
  text,
  gap = 1,
  direction = "left",
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // Set the container width on mount and resize
    const updateContainerWidth = () => {
      if (marqueeRef.current) {
        setContainerWidth(marqueeRef.current.offsetWidth);
      }
    };

    updateContainerWidth();

    window.addEventListener("resize", updateContainerWidth);
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  // Dynamic marquee animation based on direction
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? [0, -containerWidth] : [-containerWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const renderText = () => {
    if (Array.isArray(text)) {
      return (
        <>
          {text.map((t, index) => (
            <span
              key={index}
              className={`${componentClass}`}
              style={{ marginLeft: `${gap}rem` }}
            >
              {t}
            </span>
          ))}
          {text.map((t, index) => (
            <span
              key={`repeat-${index}`}
              className={`${componentClass}`}
              style={{ marginRight: `${gap}rem` }}
            >
              {t}
            </span>
          ))}
        </>
      );
    }
    return (
      <span
        className={`${componentClass}`}
        style={{ marginLeft: `${gap}rem` }}
      >
        {text}
      </span>
    );
  };

  return (
    <div ref={marqueeRef} className="overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="flex items-center"
        animate="animate"
        initial={{ x: direction === "right" ? -containerWidth : 0 }} // Initial position for "right" direction
        variants={marqueeVariants}
      >
        {logos &&
          logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-12 mx-4"
            />
          ))}
        {text && renderText()}
      </motion.div>
    </div>
  );
};

export default ScrollBasedMarquee;
