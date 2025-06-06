import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";

const NEW_QUERY = gql`
  query GetProject($slug: String!) {
    projetos_connection(filters: { slug: { contains: $slug } }) {
      nodes {
        Titulo
        Descricao
        Conteudo
        slug
        Imagens {
          url
          alternativeText
          caption
        }
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
    const data: any = await request(
      GRAPHQL_ENDPOINT,
      NEW_QUERY,
      { slug },
      GRAPHQL_HEADERS
    );

    return NextResponse.json(data.projetos_connection?.nodes[0]);
  } catch (error) {
    return NextResponse.error();
  }
}
