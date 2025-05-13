// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

interface ParceriaData {
  content: string;
  media_connection: {
    nodes: { url: string, alternativeText: string }[];
  };
}

const fetchParcerias = async () => {
  const res = await fetch(`/api/parcerias`);
  if (!res.ok) throw new Error("Failed to fetch parcerias");

  return res.json() as Promise<{ parceria: ParceriaData }>;
};

export const useParcerias = () => {
  return useQuery({
    queryKey: ["parcerias"],
    queryFn: () => fetchParcerias(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
