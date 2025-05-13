"use client";

import { Accordion } from "@/components/Accordion/Accordion";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import { useAtividadesServicos } from "@/hooks/atividades-e-servicos/useAtividadesServicos";
import { useRespostasSociais } from "@/hooks/respostas-sociais/useRespostasSociais";


export const AtividadesServicosPage = () => {

  const { data, isLoading } = useAtividadesServicos()

  return (
    <div className="custom-container mt-12">
      <div className="grid grid-cols-6 gap-16">
        <div className="col-span-full lg:col-span-4 flex flex-col gap-4">
          <h1 className="text-primary heading-4xl font-extrabold">
            Atividades e Serviços
          </h1>
          {data?.atividadeEServico.Content && (
            <Accordion items={data?.atividadeEServico.Content} />
          )}
        </div>
        <div className="col-span-full lg:col-span-2 ">
          {data?.atividadeEServico.media_connection.nodes && (
            <ImageCarousel aspectRatio="4/3" images={data?.atividadeEServico?.media_connection.nodes} />
          )}
        </div>
      </div>
    </div>
  );
};
