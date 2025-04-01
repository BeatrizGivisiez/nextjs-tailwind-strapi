// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

export interface NewsArticle {
  id: string;
  Titulo: string;
  SubTitulo?: string;
  slug: string;
  Conteudo: string;
  publicadoEm: string;
  Imagens?: {
    url: string;
    alternativeText?: string;
    caption?: string;
  }[];
}

const fetchNews = async (): Promise<NewsArticle[]> => {
  const res = await fetch("/api/news");
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
};

export const useNews = () => {
  return useQuery<NewsArticle[], Error>({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 1000 * 60 * 5,
  });
};
