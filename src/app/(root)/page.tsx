import Line from "@/components/custom/Line";
import HeroReveal from "@/components/hero-reveal/HeroReveal";
import Image from "next/image";

export default function Home() {

  return (
    <div className="w-full min-h-screen relative pt-[4rem]">
        {/* <video autoPlay muted loop className="w-screen object-cover h-screen absolute top-0 left-0 -z-10 opacity-100 " >
            <source src="/videos/company-profile-video-for-infra-elevators-enwizage-films-1080-publer.io.mp4" type="video/mp4"/>
        </video>
        <div className="flex items-center gap-20 justify-center flex-col bg-black/40 min-h-screen">
            <h1 id="hero-h1" className="text-[7vw] text-center w-full uppercase leading-tight   ">The Elevator Company</h1>
            <p>let us elevate you</p>
        </div> */}
        <HeroReveal/>
        <Line/>

    </div>
  );
}
