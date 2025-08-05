// client/src/components/Brands.jsx
import React from 'react';

// Placeholder brand logos
const brands = [
  'https://placehold.co/150x80/0ea5e9/FFFFFF?text=Brand+A',
  'https://placehold.co/150x80/0369a1/FFFFFF?text=Brand+B',
  'https://placehold.co/150x80/f59e0b/FFFFFF?text=Brand+C',
  'https://placehold.co/150x80/0ea5e9/FFFFFF?text=Brand+D',
  'https://placehold.co/150x80/0369a1/FFFFFF?text=Brand+E',
];

const Brands = () => {
  return (
    <section id="brands" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">Trusted Brands We Partner With</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We use high-quality products from the industry's leading manufacturers.
        </p>
        <div className="mt-10 flex flex-wrap justify-center items-center space-x-6 space-y-6 md:space-y-0">
          {brands.map((logo, index) => (
            <img key={index} src={logo} alt={`Brand ${index + 1}`} className="h-16 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
