"use client"
import { testimonials } from '@/data';
import React, { useState } from 'react'



const Testimonials = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="flex flex-wrap items-center justify-center  p-8  text-white gap-6">
          <div className="flex flex-wrap !w-[63rem] gap-10">
            {testimonials.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="relative p-6 rounded-xl overflow-hidden  flex flex-col justify-end border border-gray-700 h-[15rem] w-full lg:w-[48%]"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <h2 className="text-4xl mb-3 font-bold relative z-10">{item.title}</h2>
                <p className="text-sm relative z-10">{item.subtitle}</p>
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
          <div className="!w-[63rem] ">
            <div
              key={testimonials[4].id}
              className="relative p-6 h-[15rem]  rounded-xl overflow-hidden  flex flex-col justify-end border border-gray-700 w-full"
              onMouseEnter={() => setHoveredId(testimonials[4].id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <h2 className="text-4xl mb-3 font-bold relative z-10">{testimonials[4].title}</h2>
              <p className="text-sm relative z-10">{testimonials[4].subtitle}</p>
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
        </div>
      );
    }


export default Testimonials
