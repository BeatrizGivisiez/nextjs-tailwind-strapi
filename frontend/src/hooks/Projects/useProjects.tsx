// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

export interface ProjectsArticle {
  id: string;
  Titulo: string;
  Descricao?: string;
  slug: string;
  Conteudo: string;
  Imagens: {
    url: string;
    alternativeText?: string;
    caption?: string;
  }[];
}

export interface PaginationMeta {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

interface ProjectsData {
  nodes: ProjectsArticle[];
  pageInfo: { pagination: PaginationMeta };
}

const fetchProjects = async (page: number = 1, pageSize: number = 20) => {
  const res = await fetch(`/api/projects?page=${page}&pageSize=${pageSize}`);
  if (!res.ok) throw new Error("Failed to fetch projects");

  return res.json() as Promise<{ projetos_connection: ProjectsData }>;
};

export const useProjects = (page: number, pageSize = 20) => {
  return useQuery({
    queryKey: ["projects", page, pageSize],
    queryFn: () => fetchProjects(page, pageSize),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
