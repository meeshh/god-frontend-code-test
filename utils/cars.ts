import { BodyType } from "../types";

export const getCars = async (filter: BodyType | undefined) => {
  const queryParam = filter ? `?bodyType=${filter}` : "";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/cars${queryParam}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await res.json();
};
