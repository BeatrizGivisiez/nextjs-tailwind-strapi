"use client";

import { useProject } from "@/hooks/Projects/useSingleProject";
import SingleNewPageSkeleton from "@/modules/noticias/components/Skeleton";
import SingleProjectPageSkeleton from "@/modules/projects/components/Skeleton";
import { SingleProjectPage } from "@/modules/projects/page/single_index";
import { use } from "react";

interface ProjetoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function Projeto({ params }: ProjetoPageProps) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const { data: projeto, error, isLoading } = useProject(slug);

  if (isLoading) return <SingleProjectPageSkeleton />;

  return <SingleProjectPage item={projeto} />;
}
