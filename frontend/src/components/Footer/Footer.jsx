import Logo from "./../../assets/images/logo3.png";
import React, { useContext, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Newsletter from "../../shared/Newsletter";
import { AuthContext } from "../../context/AuthContext";

const Footer = () => {
  const { role } = useContext(AuthContext);

  return (
    <>
      {role === "admin" ? null : (
        <footer className="bg-gray-800 text-white px-5 py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <img
                src={Logo}
                alt="Trips Travels Logo"
                className="h-20 md:mr-12 "
              />
              <div className="flex flex-col mt-8 text-center md:text-left">
                <p className="mb-2">Address: 123 Travel St, City, Country</p>
                <p className="mb-2">Phone: +1 234 567 890</p>
                <p className="mb-2">Email: info@tripstravels.com</p>
                <p>&copy; 2024 Trips Travels. All rights reserved.</p>
              </div>
            </div>

            <Newsletter />

            {/* Social Media Links */}
            <div className="flex md:flex-col gap-4 mt-4 md:mt-0">
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
      )}
    </>
  );
};

export default Footer;
