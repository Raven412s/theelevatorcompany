import AnimatedText from "@/components/animated/AnimatedText";
import Line from "@/components/custom/Line";
import HeroReveal from "@/components/hero-reveal/HeroReveal";
import SmoothScroll from "@/components/custom/SmoothParrallax/page"
export default function Home() {

  return (
    <div className="w-full min-h-screen relative">
        <HeroReveal/>
        <div>
              <div className="grid gap-3 p-4 max-w-6xl  h-[100vh] mx-auto">
                <div className="min-w-96 rounded-lg h-[70vh] col-span-2 flex gap-3 justify-between">
                  <div
                    className="w-[50vw] rounded-lg"
                    style={{
                      backgroundImage: `url('/images/interior/3.jpg')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundOrigin: "top",
                      backgroundPosition: "top",
                    }}
                  >
                    <strong className="text-5xl h-full flex justify-center pb-20 prime uppercase">
                      <AnimatedText phrase={"crafting precision for elevators"} />
                    </strong>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg w-full h-full">
                    <p className="text-2xl">
                      The Elevator Company has established itself as a leading name in the luxury elevator market. With over 23 years of industry experience, our team combines the expertise of seasoned professionals with the fresh perspective of a dynamic, young workforce. We are dedicated to elegance and innovation, which has led to our prestigious partnership with a renowned Italian brand. This Indo-Italian collaboration brings together the best of Italian design and engineering excellence, ensuring our clients receive state-of-the-art elevator technology alongside bespoke, sophisticated designs. Our elevators not only elevate spaces but also bring a touch of luxury that redefines modern living and working environments.
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg h-[20vh]">
                  <h2 className="text-white text-2xl font-medium underline">Why choose us</h2>
               <p className="text-white/80 text-2xl text-ellipsis">
                  Umatched Expertise,
                  After Sales Support,
                  Sustainability Focus,
                  Commitment to Safety,
                  Innovative Solutions,
                  Quality Craftsmanship.
               </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg h-[20vh]">
                  <h2 className="text-white text-2xl font-medium underline">Our Values</h2>
                  <p className="text-white/80 text-2xl text-justify">Integrity, Innovation, Excellence.</p>
                </div>
              </div>
            </div>
        <Line/>
        <div className="flex w-full gap-3 justify-between px-10 py-16">
          <h3 className="text-7xl mx-8 font-semibold max-w-[350px]"><AnimatedText phrase={"WHAT WE CREATE"}/></h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
          </svg>

      <div className="flex flex-col items-start w-3/5">
        <div className="flex justify-start items-end mb-6">
          <p className="text-2xl mt-2">Luxury Home Lifts</p>
          <div className="w-[1px] h-8 bg-gray-400 ml-5" />
          <p className="text-xl align-baseline  ml-6">
          FELIX, FELIX 2.0, CLIMBER X, PNEUMATIC VACUUM.
          </p>
        </div>
        <div className="flex justify-start items-end">
          <p className="text-2xl mt-2">Commercial Lifts</p>
          <div className="w-[1px] h-8 bg-gray-400 ml-[33px]" />
          <p className="text-xl align-baseline  ml-8">
          ELIVIO, ELIVIO 2.0, ELEVENTRA.
          </p>
        </div>
      </div>
      </div>
      <Line/>
      <SmoothScroll/>

    </div>
  );
}
