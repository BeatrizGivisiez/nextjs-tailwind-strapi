import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";

const QUEMSOMOS_QUERY = gql`
 query QuemSomo {
  quemSomo {
    quemSomos
    historia
    videoApresentacao {
      Thumbnail {
        alternativeText
        url
      }
      Title
      YoutubeUrl
    }
    missaoValores    
  }
}
`;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const data: any = await request(
      GRAPHQL_ENDPOINT,
      QUEMSOMOS_QUERY,
      GRAPHQL_HEADERS
    );

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
