import BentoCard, { BentoTilt } from '@/components/animated/Grid';
import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const Section2 = () => {
  return (
    <section className="min-h-screen min-w-[100vh] pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-north-50">Into the Metagame Layer</p>
          <p className="max-w-md font-circular-web text-lg text-north-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-xl md:h-[65vh]">
          <BentoCard
            src="videos/company-profile-video-for-infra-elevators-enwizage-films-1080-publer.io.mp4"
            title={<>radia<b>n</b>t</>}
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 rounded-xl">
            <BentoCard
              src="/images/interior/2.jpg"
              title={<>Zig<b>m</b>a</>}
              description={"An anime and gaming-inspired NFT collection - the IP primed for expansion."}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 rounded-xl">
            <BentoCard
              src="/images/interior/3.jpg"
              title={<>N<b>e</b>xus</>}
              description={"A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/images/interior/4.png"
              title={<>az<b>u</b>l</>}
              description={"A cross-world AI Agent - elevating your gameplay to be more fun and productive."}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-west-300 p-5">
              <h1 className="bento-title special-font max-w-64 lg:!text-7xl !text-6xl text-black">
                Mo<b>r</b>e co<b>m</b>ing s<b>oo</b>n!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src="/images/interior/5.jpg"
              title={<>az<b>u</b>l</>}
              description={"A cross-world AI Agent - elevating your gameplay to be more fun and productive."}
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Section2;
