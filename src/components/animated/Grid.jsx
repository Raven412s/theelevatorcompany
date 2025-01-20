"use client";
import { useRef } from 'react';

export const BentoTilt = ({ children, className = "" }) => {
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
      if (!itemRef.current) return;

      const { left, top, width, height } = itemRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - left) / width; // Normalize X coordinate
      const relativeY = (e.clientY - top) / height; // Normalize Y coordinate

      const tiltX = (relativeY - 0.5) * 20; // Tilt strength along X-axis
      const tiltY = (relativeX - 0.5) * -20; // Tilt strength along Y-axis

      itemRef.current.style.transform = `
        perspective(1000px)
        rotateX(${tiltX}deg)
        rotateY(${tiltY}deg)
        scale(1.05)
      `;
    };

    const handleMouseLeave = () => {
      if (!itemRef.current) return;
      itemRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
      <div
        className={`relative transition-transform duration-300 z-40 ease-out ${className}`}
        ref={itemRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    );
  };


  const BentoCard = ({ src, title, description }) => {
    return (
      <div className="relative size-full group">
        {src.endsWith('.mp4') ? (
          <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center transition-transform duration-300 ease-in-out transform scale-100 brightness-75 group-hover:scale-105 group-hover:brightness-100"
          />
        ) : (
          <img
            src={src}
            alt={title}
            className="absolute left-0 top-0 size-full object-cover object-center transition-transform duration-300 ease-in-out transform scale-100 brightness-75 group-hover:scale-105 group-hover:brightness-100"
          />
        )}
        <div className="relative z-10 size-full flex-col flex justify-between md:!p-2 !p-1 text-north-50">
          <div>
            <h1 className="bento-title special-font md:!text-4xl  !text-2xl">{title}</h1>
            {description && (
              <p className="mt-3 max-w-64 text-xs md:!text-[0.8rem] ">{description}</p>
            )}
          </div>
        </div>
      </div>
    );
  };


export default BentoCard
