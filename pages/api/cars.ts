import { promises as fs } from "fs";
import path from "path";

import { NextApiRequest, NextApiResponse } from "next";
import { CarType } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // read the cars.json file -- in a real app, this would be a database query in the handler
    const data = await fs.readFile(
      path.join(process.cwd(), "/public/api/cars.json"),
      "utf8"
    );

    const cars: CarType[] = JSON.parse(data);
    const filteredCars = req.query.bodyType
      ? cars.filter((car) => car.bodyType === req.query.bodyType)
      : cars; // if no filter is passed, return all cars

    res.status(200).json(filteredCars);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}
