// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

export interface NewsArticle {
  id: string;
  Titulo: string;
  SubTitulo?: string;
  slug: string;
  Conteudo: string;
  publicadoEm: string;
  Imagens: {
    url: string;
    alternativeText?: string;
    caption?: string;
  }[];
}

interface PaginationMeta {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

interface NewsData {
  nodes: NewsArticle[];
  pageInfo: { pagination: PaginationMeta };
}

const fetchNews = async (page: number = 1, pageSize: number = 20) => {
  const res = await fetch(`/api/news?page=${page}&pageSize=${pageSize}`);
  if (!res.ok) throw new Error("Failed to fetch news");

  return res.json() as Promise<{ news_connection: NewsData }>;
};

export const useNews = (page: number, pageSize = 20) => {
  return useQuery({
    queryKey: ["news", page, pageSize],
    queryFn: () => fetchNews(page, pageSize),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
