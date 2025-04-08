import { useQuery } from "@tanstack/react-query";

const fetchNoticiaData = async (slug: string) => {
  const res = await fetch(`/api/news/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch noticia");
  }

  const data = await res.json();
  return data;
};

export const useNoticia = (slug: string) => {
  return useQuery({
    queryKey: ["noticia", slug],
    queryFn: () => fetchNoticiaData(slug),
    enabled: !!slug,
  });
};
