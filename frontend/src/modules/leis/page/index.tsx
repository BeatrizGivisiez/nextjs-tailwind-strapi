"use client";

import CustomButton from "@/components/Buttons/CustomButton";
import RichTextRenderer from "@/components/RichTextRenderer/RichTextRenderer";
import { useLeis } from "@/hooks/leis/useLeis";
import { useParcerias } from "@/hooks/parcerias/useParcerias";
import Link from "next/link";

export const LeisPage = () => {

  const { data: Leis, isLoading } = useLeis();

  return (
    <div className="custom-container mt-12">
      <div className="grid grid-cols-6 gap-16">
        <div className="col-span-full lg:col-span-4 flex flex-col gap-4">
          <h1 className="text-primary heading-4xl font-extrabold">
            Leis
          </h1>
          {isLoading ?
            <div className="skeleton w-full h-96" /> : <>
              <RichTextRenderer content={Leis?.lei.content || ""} />
              <p className="lineHeight-2rem text-justify inline">Mais informação no documento completo,
                {Leis?.lei.leisDocument.url && <Link className="link link-primary" target="_blank" href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${Leis?.lei.leisDocument.url}` || ""} >em PDF</Link>}
              </p>
              <p className="lineHeight-2rem text-justify inline">Leia também o Manual de Apoio a este decreto lei,
                {Leis?.lei.manualApoio.url && <Link className="link link-primary" target="_blank" href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${Leis?.lei.manualApoio.url}` || ""} >em PDF</Link>}
              </p>

            </>}
        </div>
        <div className="col-span-full lg:col-span-2 ">
        </div>
      </div>
    </div >
  );
};
