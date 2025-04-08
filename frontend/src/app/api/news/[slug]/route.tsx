import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";

const NEW_QUERY = gql`
  query GetNew($slug: String!) {
    news_connection(filters: { slug: { contains: $slug } }) {
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

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const data = await request(
      GRAPHQL_ENDPOINT,
      NEW_QUERY,
      { slug },
      GRAPHQL_HEADERS
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}
