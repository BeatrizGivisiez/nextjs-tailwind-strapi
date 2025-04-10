import { useQuery } from "@tanstack/react-query";

const fetchProjectData = async (slug: string) => {
  const res = await fetch(`/api/projects/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch projeto");
  }

  const data = await res.json();
  return data;
};

export const useProject = (slug: string) => {
  return useQuery({
    queryKey: ["projeto", slug],
    queryFn: () => fetchProjectData(slug),
    enabled: !!slug,
    retry: false,
  });
};
