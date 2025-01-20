import PanImage from '@/components/animated/PanImage';
import GetQuote from '@/components/custom/GetQuote';
import SmoothScroll from "@/components/custom/SmoothParrallax/page";
import Hero from "@/components/hero-reveal/Hero";
import LineWDets1 from "@/components/LineWDets1";
import Section1 from "@/components/Section1";
import Section2 from '@/components/Section2';


export default function Home() {
  return (
    <div id='main-content' className="w-full min-h-screen relative  !bg-[#070707]">
      <GetQuote/>
      <Hero/>
      <Section1/>
      <LineWDets1/>
      <SmoothScroll/>
      <PanImage/>
      <Section2/>
    </div>
  );
}
