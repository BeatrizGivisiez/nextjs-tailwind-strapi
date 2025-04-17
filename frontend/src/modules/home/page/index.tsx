"use client";

import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { DestaquesNoticias } from "../components/DestaquesNoticias";
import { BotoesInfo } from "../components/BotoesInfo";
import { FeedbackSection } from "../components/FeedbackSection";
import { usePaginaPrincipal } from "@/hooks/PaginaPrincipal/usePaginaPrincipal";
import { motion } from "framer-motion";
import { Wheelchair } from "@phosphor-icons/react";

export const HomePage = () => {
  const { data: landingPageData, isLoading, isError } = usePaginaPrincipal();
  console.log("landingPageData", landingPageData?.youtube_video_urls);
  if (isLoading) {
    return (
      <motion.div
        className="flex items-center justify-center h-screen"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Wheelchair size={48} weight="fill" color="#2563eb" />
        </motion.div>
      </motion.div>
    );
  }

  if (isError || !landingPageData) {
    return (
      <div className="text-center mt-10 text-red-600">
        Erro ao carregar a página principal.
      </div>
    );
  }

  return (
    <>
      <Hero imagemHero={landingPageData.ImagemHero?.url} />
      <Intro
        cedemaAbout={landingPageData.CedemaAbout}
        googleMaps={landingPageData.GoogleMaps}
        ondeEstamos={landingPageData.OndeEstamos}
        youtube_video_urls={landingPageData.youtube_video_urls}
      />
      <DestaquesNoticias />
      <BotoesInfo />
      <FeedbackSection />
    </>
  );
};
