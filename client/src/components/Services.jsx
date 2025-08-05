// client/src/components/Services.jsx
import React from 'react';

const services = [
  {
    icon: '🔧',
    title: 'Installation',
    description: 'Professional and efficient installation of new HVAC systems tailored to your needs.'
  },
  {
    icon: '⚙️',
    title: 'Maintenance',
    description: 'Regular maintenance to ensure your system runs smoothly and efficiently all year long.'
  },
  {
    icon: '🛠️',
    title: 'Repair',
    description: 'Fast and reliable repair services to get your system back up and running in no time.'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">Our Services</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We offer a comprehensive range of heating and cooling services.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 animate-slide-up">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-dark mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
