import React, { useState } from 'react';
import { BiSolidChevronRight, BiSolidChevronLeft } from 'react-icons/bi';

interface Props {
  imgs: string[];
}

const HeroCarousel: React.FC<Props> = ({ imgs }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? imgs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === imgs.length ? 0 : prevIndex + 1
    );
  };

  if (!imgs || imgs.length === 0) {
    console.error("No images provided.");
    return null;
  }

  return (
    <figure className='w-full h-[80vh] rounded-[10px] relative overflow-hidden'>
      {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={currentIndex === index ? "block w-full h-full object-cover" : "hidden"}
            onError={() => console.error(`Error loading image at index ${index}: ${img}`)}
          />
        ))}
      <figcaption className='w-full'>
        <button className='absolute left-1 bg-white rounded-full top-1/2 transform translate-y-[-80%] border-0 p-2 flex justify-center items-center cursor-pointer' onClick={handlePrevious}>
          <BiSolidChevronLeft size={20} />
        </button>
        <button className='absolute right-1 bg-white rounded-full top-1/2 transform translate-y-[-80%] border-0 p-2 flex justify-center items-center cursor-pointer' onClick={handleNext}>
          <BiSolidChevronRight size={20} />
        </button>
      </figcaption>
    </figure>
  );
};

export default HeroCarousel;
