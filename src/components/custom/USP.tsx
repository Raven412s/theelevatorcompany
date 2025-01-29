"use client";
import Line from "@/components/custom/Line";
import ScrollBasedMarquee from "@/components/custom/ScrollBasedMaruee/ScrollBasedMaruee";
import { features } from "@/data";
import React from "react";



const USP: React.FC = () => {



      const chunkSize = Math.ceil(features.length / 3);
      const firstChunk = features.slice(0, chunkSize);
      const secondChunk = features.slice(chunkSize, chunkSize * 2);
      const thirdChunk = features.slice(chunkSize * 2);

  return (
    <>
          <div className="text-center mt-24">
        <h2 className="font-bold mb-8 font-Style-Script lg:text-8xl text-4xl underline-offset-[1rem] underline">What Makes Us Different</h2>
      </div>
      <Line gap="mt-12" />
      <ScrollBasedMarquee
      gap={5}
        text={[
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
        ]}
        componentClass="text-lg text-golden-400"
      />
      <Line gap="mt-5" />



      <div className="flex flex-col justify-center items-center gap-8 mt-4 w-full">
  {/* First Marquee: Default left scroll */}
  <ScrollBasedMarquee
    text={firstChunk}
    gap={10}
    componentClass="text-3xl md:text-4xl lg:text-6xl font-Style-Script py-3"
    direction="left"
  />

  {/* Second Marquee: Right scroll */}
  <ScrollBasedMarquee
    text={secondChunk}
    gap={10}
    componentClass="text-3xl md:text-6xl lg:text-6xl font-Style-Script py-3"
    direction="right"
  />

  {/* Third Marquee: Default left scroll */}
  <ScrollBasedMarquee
    text={thirdChunk}
    gap={10}
    componentClass="text-3xl md:text-4xl lg:text-6xl font-Style-Script py-3"
    direction="left"
  />
</div>


      <Line gap="mt-12" />
      <ScrollBasedMarquee
      gap={5}
        text={[
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
          " The Elevator Company",
          `-`,
        ]}
        componentClass="text-lg text-golden-400"
      />
      <Line gap="mt-5" />
    </>
  );
};

export default USP;
