// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

interface FinanciamentoData {
  content: string;
}

const fetchFinanciamento = async () => {
  const res = await fetch(`/api/quem-somos/financiamento`);
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json() as Promise<{ financiamento: FinanciamentoData }>;
};

export const useFinanciamento = () => {
  return useQuery({
    queryKey: ["Financiamento"],
    queryFn: () => fetchFinanciamento(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
