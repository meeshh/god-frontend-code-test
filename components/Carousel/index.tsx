"use client";

import { useEffect, useRef, useState } from "react";
import CarCard from "../CarCard";
import { register } from "swiper/element";
import { CarType } from "../../types";
import { getCars } from "../../utils/cars";

register();

const Carousel = () => {
  const swiperElRef = useRef<any>(null);
  const [cars, setCars] = useState<CarType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars();

      setCars(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <swiper-container
        ref={swiperElRef}
        // pagination
        slides-per-view="3"
        loop
      >
        {cars.map((car) => (
          <swiper-slide key={car.id}>
            <CarCard {...car} />
          </swiper-slide>
        ))}
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
