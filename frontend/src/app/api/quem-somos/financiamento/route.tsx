import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";

const FINANCIAMENTO_QUERY = gql`
 query Financiamento {
  financiamento {
    content
  }
}
`;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const data: any = await request(
      GRAPHQL_ENDPOINT,
      FINANCIAMENTO_QUERY,
      GRAPHQL_HEADERS
    );

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
