import { useEffect, useRef, useState } from "react";
import CarCard from "../CarCard";
import { register } from "swiper/element/bundle";
import { BodyType, CarType } from "../../types";
import { useMediaQuery } from "react-responsive";
import Pagination from "./Pagination";
import NavControls from "./NavControls";

register();

type CarouselProps = {
  data: CarType[];
};

const Carousel: React.FC<CarouselProps> = ({ data: cars = [] }) => {
  const swiperElRef = useRef<any>(null);

  const [slidesPerView, setSlidesPerView] = useState<1 | 2 | 3 | 4 | "auto">(4);
  const [activePage, setActivePage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

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

  // reset the active slide when the filter is triggered and the number of total cars changes
  // this is needed in order not to have a black page in the slider when the new number of cars is less than the previous one
  useEffect(() => {
    swiperElRef.current?.swiper?.slideTo(0);
  }, [cars.length]);

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
