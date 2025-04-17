import { NextResponse } from "next/server";
import { request, gql } from "graphql-request";

const endpoint = `${process.env.STRAPI_URL}/graphql`;

const headers = {
  Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
};

// Updated types
interface YoutubeVideo {
  Title: string;
  YoutubeUrl: string;
  Thumbnail: { url: string };
}

interface Testemunho {
  Nome: string;
  Testemunho: string;
}

interface PaginaPrincipalAttributes {
  ImagemHero: { url: string };
  CedemaAbout: string;
  OndeEstamos: string;
  youtube_video_urls: YoutubeVideo[];
  testemunhos: Testemunho[];
  GoogleMaps: string;
}

interface PaginaPrincipalQueryResponse {
  paginaPrincipal: PaginaPrincipalAttributes[];
}

const PAGINAPRINCIPAL_QUERY = gql`
  query GetPaginaPrincipal {
    paginaPrincipal {
      ImagemHero {
        url
        alternativeText
        caption
      }
      CedemaAbout
      OndeEstamos
      youtube_video_urls {
        Title
        YoutubeUrl
        Thumbnail {
          url
        }
      }
      testemunhos {
        Nome
        Testemunho
      }
      GoogleMaps
    }
  }
`;

export async function GET() {
  try {
    const data: PaginaPrincipalQueryResponse = await request(
      endpoint,
      PAGINAPRINCIPAL_QUERY,
      {},
      headers,
    );
    return NextResponse.json(data.paginaPrincipal);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch landing page content" },
      { status: 500 },
    );
  }
}
