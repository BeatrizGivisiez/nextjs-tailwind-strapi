"use client";
import { useNews } from "@/hooks/News/useNews";
import LeadPageLayout from "@/layouts/LeadPageLayout";
import { NoticiasPage } from "@/modules/noticias/page";
import bannerNoticias from "@/assets/NoticiasBanner.jpg";
import { useState } from "react";
import LeadPageSkeleton from "@/layouts/LeadPageSkeleton";

export default function Noticias() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const { data: articles, isLoading } = useNews(currentPage, pageSize);

  if (isLoading) return <LeadPageSkeleton />;

  const nodes = articles?.news_connection.nodes || [];
  const pageInfo = articles?.news_connection.pageInfo || {
    total: 0,
    page: currentPage,
    pageSize,
    pageCount: 0,
  };

  return (
    <>
      <LeadPageLayout title="Noticías" banner={bannerNoticias}>
        <NoticiasPage
          items={nodes || []}
          pageInfo={pageInfo}
          onPageChange={setCurrentPage}
        />
        <></>
      </LeadPageLayout>
    </>
  );
}
