"use client";
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

export const BentoTilt = ({ children, className = "" }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!itemRef.current) return;
      const { left, top, width, height } = itemRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;

      const tiltX = (relativeY - 0.5) * 15;
      const tiltY = (relativeX - 0.5) * -15;

      gsap.to(itemRef.current, {
        duration: 0.3,
        rotationX: tiltX,
        rotationY: tiltY,
        scale: 0.9,
        transformOrigin: 'center center',
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(itemRef.current, {
        duration: 0.3,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        ease: 'power3.out',
      });
    };

    const currentRef = itemRef.current;
    currentRef.addEventListener('mousemove', handleMouseMove);
    currentRef.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      currentRef.removeEventListener('mousemove', handleMouseMove);
      currentRef.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={className}
      ref={itemRef}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
    return (
      <div className="relative size-full">
        {src.endsWith('.mp4') ? (
          <video src={src} loop muted autoPlay className="absolute left-0 top-0 size-full object-cover object-center" />
        ) : (
          <img src={src} alt={title} className="absolute left-0 top-0 size-full object-cover object-center" />
        )}
        <div className="relative z-10 size-full flex-col flex justify-between p-5 text-north-50">
          <div className="">
            <h1 className="bento-title special-font">{title}</h1>
            {description && (
              <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

export default BentoCard
