// hooks/useLocations.ts
import { useQuery } from "@tanstack/react-query";

export interface NewLocations {
  id: number;
  Title: string;
  Email: string;
  Phone: string;
  Address: string;
}

const fetchLocations = async (): Promise<NewLocations[]> => {
  const res = await fetch("/api/locations");
  if (!res.ok) throw new Error("Failed to fetch locations");
  return res.json();
};

export const useLocations = () => {
  return useQuery<NewLocations[], Error>({
    queryKey: ["locations"],
    queryFn: fetchLocations,
    staleTime: 1000 * 60 * 5,
  });
};
