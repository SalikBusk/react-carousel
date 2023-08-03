import React, { useState } from "react";

import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import Heading from "../Heading";

interface Props {
  imgs: string[];
  title: string,
  subtitle: string,
  price?: number | string,
}

const CardCarousel: React.FC<Props> = ({ imgs, title, subtitle, price }) => {
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
    <Link to={``} className="w-full relative overflow-hidden group">
      {imgs.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={
            currentIndex === index
              ? "block w-full object-cover h-[35vh] rounded-[5px]"
              : "hidden"
          }
          onError={() =>
            console.error(`Error loading image at index ${index}: ${img}`)
          }
        />
      ))}
      <figcaption className="w-full">
        {/* Buttom */}
      <button
          className="absolute left-1 top-1/2 transform translate-y-[-80%] border-0 p-2 cursor-pointer hidden bg-white rounded-full group-hover:block z-20"
          onClick={handlePrevious}
        >
          <BiSolidChevronLeft size={20} />
        </button>
        <button
          className="absolute right-1 top-1/2 transform translate-y-[-80%] border-0 p-2 cursor-pointer hidden bg-white rounded-full group-hover:block z-20"
          onClick={handleNext}
        >
          <BiSolidChevronRight size={20} />
        </button>
        {/* Content */}
        <section className="w-full py-[10px]">
            <Heading title={title} subtitle={subtitle}/>

        </section>
      </figcaption>
    </Link>
  );
};

export default CardCarousel;
