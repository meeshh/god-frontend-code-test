"use client";

import { useEffect, useRef, useState } from "react";
import CarCard from "../CarCard";
import { register } from "swiper/element";
import { CarType } from "../../types";
import { getCars } from "../../utils/cars";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

register();

const Carousel = () => {
  const swiperElRef = useRef<any>(null);

  const [cars, setCars] = useState<CarType[]>([]);
  const [slidesPerView, setSlidesPerView] = useState(4);

  const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    const newSlidesPerView = isSmall ? 1 : isMedium ? 2 : isLarge ? 3 : 4;
    setSlidesPerView(newSlidesPerView);
  }, [isSmall, isMedium, isLarge]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars();

      setCars(data);
    };
    fetchData();
  }, []);

  const handleNextSlide = () => {
    swiperElRef.current?.swiper?.slideNext();
  };
  const handlePrevSlide = () => {
    swiperElRef.current?.swiper?.slidePrev();
  };

  return (
    <>
      <swiper-container
        ref={swiperElRef}
        pagination
        slides-per-view={slidesPerView}
        space-between={30}
        loop
      >
        {cars.map((car) => (
          <swiper-slide key={car.id}>
            <CarCard {...car} />
          </swiper-slide>
        ))}
      </swiper-container>

      {!isSmall && (
        <div className="flex gap-4 py-16">
          <div className="flex-grow" />

          <button className="rounded-full" onClick={handlePrevSlide}>
            <Image
              className="rotate-180"
              width={30}
              height={30}
              src="/icons/chevron-circled.svg"
              alt="Next"
            />
          </button>
          <button className="rounded-full" onClick={handleNextSlide}>
            <Image
              width={30}
              height={30}
              src="/icons/chevron-circled.svg"
              alt="Next"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Carousel;
