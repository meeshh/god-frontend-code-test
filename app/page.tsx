"use client";

import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Filter from "../components/Carousel/Filter";
import { BodyType, CarType } from "../types";
import { getCars } from "../utils/cars";

const HomePage = () => {
  const [cars, setCars] = useState<CarType[]>([]);

  const [filter, setFilter] = useState<BodyType | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars(filter);
      setCars(data);
    };
    fetchData();
  }, [filter]);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as BodyType);
  };

  return (
    <>
      <Filter handleFilter={handleFilter} />
      <Carousel data={cars} />
    </>
  );
};

export default HomePage;
