"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { TextureLoader, Group, Texture } from "three";
import gsap from "gsap";
import { useScroll, ScrollControls } from "@react-three/drei";

const images = [
    "/images/parrallax/1.jpg",
    "/images/parrallax/2.jpg",
    "/images/parrallax/3.jpg",
    "/images/parrallax/4.jpg",
    "/images/parrallax/5.jpg",
    "/images/parrallax/6.jpg",
    "/images/parrallax/7.jpg",
    "/images/parrallax/8.jpg",
    "/images/parrallax/9.jpg",
    "/images/parrallax/12.jpg",
];

const CylindricalGallery = () => {
  const groupRef = useRef<Group>(null);
  const scroll = useScroll() || { offset: 0 }; // Ensure scroll is not null
  const [textures, setTextures] = useState<Texture[]>([]);

  useEffect(() => {
    const loader = new TextureLoader();
    setTextures(images.map((src) => loader.load(src)));
  }, []);

  useFrame(() => {
    if (groupRef.current && scroll) {
      gsap.to(groupRef.current.rotation, {
        y: -scroll.offset * Math.PI * 2, // Rotates based on scroll
        ease: "power2.out",
        duration: 0.5,
      });
    }
  });

  return (
    <group ref={groupRef}>
      {textures.map((texture, i) => {
        const angle = (i / textures.length) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 3, 0, Math.sin(angle) * 3]}
            rotation={[0, angle * 0.25 * Math.PI, 0]}
          >
            <planeGeometry args={[2, 3]} />
            <meshBasicMaterial map={texture} side={2} />
          </mesh>
        );
      })}
    </group>
  );
};

const HeroGallery = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <Canvas camera={{ position: [4, 0, 5] }}>
        <ambientLight intensity={1} />
        <ScrollControls pages={4} damping={0.25}>
          <CylindricalGallery />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default HeroGallery;
