import BentoCard, { BentoTilt } from '@/components/animated/Grid'
import { TiLocationArrow } from 'react-icons/ti'

const Section2 = () => {
  return (
    <section className=" min-h-screen min-w-[100vw] bg-[#131415]  ">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular-web text-lg text-north-50">Rising Above the Ordinary</p>
                <p className="max-w-md font-circular-web text-lg text-north-50 opacity-50">
                    Experience innovation and reliability with our state-of-the-art elevator and lift solutions, designed to elevate your world with unmatched quality.
                </p>
            </div>
            <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-xl md:h-[65vh]">
                <BentoCard
                    src="videos/company-profile-video-for-infra-elevators-enwizage-films-1080-publer.io.mp4"
                    title={<>ele<b>v</b>ate</>}
                    description="Transforming vertical transportation with cutting-edge elevator solutions for residential, commercial, and industrial spaces."
                />
            </BentoTilt>
            <div className="grid h-[115vh] grid-cols-2 grid-rows-3 gap-7">
                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 rounded-xl">
                    <BentoCard
                        src="/images/interior/2.jpg"
                        title={<>se<b>c</b>ure</>}
                        description={"Engineered for safety, our elevators prioritize passenger protection with advanced security features."}
                    />
                </BentoTilt>
                <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 rounded-xl">
                    <BentoCard
                        src="/images/interior/3.jpg"
                        title={<>des<b>i</b>gn</>}
                        description={"Stylish and efficient, our elevators seamlessly blend functionality with modern aesthetics for any space."}
                    />
                </BentoTilt>
                <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                    <BentoCard
                        src="/images/parrallax/4.jpg"
                        title={<>as<b>c</b>end</>}
                        description={"Tailored solutions for diverse needs, ensuring smooth vertical transportation for every environment."}
                    />
                </BentoTilt>
                <BentoTilt className="bento-tilt_2">
                    <div className="flex size-full flex-col justify-between bg-west-300 p-5">
                        <h1 className="bento-title special-font max-w-64 lg:!text-4xl !text-4xl text-black">
                            Mo<b>r</b>e co<b>m</b>ing s<b>oo</b>n!
                        </h1>
                        <TiLocationArrow className="m-5 scale-[5] self-end" />
                    </div>
                </BentoTilt>
                <BentoTilt className="bento-tilt_2">
                    <BentoCard
                        src="/images/interior/5.jpg"
                        title={<>inn<b>o</b>vate</>}
                        description={"Pioneering the future of vertical mobility with sustainable and intelligent elevator solutions."}
                    />
                </BentoTilt>
            </div>
        </div>
    </section>
  )
}

export default Section2
