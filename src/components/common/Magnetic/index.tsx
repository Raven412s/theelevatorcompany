"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MagneticWrapperProps } from "@/types";

const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ children }) => {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!magneticRef.current) return;

    const xTo = gsap.quickTo(magneticRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magneticRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = magneticRef.current!.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const element = magneticRef.current;
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magneticRef });
};

export default MagneticWrapper;
