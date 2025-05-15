import { NextRequest, NextResponse } from "next/server";
import { request, gql } from "graphql-request";
import { GRAPHQL_ENDPOINT, GRAPHQL_HEADERS } from "@/lib/apiConfig";

const ORGESTATUTOS_QUERY = gql`
 query OrganizacaoEEstatuto {
  organizacaoEEstatuto {
    orgaosSociais {
      content
      file {
        alternativeText
        url
        caption
      }
    }
    estatutos {
      content
      file {
        alternativeText
        url
        caption
      }
    }
    contasExercicios: contasExercicios_connection {
      files: nodes {
        alternativeText
        url
        caption
      }
    }
    publicacoesEditadas:publicacoesEditadas_connection {
      files:nodes {
        alternativeText
        url
        caption
      }
    }
    codigoEticaConduta {
      alternativeText
      url
      caption
    }
  }
}

`;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const data: any = await request(
      GRAPHQL_ENDPOINT,
      ORGESTATUTOS_QUERY,
      GRAPHQL_HEADERS
    );

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
