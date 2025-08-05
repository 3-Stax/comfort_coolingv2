// client/src/components/Values.jsx
import React from 'react';

const values = [
  {
    title: 'Integrity',
    description: 'We operate with honesty and transparency in every job we do.',
  },
  {
    title: 'Quality',
    description: 'We are committed to delivering the highest standard of workmanship.',
  },
  {
    title: 'Reliability',
    description: 'You can count on us to be there when you need us, every time.',
  },
];

const Values = () => {
  return (
    <section id="values" className="py-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Our Core Values</h2>
        <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
          What we believe in and how we work.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white text-dark rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
