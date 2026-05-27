export const fecthData = async () => {
  const response = await fetch(
    "https://www.cheapshark.com/api/1.0/deals?pageSize=30",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch game");
  }

  return response.json();
};
