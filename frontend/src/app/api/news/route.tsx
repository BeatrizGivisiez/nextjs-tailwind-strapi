// /app/api/news/route.ts (App Router)
// or /pages/api/news.ts (Pages Router)
import { NextRequest, NextResponse } from "next/server";
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
  query GetNews($page: Int!, $pageSize: Int!) {
    news_connection(pagination: { page: $page, pageSize: $pageSize }) {
      nodes {
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
      pageInfo {
        total
        page
        pageSize
        pageCount
      }
    }
  }
`;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") ?? 1);
    const pageSize = Number(searchParams.get("pageSize") ?? 20);

    const data = await request(
      endpoint,
      NEWS_QUERY,
      { page, pageSize },
      headers
    );

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
