"use client";
import { useNews } from "@/hooks/useNews";

export default function Noticias() {
  const { data: articles, isLoading } = useNews();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <p>Noticias</p>
      {articles?.map((a) => a.Titulo)}
    </>
  );
}
