'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Template({ children }: { children: React.ReactNode }) {
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Heartbeat Animation and Fade Out
    const logo = logoRef.current

    if (logo) {
      const tl = gsap.timeline()

      tl.from(logo, {
        scale: 1,
        opacity: 1,
      })

      tl.to(logo, {
        scale: 1.6, // Initial scale for heartbeat
        duration: 0.8,
        ease: "easeInOut",
        repeat: 1, // Only one repeat for heartbeat
        yoyo: true,
      }).to(logo, {
        opacity: 0, // Fade out
        duration: 1,
        delay: 0, // Delay to allow heartbeat effect to finish
        zIndex: -1000,
        onComplete: () => {
          // After fading out, show the main content
          const content = document.getElementById('main-content')
          if (content) {
            gsap.to(content, {
              opacity: 1,
              duration: 1,
            })
          }
        },
      })
    }
  }, [])

  return (
    <div>
      <div
        ref={logoRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] flex items-center justify-center"
        style={{ opacity: 1 }}
      >
        {/* Logo with square aspect ratio */}
        <div className="w-48 aspect-square">
          <img
            src="/images/the-elevator-company.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main content */}
      <div id="main-content" className="opacity-0 transition-opacity duration-1000">
        {children}
      </div>
    </div>
  )
}
