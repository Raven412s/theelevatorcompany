"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from '@/components/animated/AnimatedTitle'
import AnimatedText from './AnimatedText';
gsap.registerPlugin(ScrollTrigger);
const PanImage = () => {
    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin:true,
                pinSpacing: true
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: "100vw",
            height: '100vh',
            borderRadius: 0
        })
    })
  return (
<div id="about" className='min-h-screen w-screen'>
    <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px] flex flex-col gap-[8vh]  items-center justify-center">
        {/* <AnimatedTitle title={"<b>T</b>he Eleva<b>t</b>or <br /> C<b>o</b>mpany"} containerClass={"mt-5 !text-black text-center"} /> */}
        <AnimatedText className={"!text-[5vw] !font-black text-golden-400"} phrase={"The Elevator Company"} />
        <AnimatedText className={"!text-[5vw] !font-black text-golden-400"} phrase={""} />
        </h2>
        <div className="about-subtext">
            <p>Leading the industry with innovative and reliable elevator solutions.</p>
            <p>Tailored systems ensuring efficiency, safety, and seamless mobility.</p>
        </div>
    </div>
    <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
            <img src="/images/interior/2.jpg" alt="background" className='absolute left-0 top-0 size-full object-cover ' />
        </div>
    </div>
</div>

  )
}

export default PanImage
