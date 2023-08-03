import React from "react";
import HeroCarousel from "../Components/Carousel/HeroCarousel";
import Container from "../Components/Container";

import bg1 from "../Assets/images/Arctic-ice-tours-web.jpg";
import bg2 from "../Assets/images/Baggrund.webp";

const imageUrls = [bg1, bg2];

const Hero = () => {
  return (
    <section className="w-full h-screen">
      <div className="py-[100px]">
        <Container>
          <HeroCarousel imgs={imageUrls} />
        </Container>
      </div>
    </section>
  );
};

export default Hero;
