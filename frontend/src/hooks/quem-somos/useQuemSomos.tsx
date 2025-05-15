// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

interface QuemSomosData {
  quemSomos: string;
  historia: string;
  missaoValores: string;
  videoApresentacao: {
    Thumbnail: { url: string, alternativeText: string }[];
    Title:string,
    YoutubeUrl:string,
  };
}  

const fetchQuemSomos = async () => {
  const res = await fetch(`/api/quem-somos`);
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json() as Promise<{ quemSomo: QuemSomosData }>;
};

export const useQuemSomos = () => {
  return useQuery({
    queryKey: ["Quem Somos"],
    queryFn: () => fetchQuemSomos(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
