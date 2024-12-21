import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <a href="#">DIGITAL HARMONEY</a>
        </div>

        {/* Navbar Links (Desktop View) */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          <a href="#portfolio" className="text-white hover:text-gray-300">Portfolio</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-blue-600 space-y-4 py-4 px-4`}>
        <a href="#" className="text-white hover:text-gray-300">Home</a>
        <a href="#about" className="text-white hover:text-gray-300">About</a>
        <a href="#services" className="text-white hover:text-gray-300">Services</a>
        <a href="#portfolio" className="text-white hover:text-gray-300">Portfolio</a>
        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
