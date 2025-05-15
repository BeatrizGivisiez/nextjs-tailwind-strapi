"use client";

import CustomButton from "@/components/Buttons/CustomButton";
import RichTextRenderer from "@/components/RichTextRenderer/RichTextRenderer";
import { useQuemSomos } from "@/hooks/quem-somos/useQuemSomos";
import { useRef } from "react";
import ReactPlayer from "react-player";


export const QuemSomosPage = () => {

  const { data: QuemSomos, isLoading } = useQuemSomos();
  const playerRef = useRef<ReactPlayer>(null);


  return <div className="custom-container mt-12">

    <div className="grid grid-cols-8 gap-16 mt-10">
      <div className="col-span-full lg:col-span-4 flex flex-col gap-4">
        <h1 className="text-primary heading-4xl font-extrabold">
          Quem Somos
        </h1>
        <RichTextRenderer content={QuemSomos?.quemSomo?.quemSomos || ""} />
      </div>
      <div className="col-span-full lg:col-span-4 ">
        {QuemSomos?.quemSomo?.videoApresentacao?.YoutubeUrl && (
          <div className="rounded-sm shadow-sm overflow-hidden">
            <ReactPlayer
              ref={playerRef}
              url={QuemSomos?.quemSomo?.videoApresentacao?.YoutubeUrl}
              width={"100%"}
              controls
            />
          </div>
        )}
      </div>
    </div>
    <div className="grid grid-cols-8 gap-16 mt-10" id="historia">
      <div className="col-span-full flex flex-col gap-4">
        <h2 className="font-semibold heading-2xl text-primary">A Nossa Historia</h2>
        <RichTextRenderer content={QuemSomos?.quemSomo?.historia || ""} />
      </div>
    </div>
    <div className="grid grid-cols-8 gap-16 mt-10" id="missao-valores">
      <div className="col-span-full flex flex-col gap-4" >
        <h2 className="font-semibold heading-2xl text-primary">Missão e Valores</h2>
        <RichTextRenderer content={QuemSomos?.quemSomo?.missaoValores || ""} />
      </div>
    </div>
  </div>;
};
