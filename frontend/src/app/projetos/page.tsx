"use client";
import { useProjects } from "@/hooks/Projects/useProjects";
import LeadPageLayout from "@/layouts/LeadPageLayout";
import { NoticiasPage } from "@/modules/noticias/page";
import bannerNoticias from "@/assets/NoticiasBanner.jpg";
import { useState } from "react";
import LeadPageSkeleton from "@/layouts/LeadPageSkeleton";
import { ProjectsPage } from "@/modules/projects/page";

export default function Projetos() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const { data: projects, isLoading } = useProjects(currentPage, pageSize);

  if (isLoading) return <LeadPageSkeleton />;

  const nodes = projects?.projetos_connection.nodes || [];
  const pageInfo = projects?.projetos_connection.pageInfo || {
    total: 0,
    page: currentPage,
    pageSize,
    pageCount: 0,
  };

  return (
    <>
      <LeadPageLayout title="Projetos" banner={bannerNoticias}>
        <ProjectsPage
          items={nodes}
          pageInfo={pageInfo}
          onPageChange={setCurrentPage}
        />
      </LeadPageLayout>
    </>
  );
}
