import React from 'react';

const Gallery: React.FC = () => {
  const products = [
    {
      id: 1,
      image: '/IMG_9112.jpeg',
    },
    {
      id: 2,
      image: '/IMG_9150.jpeg',
    },
    {
      id: 3,
      image: '/IMG_9087.jpeg',
    },
    {
      id: 4,
      image: '/IMG_8956.jpeg',
    },
    {
      id: 5,
      image: '/IMG_8080.jpeg',
    },
    {
      id: 6,
      image: '/IMG_9851.jpg',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-[100vw] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exquisite collection of watches and jewelry, crafted with precision and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden"
            >
              <div className="aspect-square w-full">
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 