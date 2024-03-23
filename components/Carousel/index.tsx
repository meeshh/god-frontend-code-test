"use client";

import { useEffect, useRef, useState } from "react";
import CarCard from "../CarCard";
import { register } from "swiper/element/bundle";
import { CarType } from "../../types";
import { getCars } from "../../utils/cars";
import { useMediaQuery } from "react-responsive";
import Pagination from "./Pagination";
import NavControls from "./NavControls";

register();

const Carousel = () => {
  const swiperElRef = useRef<any>(null);

  const [cars, setCars] = useState<CarType[]>([]);
  const [slidesPerView, setSlidesPerView] = useState<1 | 2 | 3 | 4 | "auto">(4);
  const [activePage, setActivePage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    const newSlidesPerView = isSmall ? "auto" : isMedium ? 2 : isLarge ? 3 : 4;
    setSlidesPerView(newSlidesPerView);
  }, [isSmall, isMedium, isLarge]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars();

      setCars(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setNumberOfPages(
      Math.ceil(cars.length / (slidesPerView === "auto" ? 1 : slidesPerView))
    );
    swiperElRef.current?.swiper?.on("touchEnd", () => {
      //small timeout is needed to give time to the swiper to update the active slide
      setTimeout(() => {
        setActivePage(
          Math.floor(
            swiperElRef.current?.swiper?.activeIndex /
              (slidesPerView === "auto" ? 1 : slidesPerView)
          )
        );
      }, 200);
    });
  }, [cars.length, slidesPerView]);

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
        slides-per-view={slidesPerView}
        space-between={30}
      >
        {cars.map((car) => (
          <swiper-slide
            key={car.id}
            style={{ width: isSmall ? "80%" : "auto" }}
          >
            <CarCard {...car} />
          </swiper-slide>
        ))}
      </swiper-container>

      {isSmall || isMedium ? (
        <Pagination activePage={activePage} numberOfPages={numberOfPages} />
      ) : (
        <NavControls
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
        />
      )}
    </>
  );
};

export default Carousel;
