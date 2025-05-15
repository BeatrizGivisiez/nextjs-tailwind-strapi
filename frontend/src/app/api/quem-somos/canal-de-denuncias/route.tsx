import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";

const CANALDENUNCIA_QUERY = gql`
 query CanalDeDenuncia {
  canalDeDenuncia {
    content
    link
    media {
      alternativeText
      url
    }
  }
}

`;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const data: any = await request(
      GRAPHQL_ENDPOINT,
      CANALDENUNCIA_QUERY,
      GRAPHQL_HEADERS
    );

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
