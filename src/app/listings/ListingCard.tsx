import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ListingCardProps {
  images: string[];
  titles: string[];
}

const ListingCard: React.FC<ListingCardProps> = ({ images, titles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prevImage = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full max-w-[1100px] overflow-hidden">
        {/* Botão de navegação esquerda */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
          onClick={prevImage}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Contêiner das imagens */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          onTransitionEnd={handleAnimationEnd}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center"
            >
              <Image
                quality={100}
                src={image}
                alt={titles[index]}
                className="object-cover rounded-2xl"
                width={1200}
                height={500}
              />
            </div>
          ))}
        </div>

        {/* Botão de navegação direita */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
          onClick={nextImage}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pontos indicadores */}
      <div className="flex mt-4 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingCard;