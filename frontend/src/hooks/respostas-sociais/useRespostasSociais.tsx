// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

interface RespostasSociaisData {
  Content: {
    Title: string,
    Content: string,
  }[];
  media_connection: {
    nodes: { url: string, alternativeText: string }[];
  };
}

const fetchRespostasSociais = async () => {
  const res = await fetch(`/api/respostas-sociais`);
  if (!res.ok) throw new Error("Failed to fetch Respostas Sociais");

  return res.json() as Promise<{ respostaSocial: RespostasSociaisData }>;
};

export const useRespostasSociais = () => {
  return useQuery({
    queryKey: ["Respostas Sociais"],
    queryFn: () => fetchRespostasSociais(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
