"use client";
import { useProjects } from "@/hooks/Projects/useProjects";
import { ProjectsPage } from "@/modules/projects/page";
import { useState } from "react";

interface ApoiarProjectsProps { }

export const ApoiarProjects: React.FC<ApoiarProjectsProps> = ({ }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const { data: projects, isLoading } = useProjects(currentPage, pageSize);

  const nodes = projects?.projetos_connection.nodes || [];
  const pageInfo = projects?.projetos_connection.pageInfo || {
    total: 0,
    page: currentPage,
    pageSize,
    pageCount: 0,
  };

  if (isLoading) return <p>Loading</p>;

  return (
    <div className="custom-container mt-10">
      <h4 className="text-primary heading-4xl font-extrabold">
        Os nossos projetos
      </h4>
      <ProjectsPage
        items={nodes}
        pageInfo={pageInfo}
        onPageChange={setCurrentPage}
        header={false}
        footer={false}
        defaultviewMode="carousel"

      />
    </div>
  );
};
