import React from "react";
import Container from "../Components/Container";
import Heading from "../Components/Heading";

import bg1 from "../Assets/images/Arctic-ice-tours-web.jpg";
import bg2 from "../Assets/images/Baggrund.webp";
import CardCarousel from "../Components/Carousel/CardCarousel";

const imageUrls = [bg1, bg2];

const Data = [
  {
    id: 1,
    images: imageUrls,
    title: "Product 1",
    subtitle: "items description",
  },
  {
    id: 2,
    images: imageUrls,
    title: "Product 2",
    subtitle: "items description",
  },
  {
    id: 3,
    images: imageUrls,
    title: "Product 3",
    subtitle: "items description",
  },
  {
    id: 4,
    images: imageUrls,
    title: "Product 4",
    subtitle: "items description",
  },
];


const Card = () => {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-start">
      <section className="w-full">
        <Container>
          <Heading title="Product Card Carousel" subtitle="React Komponont" />
          <section className="grid grid-cols-4 gap-[15px] py-[10px]">
            {Data.map((item) => (
              <>
              <CardCarousel imgs={item.images} title={item.title} subtitle={item.subtitle}/>
              </>
            ))}
          </section>
        </Container>
      </section>
    </div>
  );
};

export default Card;
