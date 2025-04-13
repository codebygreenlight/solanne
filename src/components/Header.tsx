import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = '07013226480';
  const message = 'Hello, I would like to inquire about your watches.';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img 
                src="/logo.jpg" 
                alt="Solanne Watches" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <span className="text-xl font-semibold text-gray-900">Solanne</span>
              <span className="block text-xs text-amber-600">Nigeria</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-amber-400 transition-colors duration-300"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-amber-400 transition-colors duration-300"
              >
                About
              </a>
              <a 
                href="#gallery" 
                className="text-gray-700 hover:text-amber-400 transition-colors duration-300"
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-amber-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`bg-white/95 backdrop-blur-md rounded-2xl p-8 w-full max-w-sm transform transition-all duration-500 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center space-y-6">
              <a
                href="#home"
                className="text-gray-900 hover:text-amber-400 transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-amber-400 transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-gray-900 hover:text-amber-400 transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-amber-400 transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-amber-400 transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 