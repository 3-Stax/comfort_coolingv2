// client/src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">About Us</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We are dedicated to providing the best comfort cooling solutions for your home and business.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              className="rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1582268482484-90a618d3606f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Engineers working on an HVAC system"
            />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
            <p className="text-gray-700">
              Our mission is to ensure your comfort with reliable, efficient, and professional HVAC services. We believe in quality workmanship and exceptional customer care. Our team of certified technicians is ready to assist you with any installation, maintenance, or repair needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
