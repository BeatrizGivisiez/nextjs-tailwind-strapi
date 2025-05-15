"use client";

import RichTextRenderer from "@/components/RichTextRenderer/RichTextRenderer";
import { useFinanciamento } from "@/hooks/quem-somos/financiamento/useFinanciamento";


export const FinanciamentoPage = () => {

  const { data: Financiamneto, isLoading } = useFinanciamento();


  return <div className="custom-container mt-12">
    <div className="grid grid-cols-6 gap-16">
      <div className="col-span-full lg:col-span-4 flex flex-col gap-4">
        <h1 className="text-primary heading-4xl font-extrabold">
          Financiamento
        </h1>
        <RichTextRenderer content={Financiamneto?.financiamento?.content || ""} />
      </div>
      <div className="col-span-full lg:col-span-2 ">
        {/* {Parcerias?.parceria.media_connection.nodes && (
          <ImageCarousel aspectRatio="4/3" images={Parcerias?.parceria.media_connection.nodes} />
        )} */}
      </div>
    </div>
  </div>;
};
