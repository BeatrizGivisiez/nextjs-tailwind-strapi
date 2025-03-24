interface NoticiaPageProps {
  params: { id: string };
}

export default function Noticia({ params }: NoticiaPageProps) {
  return <p>Notícia ID: {params.id}</p>;
}
