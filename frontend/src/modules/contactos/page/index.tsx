"use client";
import { ContactInfo } from "../components/ContactInfo";
import { ContactSection } from "../components/ContactSection";
import LeadPageLayout from "@/layouts/LeadPageLayout";
import bannerNoticias from "@/assets/NoticiasBanner.jpg";

export const Contactos = () => {
  return (
    <>
      <LeadPageLayout title="Contactos" banner={bannerNoticias}>
        <ContactInfo />
        <ContactSection />
      </LeadPageLayout>
    </>
  );
};
