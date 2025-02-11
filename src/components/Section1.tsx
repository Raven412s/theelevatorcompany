"use client";
import React from "react";
import AnimatedText from "./animated/AnimatedText";
import { BentoTilt } from "./animated/Grid";
import Image from "next/image";
import Bounded from "./common/Bounded";

const Section1 = () => {
  return (
    <Bounded className="!mt-24">
      <div className="grid gap-6 p-4 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BentoTilt>
            <div className="relative rounded-lg h-[43rem] flex flex-col">
              <div className="relative w-full h-full overflow-hidden ">
                <Image
                  src={"/images/product/felix.jpg"}
                  alt="Felix - The Elevator Company"
                  width={560}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover rounded-[2rem] brightness-90"
                />
              </div>
              <strong className="absolute bottom-10 left-12 text-3xl md:text-5xl lg:text-6xl text-white prime uppercase">
                <AnimatedText phrase="Crafting Precision for Elevators" />
              </strong>
            </div>
          </BentoTilt>

          <BentoTilt>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg flex flex-col gap-6 items-center h-full">
            <h1 className="text-5xl font-bold">OUR STORY</h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                The Elevator Company has established itself as a leading name in the
                luxury elevator market. With over 23 years of industry experience, our
                team combines seasoned expertise with the fresh perspective of a
                dynamic, young workforce. We are dedicated to elegance and innovation,
                leading to our prestigious partnership with a renowned Italian brand.
                This Indo-Italian collaboration blends Italian design and engineering
                excellence, delivering state-of-the-art elevator technology alongside
                bespoke, sophisticated designs.
              </p>
            </div>
          </BentoTilt>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BentoTilt>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg h-full flex flex-col">
              <h2 className="text-white text-xl md:text-2xl font-medium underline">
                Why Choose Us
              </h2>
              <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed mt-2">
                Unmatched Expertise, After-Sales Support, Sustainability Focus,
                Commitment to Safety, Innovative Solutions, and Quality Craftsmanship.
                We provide <span className="font-semibold">smart elevators</span> with{" "}
                <span className="font-semibold">competitive pricing</span>,{" "}
                <span className="font-semibold">error-free performance</span>, and{" "}
                <span className="font-semibold">customizable cabins</span> tailored to
                your needs. Our <span className="font-semibold">AI-assisted, energy-efficient</span> designs
                ensure a seamless experience, enhancing your{" "}
                <span className="font-semibold">lifespace with advanced vertical mobility solutions</span>.
              </p>
            </div>
          </BentoTilt>

          <BentoTilt>
            {/* Our Values Section */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg h-full flex flex-col">
              <h2 className="text-white text-xl md:text-2xl font-medium underline">
                Our Values
              </h2>
              <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed mt-2">
                Integrity, Innovation, Excellence. We are committed to delivering{" "}
                <span className="font-semibold">internationally certified, TÜV SÜD-certified</span> solutions
                with <span className="font-semibold">error-free performance</span> and{" "}
                <span className="font-semibold">advanced vertical mobility</span>. Our designs
                prioritize <span className="font-semibold">safety, efficiency, and smart automation</span>,
                ensuring <span className="font-semibold">low energy consumption</span> and{" "}
                <span className="font-semibold">smooth, quiet operation</span>.
              </p>
            </div>
          </BentoTilt>
        </div>
      </div>
    </Bounded>
  );
};

export default Section1;
