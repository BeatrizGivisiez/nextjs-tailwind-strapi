// /app/api/news/route.ts (App Router)
// or /pages/api/news.ts (Pages Router)
import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";

const NEWS_QUERY = gql`
  query GetLastNews {
    news_connection(
      sort: ["publicadoEm:desc"]
      pagination: { start: 0, limit: 5 }
    ) {
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
    }
  }
`;

export async function GET(req: NextRequest) {
  try {
    const data: any = await request(
      GRAPHQL_ENDPOINT,
      NEWS_QUERY,
      GRAPHQL_HEADERS
    );

    return NextResponse.json(data.news_connection?.nodes);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
