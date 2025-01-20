'use client';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export default function GetQuote() {
  const [offsetTop, setOffsetTop] = useState(0); // State to track top offset

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll speed factor (e.g., 0.2 makes it slower)
      const scrollSpeedFactor = 0.2;

      // Get the maximum allowable scroll offset
      const maxOffset = window.innerHeight - 110; // Adjust based on your div height (128px for h-32)

      // Calculate the scroll position and slow it down
      const scrollPosition = Math.min(Math.max(window.scrollY * scrollSpeedFactor, 0), maxOffset);

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
    <>
      <div
        className="fixed-top-right top-7 right-5 fixed z-[9999] text-white rounded-lg flex items-center justify-center shadow-lg transition-transform"
        style={{
          transform: `translateY(${offsetTop}px)`,
        }}
      >
        <a
          href="https://wa.me/6393883250?text=Hello%20there!%20I%20wanted%20to%20contact%20you."
          target="_blank"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          <Button size={"icon"} className='rounded-xl bg-golden-400'>
            <Quote />
          </Button>
        </a>
      </div>
    </>
  );
}
