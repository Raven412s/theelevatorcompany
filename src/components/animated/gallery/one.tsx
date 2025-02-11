"use client";
import React, { useEffect } from "react";
import "@/styles/gallery.css";

const imageSources = [
  "/images/parrallax/1.jpg",
  "/images/parrallax/2.jpg",
  "/images/parrallax/3.jpg",
  "/images/parrallax/4.jpg",
  "/images/parrallax/5.jpg",
  "/images/parrallax/6.jpg",
  "/images/parrallax/7.jpg",
  "/images/parrallax/8.jpg",
  "/images/parrallax/9.jpg",
  "/images/parrallax/12.jpg",
];

const Page = () => {
  const imageCount = 10; // Number of images per container
  const containerCount = 5; // Number of containers

  useEffect(() => {
    let cosmos = document.querySelectorAll<HTMLDivElement>(".cosmos");
    if (!cosmos) return;

    let total = cosmos.length;

    cosmos.forEach((cosmosItem, i) => {
      let angle = (360 / total) * i;
      let transform = `rotate(${angle}deg) translate(55vh)`;
      cosmosItem.style.transform = transform;

      let cosmosItems = cosmosItem.querySelectorAll<HTMLDivElement>(".cosmic-item");
      cosmosItems.forEach((item, j) => {
        item.style.animationDelay = `${j * 0.5}s`;
        item.style.transform = "scale(1)"; // Ensure items are visible
      });
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center w-screen h-screen p-0 overflow-hidden">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold uppercase text-3xl m-0">
        THE <br /> ELEVATOR <br /> COMPANY
      </h1>
      <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-screen flex justify-center items-center overflow-hidden">
        {[...Array(containerCount)].map((_, containerIndex) => (
          <div key={containerIndex} className="cosmos absolute w-[120px] h-[200px]">
            {[...Array(imageCount)].map((_, index) => (
              <div key={index} className="cosmic-item absolute top-0 left-0 w-full h-full bg-neutral-500 origin-bottom transition-transform fall-and-dissappear">
                <img
                  src={imageSources[index % imageSources.length]} // Assign images dynamically
                  alt={`gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
