import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-50">
      <div className="max-w-[100vw] mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {currentYear} Bijouxaccessories. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 