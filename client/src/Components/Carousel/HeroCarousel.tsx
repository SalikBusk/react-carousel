import React, { useState } from 'react';

import {BiSolidChevronRight, BiSolidChevronLeft} from 'react-icons/bi'

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

  return (
    <div className='w-full rounded-[10px] relative flex flex-cols'>
        <div className='w-full aspect-16/9 transform opacity-0 duration-75 ease-in-out'>
            {imgs.map((img, index) => (
                <img key={index} src={img} alt="" className={currentIndex === index ? "" : "hidden"}/>
            ))}
        </div>
        <div className='carousel-control'>
            <button className='absolute left-0 top-1/2 transform translate-y-[-80%] border-0 p-4 flex justify-center items-center cursor-pointer' onClick={handlePrevious}>
                <BiSolidChevronLeft size={20}/>
            </button>
            <button className='absolute right-0 top-1/2 transform translate-y-[-80%] border-0 p-4 flex justify-center items-center cursor-pointer' onClick={handleNext}>
                <BiSolidChevronRight size={20}/>
            </button>
        </div>
        <div className='flex items-center gap-[10px] m-[16px]'>
            {imgs.map((_, index) => (
                <div key={index} className={`w-[15px] h-[15px] bg-black rounded-full ${currentIndex === index ? "active" : ""}`}></div>
            ))}
        </div>
    </div>
  );
};

export default HeroCarousel;
