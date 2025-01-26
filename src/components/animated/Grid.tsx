"use client";
import { useRef } from "react";

interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    itemRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
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

interface BentoCardProps {
  src: string;
  title: React.ReactNode; // Accept React elements or strings for the title
  description?: string;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  const isVideo = src.endsWith(".mp4");

  return (
    <div className="relative w-full h-full">
    {isVideo ? (
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center transition-transform duration-300 ease-in-out transform scale-100 brightness-75 group-hover:scale-105 group-hover:brightness-100"
        aria-label={`Video for ${typeof title === "string" ? title : "content"}`}
      />
    ) : (
      <img
        src={src}
        alt={typeof title === "string" ? title : "Media content"}
        className="absolute left-0 top-0 size-full object-cover object-center transition-transform duration-300 ease-in-out transform scale-100 brightness-75 group-hover:scale-105 group-hover:brightness-100"
      />
    )}
    <div className="relative z-10 w-full h-full flex flex-col justify-between p-2 text-white">
      <div>
        <h1 className="bento-title special-font text-2xl md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-xs text-xs md:text-sm">{description}</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default BentoCard;
