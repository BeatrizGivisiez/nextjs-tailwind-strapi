"use client";
import { useNews } from "@/hooks/useNews";
import LeadPageLayout from "@/layouts/LeadPageLayout";
import { NoticiasPage } from "@/modules/noticias/page";
import bannerNoticias from "@/assets/NoticiasBanner.jpg";

export default function Noticias() {
  const { data: articles, isLoading } = useNews();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <LeadPageLayout title="Noticías" banner={bannerNoticias}>
        <NoticiasPage items={articles || []} />
      </LeadPageLayout>
    </>
  );
}
