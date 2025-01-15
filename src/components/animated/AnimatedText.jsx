'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function AnimatedText({ phrase, animationDelay = 0 }) {
  const refs = useRef([]); // Array to store references to letters

  // Function to split words into `p` elements containing letters
  const splitWords = (phrase) => {
    refs.current = []; // Clear refs on every render to avoid duplicates
    return phrase.split(' ').map((word, wordIndex) => (
      <p
        className="text-[3.5vw] m-0 mr-[1.5vw] font-semibold text-white"
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

  // GSAP Animation
  useEffect(() => {
    if (refs.current.length > 0) {
      // Apply staggered animation to letters with delay
      gsap.fromTo(
        refs.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: 'power3.out',
          delay: animationDelay / 1000, // Convert delay from ms to seconds
        }
      );
    }
  }, [animationDelay]); // Trigger useEffect when animationDelay changes

  return (
    <main
      className="flex items-end justify-center bg-transparent text-gray-900"
    >
      <div className="w-full flex flex-wrap">
        {splitWords(phrase)}
      </div>
    </main>
  );
}
