import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-[100vw] mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="Bijouxaccessories Logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="text-xl font-bold text-gray-800">Bijouxaccessories</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                About
              </a>
              <a href="#gallery" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                Gallery
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="fixed inset-0 bg-white">
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#home"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 