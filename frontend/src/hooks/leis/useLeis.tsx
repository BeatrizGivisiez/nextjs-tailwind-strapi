// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

interface LeisData {
  content: string;
  leisDocument: {
    url: string, alternativeText: string, caption: string
  },
  manualApoio: {
    url: string, alternativeText: string, caption: string
  }
}

const fetchLeis = async () => {
  const res = await fetch(`/api/leis`);
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json() as Promise<{ lei: LeisData }>;
};

export const useLeis = () => {
  return useQuery({
    queryKey: ["Leis"],
    queryFn: () => fetchLeis(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
