import React, { useState, useEffect } from 'react';

const images = [
  '/images/carousel-img-1.jpg',
  '/images/carousel-img-2.jpg',
  '/images/carousel-img-3.jpg',
  '/images/carousel-img-4.jpg',
  '/images/carousel-img-5.jpg',
];

const BackgroundCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCarousel;