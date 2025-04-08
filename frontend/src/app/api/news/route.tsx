// /app/api/news/route.ts (App Router)
// or /pages/api/news.ts (Pages Router)
import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";

const NEWS_QUERY = gql`
  query GetNews($page: Int!, $pageSize: Int!) {
    news_connection(pagination: { page: $page, pageSize: $pageSize }) {
      nodes {
        Titulo
        SubTitulo
        slug
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
      GRAPHQL_ENDPOINT,
      NEWS_QUERY,
      { page, pageSize },
      GRAPHQL_HEADERS
    );

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
