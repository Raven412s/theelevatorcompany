'use client';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { TiContacts } from 'react-icons/ti';
import { Quote } from 'lucide-react';

export default function GetQuote() {
  const [offsetTop, setOffsetTop] = useState(0); // State to track top offset

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the maximum offset to ensure the div stays within the viewport
      const maxOffset = window.innerHeight - 80; // Adjust the value based on div height (e.g., 128px for h-32)
      const scrollPosition = Math.min(window.scrollY, maxOffset);
      setOffsetTop(scrollPosition);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed-top-right top-7 right-8  fixed z-[9999]  text-white rounded-lg flex items-center justify-center shadow-lg transition-transform"
      style={{
        transform: `translateY(${offsetTop}px)`,
      }}
    >
         <a
         href="https://wa.me/6393883250?text=Hello%20there!%20I%20wanted%20to%20contact%20you."
         target="_blank"
         style={{color: "green", textDecoration: "none", fontWeight: "bold"}}>
      <Button className='rounded-xl bg-golden-400' ><Quote/></Button>
      </a>
    </div>
  );
}
