'use client';
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { AnimatedTextProps } from '@/types';

export default function AnimatedText({ phrase, className = '' }: AnimatedTextProps) {
  const refs = useRef<HTMLSpanElement[]>([]); // Store references to individual letters

  // Splits a phrase into words and renders each word as a `<p>` element containing letter `<span>`s
  const renderWords = (phrase: string) => {
    refs.current = []; // Clear refs on every render to avoid duplicates
    return phrase.split(' ').map((word, wordIndex) => (
      <p
        className={`text-[3.5vw] m-0 mr-[1.5vw] font-semibold text-white ${className}`}
        key={`word_${wordIndex}`}
      >
        {renderLetters(word)}
      </p>
    ));
  };

  // Splits a word into individual letter `<span>` elements
  const renderLetters = (word: string) => {
    return word.split('').map((letter, letterIndex) => (
      <span
        className="opacity-20"
        key={`letter_${letterIndex}`}
        ref={(el) => {
          if (el) refs.current.push(el); // Safely add the element to refs
        }}
      >
        {letter}
      </span>
    ));
  };

  // Intersection Observer for triggering the animation when the component is in view
  const { ref: containerRef, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
    triggerOnce: true, // Run animation only once
  });

  // GSAP animation for letters
  useEffect(() => {
    if (inView && refs.current.length > 0) {
      const validRefs = refs.current.filter(Boolean); // Ensure no null refs
      gsap.fromTo(
        validRefs,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1, // Delayed animation for each letter
          duration: 2,
          ease: 'power3.out',
        }
      );
    }
  }, [inView]);

  return (
    <main
      className="flex items-end justify-center bg-transparent text-gray-900"
      ref={containerRef} // Attach Intersection Observer to the container
    >
      <div className="w-full flex flex-wrap">{renderWords(phrase)}</div>
    </main>
  );
}
