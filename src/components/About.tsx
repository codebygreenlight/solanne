import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background with Gradient and Blurred Circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/50 to-white"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-amber-400/10 rounded-full text-amber-400 font-medium mb-6">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the journey behind our passion for creating timeless pieces that blend elegance with modern design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
            <img
              src="/2.jpg"
              alt="About Solanne Watches"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-lg font-medium">Crafting Excellence Since 2023</p>
            </div>
          </div>

          {/* Content Cards */}
          <div className="space-y-8 text-center md:text-left">
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Timeless Style, Affordable Luxury</h3>
              <p className="text-gray-600">
              <span className="font-bold">Solanne Watches Nigeria</span> is a proudly Nigerian fashion and accessories brand committed to elevating everyday style through timeless pieces. Founded in 2022 and officially registered with the Corporate Affairs Commission (CAC) in 2023, we have quickly become a trusted name among fashion-conscious men and women—especially across Lagos.

At Solanne, we believe that luxury should be accessible. That’s why we offer a wide range of affordable and premium wristwatches and non-tarnish, gold-plated jewelry tailored to suit every budget and personal style.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Badge */}
        
      </div>
    </section>
  );
};

export default About; 