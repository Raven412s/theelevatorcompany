import AnimatedText from "@/components/animated/AnimatedText";
import GetQuote from "@/components/custom/GetQuote";
import Line from "@/components/custom/Line";
import HeroReveal from "@/components/hero-reveal/HeroReveal";
import Image from "next/image";

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
                      <AnimatedText phrase={"crafting precision for elevators"} animationDelay={800} />
                    </strong>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg w-full h-full">
                    <p className="text-2xl">
                      The Elevator Company has established itself as a leading name in the luxury elevator market. With over 23 years of industry experience, our team combines the expertise of seasoned professionals with the fresh perspective of a dynamic, young workforce. We are dedicated to elegance and innovation, which has led to our prestigious partnership with a renowned Italian brand. This Indo-Italian collaboration brings together the best of Italian design and engineering excellence, ensuring our clients receive state-of-the-art elevator technology alongside bespoke, sophisticated designs. Our elevators not only elevate spaces but also bring a touch of luxury that redefines modern living and working environments.
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg h-[20vh]">
                  <h2 className="text-white text-xl font-semibold">Glassmorphism Card</h2>
                  <p className="text-white/80">This is a glassy effect with transparency and blur.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg h-[20vh]">
                  <h2 className="text-white text-xl font-semibold">Glassmorphism Card</h2>
                  <p className="text-white/80">This is a glassy effect with transparency and blur.</p>
                </div>
              </div>
            </div>
        <Line/>

    </div>
  );
}
