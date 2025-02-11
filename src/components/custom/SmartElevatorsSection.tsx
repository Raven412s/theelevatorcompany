import React from "react";
import GridBackground from "./GridBackground";

const SmartElevatorsSection = () => {
  return (
    <GridBackground>
    <section className="relative flex flex-col items-center justify-center w-full py-16 ">
      <h2 className="text-center z-20 text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 to-neutral-950 uppercase">
        Elevators of the Future
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 w-full px-4">
        {["/videos/video1.mp4", "/videos/video1.mp4", "/videos/video1.mp4"].map((src, index) => (
          <div key={index} className="relative flex items-center justify-center object-center overflow-hidden  w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-[700px]">
            <video
              src={src}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-[150%] h-[150%] origin-center  object-cover -translate-y-36"
            />
            {/* <div className="w-full h-full bg-blue-500 flex "></div> */}
            <img
              src="/images/videoMask.svg"
              alt=""
              className="absolute inset-0 w-full h-full z-10 mix-blend-multiply"
            />
          </div>
        ))}
      </div>
    </section>
    </GridBackground>
  );
};

export default SmartElevatorsSection;
