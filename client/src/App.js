// client/src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Values from './components/Values';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import { useLocation } from 'react-router-dom';

// Define the custom hook 'useSmoothScroll' outside of the App component,
// but before it, or in its own separate file if preferred.
// If it's only used by App, keeping it in App.js is fine, but it shouldn't
// be wrapped in a function that gets called twice.
const useSmoothScroll = () => { // Changed from export const to just const if not exported separately
  const { pathname } = useLocation();

  useEffect(() => {
    // Handle anchor links
    const handleAnchorClick = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [pathname]);

  // Animation on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-scale-in');

      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0) scale(1)';
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
};


// ONLY ONE App function component declaration
function App() {
  // Call the custom hook inside the functional component
  useSmoothScroll();

  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll event for BackToTop button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Values />
      <Brands />
      <Contact />
      <Footer />
      {showBackToTop && <BackToTop />}
    </div>
  );
}

export default App;