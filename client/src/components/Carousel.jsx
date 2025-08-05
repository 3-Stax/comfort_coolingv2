// client/src/components/Carousel.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  // Use useCallback to memoize the goToNext function.
  // This prevents it from being recreated on every render.
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  }, [slides.length]); // Dependency: slides.length

  // Clear interval and pause/restart autoplay on manual interaction
  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000); // Resume after 5 seconds
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  };

  useEffect(() => {
    // Clear any existing interval before setting a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (autoPlay) {
      // Store the interval ID in the ref's .current property
      intervalRef.current = setInterval(goToNext, 5000);
    }

    // Cleanup function: Clear the interval when the component unmounts
    // or when the dependencies change, causing re-execution
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, goToNext]); // Now the dependency array is stable

  return (
    <div className="relative h-full w-full rounded-xl shadow-2xl overflow-hidden">
      {/* Carousel slides */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover rounded-xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={goToPrev}
        className="carousel-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 text-primary p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button 
        onClick={goToNext}
        className="carousel-next absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 text-primary p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full bg-white transition-all duration-300 ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50 hover:bg-opacity-100'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
