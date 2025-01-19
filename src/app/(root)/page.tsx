import AnimatedText from "@/components/animated/AnimatedText";
import PanImage from '@/components/animated/PanImage';
import InfiniteText from "@/components/custom/InfiniteText/InfiniteText";
import Line from "@/components/custom/Line";
import SmoothScroll from "@/components/custom/SmoothParrallax/page";
import HeroReveal from "@/components/hero-reveal/HeroReveal";
import LineContent1 from "@/components/LineContent1";
import Section1 from "@/components/Section1";
import Section2 from '@/components/Section2'


export default function Home() {
  return (
    <div className="w-full min-h-screen relative  !bg-[#070707]">
        <HeroReveal/>
        <Section1/>
        <Line/>
        <LineContent1/>
      <Line/>
    <SmoothScroll/>
    <PanImage/>
    {/* <InfiniteText/> */}
     <Section2/>
    </div>
  );
}
