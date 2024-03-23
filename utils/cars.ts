export const getCars = async () => {
  const res = await fetch("/api/cars", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};
