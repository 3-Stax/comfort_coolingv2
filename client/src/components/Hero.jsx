// client/src/components/Hero.jsx
import React from 'react';
import Carousel from './Carousel';

const Hero = () => {
  const carouselSlides = [
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "HVAC System installation"
    },
    {
      image: "https://images.unsplash.com/photo-1596700813735-866ce4a44b94?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "AC unit outdoors"
    },
    {
      image: "https://images.unsplash.com/photo-1560965007-a36c84b4231b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Residential heating and cooling"
    },
  ];

  return (
    <header className="pt-20 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in">
            Expert <span className="text-accent">HVAC Solutions</span> for Your Comfort
          </h1>
          <p className="mt-6 text-lg sm:text-xl font-light text-gray-200 animate-slide-up">
            Reliable installation, maintenance, and repair services for homes and businesses.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href="#contact" className="bg-accent text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-secondary transition-colors duration-300 shadow-lg">
              Get a Free Quote
            </a>
            <a href="#services" className="bg-white text-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors duration-300 shadow-lg">
              Our Services
            </a>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 relative h-96 animate-scale-in">
          <Carousel slides={carouselSlides} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
