"use client";
import { useState, MouseEvent } from "react";
import Image from "next/image";
import { services } from "@/data";
import GridBackground from "./GridBackground";
import Bounded from "../common/Bounded";

const InstallationIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="white">
    <path d="M192 32a1508 1508 0 0 0 12 0h2l15 1 1 3c2 20 2 20 11 37 5 3 9 3 15 4 4 0 7 2 10 3l6 3 5 3 9 4c6-2 11-6 16-9a497 497 0 0 1 11-7l5-3c3 1 6 2 8 5l2 1 1 2 2 1 10 10 2 2a162 162 0 0 1 13 14c1 3 0 5-1 8a128 128 0 0 1-5 9l-3 4a4863 4863 0 0 0-5 9l-2 3-1 2v4l1 2 1 2 1 2c7 12 11 25 15 38l12 3c-1 4-1 6-4 10l-1 3-2 3-4 6-2 4a1673 1673 0 0 0-15 26l-10 16-3 6-23 39-32 57-2 3c-3 5-6 8-12 10h-5c-6 1-11 2-15 6-5 9-7 21-8 32l-2 6-16 1h-3a2021 2021 0 0 1-19 0h-2l-14-1a1479 1479 0 0 1-6-23c-1-8-1-8-4-15-5-4-11-4-17-5l-12-5h-2l-8-5c-3-3-4-4-8-4-6 2-12 7-18 10l-9 6-3 2-4 1-10-8-2-2c-22-20-22-20-25-29l3-5 2-4 2-3a12138 12138 0 0 0 12-21l-3-5-8-17-1-2-7-22-3-1a12235 12235 0 0 1-25-6l-2-1-8-2-1-16v-3a2021 2021 0 0 1 0-19v-2l1-14 3-1c20-2 20-2 37-11 3-5 3-10 4-15 0-6 3-11 6-16l1-2 5-10v-5l-2-3-2-2a584 584 0 0 0-14-23c0-5 3-8 6-11l3-3 2-2 5-5a125 125 0 0 1 15-15l2-2 2-1h4l10 5 3 1 9 7 10 5c5-1 9-4 14-7l11-5 2-1 20-6 1-3a12235 12235 0 0 1 7-27l2-8zm-81 113-3 3a114 114 0 0 0-29 58 117 117 0 0 0 96 135 117 117 0 0 0 101-33l2-2c20-18 31-49 32-76a117 117 0 0 0-114-121c-32 0-62 13-85 36"></path>
    <path d="M444 70h9l-5 11-2 3-1 2a1477 1477 0 0 0-14 23l-2 3-3 5-3 10a357 357 0 0 0 11 18l1 2 1 4c17 2 17 2 33-2 4-4 5-9 7-14a2664 2664 0 0 0 12-21l1-3 4-6 1-3 2-2 4-3c11 19 16 39 10 61a116 116 0 0 1-3 9c-8 16-21 29-37 35a62 62 0 0 1-25 4 1320 1320 0 0 1-6 2l-5 11-2 2a1370 1370 0 0 1-43 75l-18 32-9 16-4 7-38 65-2 3a20221 20221 0 0 1-19 33c-14 24-14 24-24 28-11 1-20 1-29-5l-3-2c-6-6-9-13-10-21 0-11 5-20 10-29a1775 1775 0 0 0 7-11l10-17a13072 13072 0 0 1 100-173l2-4a1046 1046 0 0 0 12-21c8-11 8-11 12-23-1-5-3-8-6-11-4-7-5-16-4-24v-3q0-28.5 21-48l2-2c12-11 28-16 45-16m-42 127-3 6-2 3-9 15-10 17-3 7-2 3-9 16-4 7-2 3-51 88-2 3-13 23-2 3a4414 4414 0 0 0-12 22l-2 2-3 5-3 9 4 5h6c5-5 9-13 12-19a1405 1405 0 0 1 21-37l2-3a10228 10228 0 0 0 94-162l1-1 3-5 1-9c-5-5-7-5-12-1M259 445l-1 4 3 5 6 1 5-5c1-3 1-5-1-8-5-3-9-1-12 3m0-273c3 3 6 6 7 10 1 7 0 11-5 16l-6 6-2 3a2550 2550 0 0 1-66 65l-2 2c-4 5-8 8-14 8h-5c-6-2-11-8-16-12l-2-3a1907 1907 0 0 1-16-15l-2-2c-4-5-7-8-8-14 0-5 0-9 3-13 4-4 7-5 12-5h3c5 0 9 4 13 8l2 2a908 908 0 0 1 15 15l14-13 2-2 4-4 8-8a5971 5971 0 0 0 37-38l2-2c6-6 14-8 22-4"></path>
  </svg>
);

const iconMap = {
  installation: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/installation.svg"} className="w-12 h-12 mb-4 " />,
  modernization: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/modernization.svg"} className="w-12 h-12 mb-4 " />,
  maintenance: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/mechanic.svg"} className="w-12 h-12 mb-4 " />,
  design: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/customization.svg"} className="w-12 h-12 mb-4 " />,
  home: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/elevator.svg"} className="w-12 h-12 mb-4 " />,
  emergency: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/emergency-rescue.svg"} className="w-12 h-12 mb-4 " />,
  consultation: <Image width={50} height={50} alt="Classinary Icon" src={"/icons/consultation.svg"} className="w-12 h-12 mb-4 " />,
};

export default function Services() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <GridBackground>
    <Bounded className="!relative !w-full !px-10 !py-20">
      <h2 className="text-center text-8xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 uppercase">
        Our Services
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative border border-neutral-800 w-[300px] h-[300px] rounded-lg overflow-hidden group"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Background Media */}
            {hoveredItem === index && (
              <div className="absolute inset-0 w-full h-full transition-all duration-500">
                {service.src.endsWith(".mp4") ? (
                  <video
                    src={`/videos/${service.src}`}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={`/images/${service.src}`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text visibility */}
              </div>
            )}

            {/* Content */}
            <div className={`relative z-10 h-full p-6 flex flex-col justify-center items-center text-center
              ${hoveredItem === index ? 'bg-transparent' : 'bg-neutral-950'}
             transition-all duration-500`}>
              {service.icon && iconMap[service.icon as keyof typeof iconMap]}
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
    </GridBackground>
  );
}
