// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

interface CanalDenunciasData {
  content: string;
  link: string;
  media: {
    url: string, alternativeText: string;
  };
}
const fetchCanalDenuncias = async () => {
  const res = await fetch(`/api/quem-somos/canal-de-denuncias`);
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json() as Promise<{ canalDeDenuncia: CanalDenunciasData }>;
};

export const useCanalDenuncias = () => {
  return useQuery({
    queryKey: ["Canal de Denuncias"],
    queryFn: () => fetchCanalDenuncias(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
