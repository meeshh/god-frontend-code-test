import { BodyType } from "../types";

// We can optimize this function to use a generic filter and forwards the filter to the API
// Ideally a POST request with a payload should be used instead of a GET request with a query parameter
// The filter would be an object that contains the filter parameters such as bodyType, modelType, even id.
export const getCars = async (filter: BodyType | undefined) => {
  const params = new URLSearchParams();
  if (filter) {
    params.append("bodyType", filter);
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/cars?${params.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
