"use client";

import CustomButton from "@/components/Buttons/CustomButton";
import RichTextRenderer from "@/components/RichTextRenderer/RichTextRenderer";
import { useCanalDenuncias } from "@/hooks/quem-somos/canal-de-denuncias/useCanalDenuncias";


export const CanalDenunciasPage = () => {

  const { data: CanalDenuncias, isLoading } = useCanalDenuncias();


  return <div className="custom-container mt-12">
    <h1 className="text-primary heading-4xl font-extrabold">
      Canal de Denúncias
    </h1>
    <div className="grid grid-cols-8 gap-16 mt-10">
      <div className="col-span-full lg:col-span-4 flex flex-col gap-4">
        <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${CanalDenuncias?.canalDeDenuncia?.media?.url}`}
          alt={CanalDenuncias?.canalDeDenuncia?.media?.alternativeText}
          className="shadow-sm rounded-sm"
        />
      </div>
      <div className="col-span-full lg:col-span-4 ">
        <RichTextRenderer content={CanalDenuncias?.canalDeDenuncia?.content || ""} />
        <CustomButton className="mt-5" label="Canal de Denúncias" path={CanalDenuncias?.canalDeDenuncia?.link} />
      </div>
    </div>
  </div>;
};
