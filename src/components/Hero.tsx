import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Elegance redefined";

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const pauseDuration = 2000;

    const type = () => {
      if (!isDeleting && currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setText(fullText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-10"></div>
        <img
          src="/2.jpg"
          alt="Luxury Watch Collection"
          className="w-full h-full object-cover transform scale-105 transition-transform duration-1000 group-hover:scale-100"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-amber-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-white/20 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="space-y-8">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            
            <span className="block text-white">
              <span className="inline-block min-w-[300px] h-[1.2em]">
                {text}
                <span className="inline-block w-1 h-8 bg-amber-400 animate-pulse"></span>
              </span>
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-gray-200">
            Discover our exquisite collection of timeless pieces that blend elegance with modern design.
          </p>

          {/* CTA Button */}
          <div className="mt-12">
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105"
            >
              Shop Now
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 