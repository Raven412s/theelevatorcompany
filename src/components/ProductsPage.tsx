"use client"
import GetQuote from "@/components/custom/GetQuote";
import { Button } from "@/components/ui/button";
import { commercialLifts, luxuryHomeLifts } from "@/data";
import { handleClickForLearnMore } from "@/functions";
import { useRouter } from "next/navigation";
import { Separator } from "./ui/separator";

export default function ProductsPage() {
    const router = useRouter()
  return (
    <div className="w-full min-h-screen ">
      <GetQuote />
      {/* Product Categories */}
      <section className="py-12 px-8  flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold text-center mb-8  bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 gold-hover-btn ">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Luxury Home Lifts */}
          <div className="border shadow-behind border-neutral-800 rounded-lg shadow-lg  p-6 bg-neutral-900">
            <h3 className="text-3xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 gold-hover-btn ">Luxury Home Lifts</h3>
            <p className="text-gray-300 mb-6">
              Elevate your living experience with our range of luxury home lifts. Designed for style, comfort, and performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {luxuryHomeLifts.map((lift, index) => (
                <div key={index} className="relative bg-neutral-800/60 border border-neutral-700  shadow-lg min-h-[432px] rounded-lg overflow-hidden">
                  <img
                    src={lift.image}
                    alt={lift.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex gap-2 flex-wrap items-end justify-start">
                    <h1 className="text-2xl font-semibold  bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 gold-hover-btn">{lift.name.replace(/-/g, ' ')}</h1>
                    <Separator orientation="vertical" className="m-0 p-0 h-8 w-[2px] bg-golden-400/20" />
                    <h1 className="text-lg font-semibold m-0 p-0 bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 uppercase">{lift.type}</h1>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">{lift.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {lift.features.map((feature, idx) => (
                        <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-700 border border-neutral-600 text-gray-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button
                     onClick={() => handleClickForLearnMore(lift, router)}
                     className="px-4 py-2 bg-yellow-400 left-1/2 -translate-x-1/2 bottom-3 absolute text-black rounded-md hover:bg-yellow-500">
                        Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Lifts */}
          <div className="bg-neutral-900 shadow-behind border border-neutral-800 rounded-lg  p-6 ">
            <h3 className="text-3xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 gold-hover-btn ">Commercial Lifts</h3>
            <p className="text-gray-300 mb-6">
              Optimize your building's efficiency with our robust and reliable commercial elevators, built to last.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {commercialLifts.map((lift, index) => (
                <div key={index} className="relative bg-neutral-800/60 border border-neutral-700  min-h-[432px] rounded-lg overflow-hidden">
                  <img
                    src={lift.image}
                    alt={lift.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                  <div className="flex gap-2 flex-wrap">
                    <h1 className="text-2xl font-semibold  bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 gold-hover-btn">{lift.name.replace(/-/g, ' ')}</h1>
                    <Separator orientation="vertical" className="m-0 p-0 h-8 w-[2px] bg-golden-400/20" />
                    <h1 className="text-lg font-semibold m-0 p-0 bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 uppercase">{lift.type}</h1>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">{lift.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {lift.features.map((feature, idx) => (
                        <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-700 border border-neutral-600 text-gray-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button
                     onClick={() => handleClickForLearnMore(lift, router)}
                     className="px-4 py-2 bg-yellow-400 absolute left-1/2 -translate-x-1/2 bottom-3 text-black rounded-md hover:bg-yellow-500">
                        Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-gradient-to-b from-yellow-200 via-golden-400 to-[#141516] text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Elevator?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Contact us today to discuss your needs and get a customized solution for your building.
        </p>
        <Button className="px-6 py-3 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-yellow-500">
          Get a Quote
        </Button>
      </section>
    </div>
  );
}
