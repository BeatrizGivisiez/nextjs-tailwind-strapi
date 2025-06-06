"use client";

import { Accordion } from "@/components/Accordion/Accordion";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import { useRespostasSociais } from "@/hooks/respostas-sociais/useRespostasSociais";


export const RespostasSociaisPage = () => {

  const { data, isLoading } = useRespostasSociais()

  return (
    <div className="custom-container mt-12">
      <div className="grid grid-cols-6 gap-16">
        <div className="col-span-full lg:col-span-4 flex flex-col gap-4">
          <h1 className="text-primary heading-4xl font-extrabold">
            Respostas Sociais
          </h1>
          {data?.respostaSocial.Content && (
            <Accordion items={data?.respostaSocial.Content} />
          )}
        </div>
        <div className="col-span-full lg:col-span-2 ">
          {data?.respostaSocial.media_connection.nodes && (
            <ImageCarousel aspectRatio="4/3" images={data?.respostaSocial?.media_connection.nodes} />
          )}
        </div>
      </div>
    </div>
  );
};
