// Footer.jsx

import Logo from './../../assets/images/logo.png';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          
          <img src={Logo} alt="Trips Travels Logo" className="h-20 mr-12"/>
          
          {/* Navigation Links */}
          <nav className="flex flex-col  gap-4">
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
            <a href="/tours" className="hover:text-gray-300">
              Tours
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact Us
            </a>
            <a href="/blog" className="hover:text-gray-300">
              Blog
            </a>
            <a href="/faq" className="hover:text-gray-300">
              FAQ
            </a>
          </nav>
        </div>

        {/* Additional Information */}
        <div className="flex flex-col mt-8 text-center md:text-left">
          <p className="mb-2">
            Address: 123 Travel St, City, Country
          </p>
          <p className="mb-2">
            Phone: +1 234 567 890
          </p>
          <p className="mb-2">
            Email: info@tripstravels.com
          </p>
          <p>
            &copy; 2024 Trips Travels. All rights reserved.
          </p>
        </div>

        
        {/* Social Media Links */}
        <div className="flex flex-col gap-4 mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaYoutube />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaGithub />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
