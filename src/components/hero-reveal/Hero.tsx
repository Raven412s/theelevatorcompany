'use client';
import { useEffect, useState } from 'react';

const slides = [
    {
        id: 1,
        image: '/images/parrallax/10.jpg',
        title: 'Elevate with Precision',
        subtitle: 'Delivering safe and reliable elevator solutions for modern buildings.',
    },
    {
        id: 2,
        image: '/images/parrallax/12.jpg',
        title: 'Innovative Design',
        subtitle: 'Crafting elevators that seamlessly integrate with your architecture.',
    },
    {
        id: 3,
        image: '/images/parrallax/8.jpg',
        title: 'Empower Mobility',
        subtitle: 'Enhancing vertical transportation with cutting-edge technology.',
    }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 rounded-xl ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            className="h-full w-full object-cover rounded-xl"
            src={slide.image}
          />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 rounded-xl  border-2 border-transparent  flex flex-col items-start justify-end p-16 bg-black/35 z-20 text-center">
        <h1 className="text-4xl md:text-8xl font-bold text-white animate-fade">
          {slides[currentSlide].title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 animate-fade">
          {slides[currentSlide].subtitle}
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
