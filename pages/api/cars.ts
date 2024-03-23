import { promises as fs } from "fs";

import { NextApiRequest, NextApiResponse } from "next";

const data = await fs.readFile(process.cwd() + "/public/api/cars.json", "utf8");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}
