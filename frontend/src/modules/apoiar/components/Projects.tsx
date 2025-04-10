"use client";
import { useProjects } from "@/hooks/Projects/useProjects";

interface ApoiarProjectsProps {}

export const ApoiarProjects: React.FC<ApoiarProjectsProps> = ({}) => {
  const { data: projects, isLoading } = useProjects(0, 50);

  if (isLoading) return <p>Loading</p>;

  return (
    <div className="custom-container mt-10">
      <h4 className="text-primary heading-4xl font-extrabold">
        Os nossos projetos
      </h4>
    </div>
  );
};
