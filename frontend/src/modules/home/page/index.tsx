"use client";

import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { DestaquesNoticias } from "../components/DestaquesNoticias";
import { BotoesInfo } from "../components/BotoesInfo";
import { FeedbackSection } from "../components/FeedbackSection";
import { usePaginaPrincipal } from "@/hooks/PaginaPrincipal/usePaginaPrincipal";
import { motion } from "framer-motion";
import { CircleNotch } from "@phosphor-icons/react";
import { useNews } from "@/hooks/News/useNews";

export const HomePage = () => {
  const { data: landingPageData, isLoading, isError } = usePaginaPrincipal();
  const { data: newsData } = useNews(1); // Pass the first page as default
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
          <CircleNotch size={48} weight="fill" color="#2563eb" />
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
        aboutMedia={landingPageData.AboutMedia}
        googleMaps={landingPageData.GoogleMaps}
        ondeEstamos={landingPageData.OndeEstamos}
        youtube_video_urls={landingPageData.youtube_video_urls}
        mensagemPresidente={landingPageData.presidentmensagem}
      />
      <DestaquesNoticias news={newsData?.news_connection.nodes} />
      <BotoesInfo />
      <FeedbackSection testemunhos={landingPageData.testemunhos} />
    </>
  );
};
