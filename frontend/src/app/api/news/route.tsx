// /app/api/news/route.ts (App Router)
// or /pages/api/news.ts (Pages Router)
import { NextResponse } from "next/server";
import { request, gql } from "graphql-request";

const endpoint = `${process.env.STRAPI_URL}/graphql`;

const headers = {
  Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
};

interface ImageAttributes {
  url: string;
  alternativeText?: string;
  caption?: string;
}

interface ImageData {
  id: string;
  attributes: ImageAttributes;
}

interface NewsAttributes {
  Titulo: string;
  SubTitulo?: string;
  slug: string;
  Conteudo: string;
  publicadoEm: string;
  Imagens?: {
    data: ImageData[];
  };
}

interface NewsItem {
  id: string;
  attributes: NewsAttributes;
}

interface NewsQueryResponse {
  news: NewsItem[];
}

const NEWS_QUERY = gql`
  query GetNews {
    news {
      Titulo
      SubTitulo
      slug
      Conteudo
      publicadoEm
      Imagens {
        url
        alternativeText
        caption
      }
    }
  }
`;

export async function GET() {
  try {
    const data: NewsQueryResponse = await request(
      endpoint,
      NEWS_QUERY,
      {},
      headers,
    );

    const articles = data.news.map((item) => ({
      ...item,
    }));

    return NextResponse.json(articles);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
