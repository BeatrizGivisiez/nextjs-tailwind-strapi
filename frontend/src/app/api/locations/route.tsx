// /app/api/locations/route.ts (App Router)
// or /pages/api/locations.ts (Pages Router)
import { NextResponse } from "next/server";
import { request, gql } from "graphql-request";

const endpoint = `${process.env.STRAPI_URL}/graphql`;

const headers = {
  Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
};

// Define types matching the new structure (no id)
interface LocationAttributes {
  Title: string;
  Email?: string;
  Phone?: string;
  Address?: string;
}

interface LocationsQueryResponse {
  locations: {
    attributes: LocationAttributes;
  }[];
}

// GraphQL query
const LOCATIONS_QUERY = gql`
  query GetLocations {
    locations {
      Title
      Email
      Phone
      Address
    }
  }
`;

export async function GET() {
  try {
    const data: LocationsQueryResponse = await request(
      endpoint,
      LOCATIONS_QUERY,
      {},
      headers
    );
    console.log("data:", data); // Log the data for debugging
    const locations = data.locations.map((item) => ({
      ...item.attributes,
    }));

    return NextResponse.json(locations);
  } catch (err) {
    console.log("Error fetching locations:", err);
    return NextResponse.json(
      { error: "Failed to fetch locations" },
      { status: 500 }
    );
  }
}
