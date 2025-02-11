"use client"
import { testimonials } from '@/data';
import React, { useState } from 'react'
import Bounded from '../common/Bounded';
import GridBackground from './GridBackground';



const Testimonials = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <GridBackground>
        <Bounded className="!flex !flex-col !items-center !justify-center !p-4 md:!p-8 !text-white ">
             <h2 className="text-center z-20 text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 to-neutral-950 uppercase">
                Testimonials
            </h2>
            <div className="p-4 flex flex-col"/>
          <div className="flex flex-wrap !w-full md:!w-[63rem] gap-4 md:gap-10">
            {testimonials.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="relative p-4 md:p-6 rounded-xl overflow-hidden flex flex-col justify-end border border-gray-700 h-[15rem] w-full md:w-[48%]"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <h2 className="text-2xl md:text-4xl mb-2 md:mb-3 font-bold relative z-10">{item.title}</h2>
                <p className="text-xs md:text-sm relative z-10">{item.subtitle}</p>
                <img
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-0' : 'opacity-100'}`}
                  src={item.imgSrc}
                  alt="Background"
                />
                <video
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted
                />
              </div>
            ))}
          </div>
          <div className="!w-full md:!w-[63rem] mt-10">
            <div
              key={testimonials[4].id}
              className="relative p-4 md:p-6 h-[15rem] rounded-xl overflow-hidden flex flex-col justify-end border border-gray-700 w-full"
              onMouseEnter={() => setHoveredId(testimonials[4].id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <h2 className="text-2xl md:text-4xl mb-2 md:mb-3 font-bold relative z-10">{testimonials[4].title}</h2>
              <p className="text-xs md:text-sm relative z-10">{testimonials[4].subtitle}</p>
              <img
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${hoveredId === testimonials[4].id ? 'opacity-0' : 'opacity-100'}`}
                src={testimonials[4].imgSrc}
                alt="Background"
                style={{
                    background: "#171717"
                }}
              />
              <video
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredId === testimonials[4].id ? 'opacity-100' : 'opacity-0'}`}
                src={testimonials[4].videoSrc}
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </Bounded>
        </GridBackground>
      );
    }


export default Testimonials
