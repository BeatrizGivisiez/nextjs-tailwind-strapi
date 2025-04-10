"use client";

import { ContactInfo } from "../components/ContactInfo";
import { ContactSection } from "../components/ContactSection";
import LeadPageLayout from "@/layouts/LeadPageLayout";
import bannerNoticias from "@/assets/NoticiasBanner.jpg";
import { useLocations } from "@/hooks/Locations/useLocations";

export const Contactos = () => {
  const { data: locationsData, isLoading, isError } = useLocations();

  // Only render layout immediately, delay dynamic content to avoid hydration mismatch
  return (
    <LeadPageLayout title="Contactos" banner={bannerNoticias}>
      {isLoading && (
        <p className="mt-6 text-center text-gray-500">Loading...</p>
      )}

      {isError && (
        <p className="mt-6 text-center text-red-500">
          Failed to load contact info.
        </p>
      )}

      {locationsData && (
        <>
          <ContactInfo locations={locationsData} />
          <ContactSection />
        </>
      )}
    </LeadPageLayout>
  );
};
