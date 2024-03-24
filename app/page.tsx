"use client";

import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Filter from "../components/Filter/Filter";
import { BodyType, CarType } from "../types";
import { getCars } from "../utils/cars";
import debounce from "lodash.debounce";

const HomePage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [filter, setFilter] = useState<BodyType | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCars(filter);
        setCars(data);
      } catch (err) {
        setError("Failed to fetch cars");
      }
    };
    fetchData();
  }, [filter]);

  // debouncing the filter to decrease the chances of a multiple requests attack -- the timeout is adjustable 
  // ideally another layer of rate limitation should be implemented on the server
  const handleFilter = debounce((e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as BodyType);
  }, 300);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Filter handleFilter={handleFilter} />
      <Carousel data={cars} />
    </>
  );
};

export default HomePage;
