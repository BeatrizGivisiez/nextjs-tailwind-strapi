"use client";

import { useNews } from "@/hooks/News/useNews";
import LeadPageLayout from "@/layouts/LeadPageLayout";
import { NoticiasPage } from "@/modules/noticias/page";
import bannerNoticias from "@/assets/NoticiasBanner.jpg";
import { useState } from "react";
import LeadPageSkeleton from "@/layouts/LeadPageSkeleton";

export default function Noticias() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTitle, setPageTitle] = useState("Notícias");
  const pageSize = 20;

  const { data: articles, isLoading } = useNews(currentPage, pageSize);

  if (isLoading) return <LeadPageSkeleton />;

  const nodes = articles?.news_connection.nodes || [];

  return (
    <LeadPageLayout title={pageTitle} banner={bannerNoticias}>
      <NoticiasPage
        items={nodes}
        onPageChange={setCurrentPage}
        onTitleChange={setPageTitle} // Receive title from child
      />
    </LeadPageLayout>
  );
}
