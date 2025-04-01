"use client";

import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { DestaquesNoticias } from "../components/DestaquesNoticias";
import { BotoesInfo } from "../components/BotoesInfo";
import { FeedbackSection } from "../components/FeedbackSection";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Intro />
      <DestaquesNoticias />
      <BotoesInfo />
      <FeedbackSection />
      <Footer />
    </>
  );
};
