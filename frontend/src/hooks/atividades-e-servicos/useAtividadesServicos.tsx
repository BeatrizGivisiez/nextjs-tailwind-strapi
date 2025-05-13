// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

interface AtividadesServicosData {
  Content: {
    Title: string,
    Content: string,
  }[];
  media_connection: {
    nodes: { url: string, alternativeText: string }[];
  };
}

const fetchAtividadesServicos = async () => {
  const res = await fetch(`/api/atividades-e-servicos`);
  if (!res.ok) throw new Error("Failed to fetch Atividades e Serviços");

  return res.json() as Promise<{ atividadeEServico: AtividadesServicosData }>;
};

export const useAtividadesServicos = () => {
  return useQuery({
    queryKey: ["Atividades e Serviços"],
    queryFn: () => fetchAtividadesServicos(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
