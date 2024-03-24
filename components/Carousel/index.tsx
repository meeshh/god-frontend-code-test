"use client";

import { useEffect, useRef, useState } from "react";
import CarCard from "../CarCard";
import { register } from "swiper/element/bundle";
import { BodyType, CarType } from "../../types";
import { getCars } from "../../utils/cars";
import { useMediaQuery } from "react-responsive";
import Pagination from "./Pagination";
import NavControls from "./NavControls";
import { BODY_TYPES } from "../../utils/constants";

register();

const Carousel = () => {
  const swiperElRef = useRef<any>(null);

  const [cars, setCars] = useState<CarType[]>([]);
  const [slidesPerView, setSlidesPerView] = useState<1 | 2 | 3 | 4 | "auto">(4);
  const [activePage, setActivePage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [filter, setFilter] = useState<BodyType | undefined>(undefined);

  // the native breakpoints from `swiper` do not work well with nextjs
  // so we use `react-responsive` to get the breakpoints
  const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    const newSlidesPerView = isSmall ? "auto" : isMedium ? 2 : isLarge ? 3 : 4;
    setSlidesPerView(newSlidesPerView);
  }, [isSmall, isMedium, isLarge]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars(filter);
      setCars(data);

      // set carousel to the first slide when the filter changes
      swiperElRef.current?.swiper?.slideTo(0);
    };
    fetchData();
  }, [filter]);

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

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as BodyType);
  };

  return (
    <>
      <div className="flex flex-col">
        <label className="mb-4" htmlFor="carTypeSelector">
          Select a Car Type
        </label>
        <select
          id="carTypeSelector"
          className="mb-16 px-16 py-4 border rounded w-xs"
          defaultValue=""
          onChange={handleFilter}
        >
          <option value="">None</option>
          {BODY_TYPES.map((bodyType) => (
            <option key={bodyType} value={bodyType.toLowerCase()}>
              {bodyType}
            </option>
          ))}
        </select>
      </div>
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

      {/* ideally conditionally render the following two components depending on the window size
       * but there will be the hydration problem with SSR since the window object is not available on the server
       * They are not big components so for the sake of the example it's fine to render them always and hide them with CSS
       */}
      <Pagination activePage={activePage} numberOfPages={numberOfPages} />
      <NavControls
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
      />
    </>
  );
};

export default Carousel;
