// client/src/components/BackToTop.jsx
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center opacity-100 visible transition-all duration-300 hover:bg-secondary z-40"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
