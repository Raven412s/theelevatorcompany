"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "../Magnetic";
import styles from "./style.module.scss";
import { AnimatedButtonProps } from "@/types";


const Index: React.FC<AnimatedButtonProps> = ({
  children,
  backgroundColor = "#dab74e",
  ...attributes
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize GSAP timeline
    timelineRef.current = gsap.timeline({ paused: true });
    timelineRef.current
      .to(
        circleRef.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(circleRef.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
  }, []);

  // Handle mouse enter
  const handleMouseEnter = () => {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    timelineRef.current?.tweenFromTo("enter", "exit");
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    timeoutIdRef.current = setTimeout(() => {
      timelineRef.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={`${styles.roundedButton}`}
        style={{ overflow: "hidden" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circleRef}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
};

export default Index;
