import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

export interface YoutubeVideo {
  YoutubeUrl: ReactNode;
  Title: string;
  Thumbnail: { url: string };
}

export interface Testemunho {
  Nome: string;
  Testemunho: string;
}

export interface PaginaPrincipal {
  ImagemHero: { url: string };
  CedemaAbout: string;
  OndeEstamos: string;
  youtube_video_urls: YoutubeVideo[];
  testemunhos: Testemunho[];
  GoogleMaps: string;
}

const fetchPaginaPrincipal = async (): Promise<PaginaPrincipal> => {
  const res = await fetch("/api/paginaPrincipal");
  if (!res.ok) throw new Error("Failed to fetch pagina principal");
  return res.json(); // returns an object, not an array
};

export const usePaginaPrincipal = () => {
  return useQuery<PaginaPrincipal, Error>({
    queryKey: ["paginaPrincipal"],
    queryFn: fetchPaginaPrincipal,
    staleTime: 1000 * 60 * 5,
  });
};
