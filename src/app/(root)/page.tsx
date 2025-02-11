import PanImage from '@/components/animated/PanImage';
import GetQuote from '@/components/custom/GetQuote';
import GridBackground from '@/components/custom/GridBackground';
import Services from '@/components/custom/Services';
import SmartElevatorsSection from '@/components/custom/SmartElevatorsSection';
import SmoothScroll from "@/components/custom/SmoothParrallax/page";
import Testimonials from '@/components/custom/Testimonials';
import Hero from "@/components/hero-reveal/Hero";
import LineWDets1 from "@/components/LineWDets1";
import Section1 from "@/components/Section1";
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function Home() {
  return (
    <div id='main-content' className="w-full min-h-screen relative  flex flex-col gap-20 ">
      <GetQuote/>
      <Hero/>
      <Section1/>
      <LineWDets1/>
      <SmoothScroll/>
      <PanImage/>
      <SmartElevatorsSection/>
      <Section2/>
      <Section3/>
        <div className="flex flex-col items-center justify-center">
        <Services />
        <Testimonials/>
        </div>
      <div className="flex h-screen "></div>

    </div>
  );
}
