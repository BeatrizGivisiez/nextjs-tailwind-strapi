// hooks/useNews.ts
import { useQuery } from "@tanstack/react-query";

interface OrganizacaoEstatutosData {
  content: string;
  orgaosSociais: {
    content: string
    file: {
      url: string, alternativeText: string, caption: string
    }
  }
  estatutos: {
    content: string
    file: {
      url: string, alternativeText: string, caption: string
    }
  }
  contasExercicios: {
    files: {
      url: string, alternativeText: string, caption: string
    }[]
  }
  publicacoesEditadas: {
    files: {
      url: string, alternativeText: string, caption: string
    }[]
  }
  codigoEticaConduta: {
    url: string, alternativeText: string, caption: string
  }
}

const fetchOrganizacaoEstatutos = async () => {
  const res = await fetch(`/api/quem-somos/organizacao-estatutos`);
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json() as Promise<{ organizacaoEEstatuto: OrganizacaoEstatutosData }>;
};

export const useOrganizacaoEstatutos = () => {
  return useQuery({
    queryKey: ["Organização Estatutos"],
    queryFn: () => fetchOrganizacaoEstatutos(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
