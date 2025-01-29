"use client"
import React, { PropsWithChildren, useEffect } from 'react'
import Navbar from '../Navbar'
import Contact from '../custom/Contact'
import Lenis from '@studio-freight/lenis'

const NavFooterWrapper = ({children}: PropsWithChildren) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar/>
      {children}
      <Contact/>
    </div>
  )
}

export default NavFooterWrapper
