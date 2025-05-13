import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";

const ATIVIDADES_E_SERVICO_QUERY = gql`
  query AtividadeEServico {
    atividadeEServico {
      Content {
        __typename
        Title
        Content
      }
      media_connection {
        nodes {
          url
          alternativeText
        }
      }
    }
  }
`;
export async function GET(req: NextRequest) {
  try {
    const data = await request(
      GRAPHQL_ENDPOINT,
      ATIVIDADES_E_SERVICO_QUERY,
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
