// /app/api/news/route.ts (App Router)
// or /pages/api/news.ts (Pages Router)
import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";

const PROJECTS_QUERY = gql`
  query GetProjects($page: Int!, $pageSize: Int!) {
    projetos_connection(pagination: { page: $page, pageSize: $pageSize }) {
      nodes {
        Titulo
        Descricao
        slug
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
      PROJECTS_QUERY,
      { page, pageSize },
      GRAPHQL_HEADERS
    );

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
