import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";


const RESPOSTAS_SOCIAIS_QUERY = gql`
  query RespostasSociais {
    respostaSocial {
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
    const { searchParams } = new URL(req.url);

    const data = await request(
      GRAPHQL_ENDPOINT,
      RESPOSTAS_SOCIAIS_QUERY,
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