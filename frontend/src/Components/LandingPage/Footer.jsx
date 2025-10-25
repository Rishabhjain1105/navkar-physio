import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base mb-4 md:mb-0">
          © {new Date().getFullYear()} Navkar Physio & Pain Clinic. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-red-500 transition-colors">About</a>
          <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
