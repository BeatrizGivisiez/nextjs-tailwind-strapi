"use client";

import { ContactInfo } from "../components/ContactInfo";
import { ContactSection } from "../components/ContactSection";
import LeadPageLayout from "@/layouts/LeadPageLayout";
import bannerNoticias from "@/assets/NoticiasBanner.jpg";
import { useLocations } from "@/hooks/useLocations";

export const Contactos = () => {
  const { data: locationsData } = useLocations();
  console.log("Locations Data:", locationsData);
  return (
    <>
      <LeadPageLayout title="Contactos" banner={bannerNoticias}>
        <ContactInfo />
        <ContactSection />
      </LeadPageLayout>
    </>
  );
};
