'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;

    if (logo) {
      // Heartbeat and fade-out animation for logo
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          logo,
          { scale: 1, opacity: 1 },
          {
            scale: 1.6, // Heartbeat effect
            duration: 0.8,
            ease: 'easeInOut',
            repeat: 1, // Repeat once (heartbeat pulse)
            yoyo: true,
          }
        )
        .to(logo, {
          opacity: 0, // Fade-out animation
          duration: 1,
          zIndex: -1000, // Move it out of view
          onComplete: () => {
            const content = document.getElementById('main-content');
            if (content) {
              // Fade-in main content after the logo animation
              gsap.to(content, {
                opacity: 1,
                duration: 1,
              });
            }
          },
        });
    }
  }, []);

  return (
    <div>
      {/* Animated logo overlay */}
      <div
        ref={logoRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] flex items-center justify-center"
      >
        <div className="w-48 aspect-square">
          <img
            src="/images/the-elevator-company.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main content, initially hidden */}
      <div
        id="main-content"
        className="opacity-0 transition-opacity duration-1000"
      >
        {children}
      </div>
    </div>
  );
}
