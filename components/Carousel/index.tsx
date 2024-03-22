"use client";

import { useRef } from "react";
import CarCard from "../CarCard";
import { register } from "swiper/element";

register();

const Carousel = () => {
  const swiperElRef = useRef<any>(null);
  return (
    <>
      <swiper-container
        ref={swiperElRef}
        // pagination
        slides-per-view="2"
        loop
      >
        <swiper-slide>
          <CarCard />
        </swiper-slide>
        <swiper-slide>
          <CarCard />
        </swiper-slide>
        <swiper-slide>
          <CarCard />
        </swiper-slide>
      </swiper-container>
      <button
        className="bg-surface-accent-blue text-always-white p-8 rounded-md"
        onClick={() => swiperElRef.current?.swiper?.slidePrev()}
      >
        Prev
      </button>
      <button
        className="bg-surface-accent-blue text-always-white p-8 rounded-md"
        onClick={() => swiperElRef.current?.swiper?.slideNext()}
      >
        Next
      </button>
    </>
  );
};

export default Carousel;
