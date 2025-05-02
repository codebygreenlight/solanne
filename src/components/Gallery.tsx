import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    name: string;
  } | null>(null);

  const handleWhatsAppClick = (product: {
    name: string;
    price: string;
    description: string;
  }) => {
    const message = `I'm interested in purchasing the following product:\n\nProduct: ${product.name}\nPrice: ${product.price}\nDescription: ${product.description}\n\nPlease provide more information about availability and payment options.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2347013226480?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    {
      id: 1,
      image: '/IMG_9112.jpeg',
      name: 'Tattoo Crested Hublot',
      price: '₦35,000',
      description: 'Affordable tattoo crested hublot watch with a unique design and it comes in a box.'
    },
    {
      id: 2,
      image: '/IMG_9150.jpeg',
      name: 'Richard Mille',
      price: '₦45,000',
      description: 'Affordable Richard Mille watch with a classic design and it comes in a box.'
    },
    {
      id: 3,
      image: '/IMG_9087.jpeg',
      name: 'Patek Philippe',
      price: '₦150,000',
      description: 'Luxury Patek Philippe watch with a classic design and it comes in a branded box and bag.'
    },
    {
      id: 4,
      image: '/IMG_8956.jpeg',
      name: 'Modern Watch',
      price: '₦40,000',
      description: 'Affordable watch with a simple design, suitable for daily use and it comes with a resizing screwdriver.'
    },
    {
      id: 5,
      image: '/IMG_8080.jpeg',
      name: 'Casio G-Shock',
      price: '₦60,000',
      description: 'This watch combines toughness with vibrant color options to match your vibe and it comes with a box. '
    },
    {
      id: 6,
      image: '/IMG_9851.jpg',
      name: 'Poedagar',
      price: '₦40,000',
      description: 'Elevate your style with the sleek Poedagar watch. Comes elegantly packaged in a branded box'
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
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div 
                className="aspect-square w-full cursor-pointer group"
                onClick={() => setSelectedImage({ image: product.image, name: product.name })}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-amber-500 transition-colors duration-300">{product.name}</h3>
                <p className="text-lg font-bold text-amber-600 mb-2">{product.price}</p>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <button
                  onClick={() => handleWhatsAppClick(product)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{selectedImage.name}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 