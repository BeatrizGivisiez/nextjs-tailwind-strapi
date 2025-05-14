"use client";

import SingleProject from "@/components/Projects/page";

interface ProjetoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function Projeto({ params }: ProjetoPageProps) {
  return <SingleProject params={params} />;
}
