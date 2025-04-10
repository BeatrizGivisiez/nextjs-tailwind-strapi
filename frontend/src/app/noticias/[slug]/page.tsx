"use client";

import { useLastNews } from "@/hooks/News/useLastNews";
import { useNoticia } from "@/hooks/News/useSingleNew";
import SingleNewPageSkeleton from "@/modules/noticia/components/Skeleton";
import { NoticiaPage } from "@/modules/noticia/page";
import { use } from "react";

interface NoticiaPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function Noticia({ params }: NoticiaPageProps) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const { data: noticia, error, isLoading } = useNoticia(slug);
  const {
    data: lastNews,
    error: errorLastNews,
    isLoading: isLoadingLastNews,
  } = useLastNews();

  if (isLoading) return <SingleNewPageSkeleton />; // meter skeleton

  return <NoticiaPage item={noticia} lastNews={lastNews} />;
}
