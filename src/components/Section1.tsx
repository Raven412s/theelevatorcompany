import React from 'react';
import AnimatedText from './animated/AnimatedText';
import { BentoTilt } from './animated/Grid';
import Image from 'next/image';

const Section1 = () => {
  return (
    <div className="mb-32 mt-32"
    style={{
        backgroundImage: "url()"
    }}
    >
      <div className="grid gap-6  p-4 max-w-6xl  mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <BentoTilt>
                <div
                  className="rounded-lg h-[19rem] lg:!h-[41.5rem]  ">
                    {/* <Image src={'/images/product/felix.jpg'} alt='Felix - The Elevator Company' width={500} height={500} className='object-cover rounded-[2rem] repeat-0 object-center origin-top size-full absolute top-0 left-0 -z-10 blur-[2px] brightness-50'/> */}
                    <Image src={'/images/product/felix.jpg'} alt='Felix - The Elevator Company' width={500} height={500} className='object-contain rounded-[2rem] repeat-0 object-center origin-top  absolute top-0 left-1/2 -translate-x-1/2 z-[-8] brightness-90 '/>
                  <strong className="flex items-end justify-center h-full text-3xl md:text-5xl ml20 lg:text-6xl text-white pb-10 prime uppercase absolute left-12 bottom-10">
                    <AnimatedText className={""} phrase={"crafting precision for elevators"} />
                  </strong>
                </div>
              </BentoTilt>
<BentoTilt>
<div className="bg-white/10 backdrop-blur-md border size-full border-white/10 p-6 rounded-lg flex items-center">
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
              The Elevator Company has established itself as a leading name in the luxury elevator market. With over 23 years of industry experience, our team combines the expertise of seasoned professionals with the fresh perspective of a dynamic, young workforce. We are dedicated to elegance and innovation, which has led to our prestigious partnership with a renowned Italian brand. This Indo-Italian collaboration brings together the best of Italian design and engineering excellence, ensuring our clients receive state-of-the-art elevator technology alongside bespoke, sophisticated designs. Our elevators not only elevate spaces but also bring a touch of luxury that redefines modern living and working environments.
            </p>
          </div>
</BentoTilt>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BentoTilt>
        <div className="bg-white/10 backdrop-blur-md border size-full border-white/10 p-6 rounded-lg ">
            <h2 className="text-white text-xl md:text-2xl font-medium underline">Why choose us</h2>
            <p className="text-white/80 text-base md:text-lg lg:text-xl">
              Unmatched Expertise, After Sales Support, Sustainability Focus, Commitment to Safety, Innovative Solutions, Quality Craftsmanship.
            </p>
          </div>
        </BentoTilt>

        <BentoTilt>
         {/* Our Values Section */}
            <div className="bg-white/10 backdrop-blur-md border size-full   border-white/10 p-6 rounded-lg ">
              <h2 className="text-white text-xl md:text-2xl font-medium underline">Our Values</h2>
              <p className="text-white/80 text-base md:text-lg lg:text-xl text-justify">
                Integrity, Innovation, Excellence.
              </p>
            </div>
        </BentoTilt>
        </div>
      </div>
    </div>
  );
};

export default Section1;
