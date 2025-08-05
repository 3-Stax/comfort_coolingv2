// client/src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ComfortCooling</h3>
            <p className="text-sm">
              Your trusted partner for all your HVAC needs.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {/* Corrected: Using real social media URLs */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* Corrected: Using the actual section IDs for navigation */}
              <li><a href="#services" className="hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a></li>
              {/* Corrected: Changed to an empty href to avoid the warning, assuming this link will be filled in later */}
              <li><a href="/privacy-policy" className="hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p className="text-sm">123 Cooling Lane, City, State 54321</p>
            <p className="text-sm">info@comfortcooling.com</p>
            <p className="text-sm">+1 (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ComfortCooling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
