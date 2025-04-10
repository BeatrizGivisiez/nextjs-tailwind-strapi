import { useQuery } from "@tanstack/react-query";

const fetchLastNoticiasData = async () => {
  const res = await fetch(`/api/news/last`);

  if (!res.ok) {
    throw new Error("Failed to fetch noticias");
  }

  const data = await res.json();
  return data;
};

export const useLastNews = () => {
  return useQuery({
    queryKey: ["Last News"],
    queryFn: () => fetchLastNoticiasData(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
