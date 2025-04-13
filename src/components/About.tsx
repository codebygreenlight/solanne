import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-[100vw] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent rounded-lg"></div>
            <img
              src="/IMG_9851.jpg"
              alt="About Bijouxaccessories"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl transform transition-all duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About Us
              </h2>
              <div className="w-20 h-1 bg-gray-900"></div>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
              At Bijouxaccessories, we believe a wristwatch is more than just a timekeeper—it's a statement of style, confidence, and individuality. That's why we offer a thoughtfully curated collection of high-quality men’s wristwatches designed to elevate your look, whether you're closing deals in the boardroom or enjoying a laid-back weekend.
              </p>
              
              <p className="text-lg leading-relaxed">
              Our mission is simple: to help modern men express their unique style through timepieces that embody elegance, durability, and affordability. Each watch in our collection is handpicked for its blend of classic craftsmanship and contemporary design, ensuring you always make the right impression.
              </p>
              
              <p className="text-lg leading-relaxed">
              We’re proud to serve a growing community of style-conscious men who value detail, quality, and authenticity. With Bijouxaccessories, you're not just wearing a watch—you’re wearing confidence.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-lg font-medium text-gray-900">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 