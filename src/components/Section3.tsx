"use client"

import CardParallax from "./custom/CardParalax/CardParalax";
import USP from "./custom/USP";

const Section3 = () => {

    const features = [
        "Italian designs",
        "Vastu compliance",
        "Customisable Cabins",
        "Cost efficient",
        "Low Energy Consumption",
        "Innovative",
        "Reliable",
        "Efficient",
        "Modern",
        "Lift Automation",
        "Tailored Solutions",
        "Internationally certified",
        "194 safety parameters",
        "TUV SUD Certified",
        "Imported Machinery",
        "Smooth and Quiet Operation",
        "Flexibility in Installation",
        "Space Saving Design",
        "Voice Command Enabled",
        "Safe for all Age",
      ];

  return (
    <>
        <div className="relative">
        <CardParallax/>
        </div>
        <div className="block lg:hidden">
            <USP/>
        </div>

    </>
  )
}

export default Section3
