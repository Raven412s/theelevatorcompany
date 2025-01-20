'use client';
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

export default function AnimatedText({ phrase, className }) {
  const refs = useRef([]); // Array to store references to letters

  // Function to split words into `p` elements containing letters
  const splitWords = (phrase) => {
    refs.current = []; // Clear refs on every render to avoid duplicates
    return phrase.split(' ').map((word, wordIndex) => (
      <p
        className={`text-[3.5vw] m-0 mr-[1.5vw] font-semibold text-white ${className}`}
        key={`word_${wordIndex}`}
      >
        {splitLetters(word)}
      </p>
    ));
  };

  // Function to split letters into `span` elements
  const splitLetters = (word) => {
    return word.split('').map((letter, letterIndex) => (
      <span
        className="opacity-20"
        key={`letter_${letterIndex}`}
        ref={(el) => refs.current.push(el)}
      >
        {letter}
      </span>
    ));
  };

  // Intersection Observer
  const { ref: containerRef, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Run animation only once
  });

  // GSAP Animation
  useEffect(() => {
    if (inView && refs.current.length > 0) {
      const validRefs = refs.current.filter((el) => el !== null); // Ensure no null refs
      gsap.fromTo(
        validRefs,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: 'power3.out',
        }
      );
    }
  }, [inView]);

  return (
    <main
      className="flex items-end justify-center bg-transparent text-gray-900"
      ref={containerRef} // Attach observer to main container
    >
      <div className="w-full flex flex-wrap">{splitWords(phrase)}</div>
    </main>
  );
}
