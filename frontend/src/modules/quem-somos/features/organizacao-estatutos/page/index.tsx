"use client";

import CustomButton from "@/components/Buttons/CustomButton";
import ContentItemListCarousel from "@/components/Carousel/ContentItemListCarousel";
import RichTextRenderer from "@/components/RichTextRenderer/RichTextRenderer";
import { useOrganizacaoEstatutos } from "@/hooks/quem-somos/organizacao-estatutos/useOrganizacaoEstatutos";
import { FilePdf } from "@phosphor-icons/react";


export const OrganizacaoEstatutosPage = () => {

  const { data: OrganizacaoEstatutos, isLoading } = useOrganizacaoEstatutos();


  return <div className="custom-container mt-12">
    <div className="grid grid-cols-6 gap-16">
      <div className="col-span-full lg:col-span-4 flex flex-col gap-4">
        <h1 className="text-primary heading-4xl font-extrabold">
          Organização e Estatutos
        </h1>
        <div className="my-2">
          <h2 className="font-semibold heading-xl text-primary">Órgãos Sociais</h2>
          <RichTextRenderer content={OrganizacaoEstatutos?.organizacaoEEstatuto?.orgaosSociais.content || ""} />
          <CustomButton
            className="lg:w-1/3 justify-start mt-2"
            path={`${process.env.NEXT_PUBLIC_STRAPI_URL}${OrganizacaoEstatutos?.organizacaoEEstatuto.orgaosSociais.file.url}` || ""}
            icon={<FilePdf size={32} weight="duotone" />}
            variant="ghost"
            label={OrganizacaoEstatutos?.organizacaoEEstatuto?.orgaosSociais?.file?.caption || ""}
          />
        </div>

        <div className="mt-2">
          <h2 className="font-semibold heading-xl text-primary">Estatutos</h2>
          <RichTextRenderer content={OrganizacaoEstatutos?.organizacaoEEstatuto?.estatutos.content || ""} />
          <CustomButton
            className="lg:w-1/3 justify-start mt-2"
            path={`${process.env.NEXT_PUBLIC_STRAPI_URL}${OrganizacaoEstatutos?.organizacaoEEstatuto.estatutos.file.url}` || ""}
            icon={<FilePdf size={32} weight="duotone" />}
            variant="ghost"
            label={OrganizacaoEstatutos?.organizacaoEEstatuto?.estatutos?.file?.caption || ""}
          />
        </div>

        <div className="my-2">
          <h2 className="font-semibold heading-xl text-primary">Contas dos Exercícios</h2>
          {OrganizacaoEstatutos?.organizacaoEEstatuto?.contasExercicios?.files && (
            <div className="mt-2">
              <ContentItemListCarousel
                items={OrganizacaoEstatutos?.organizacaoEEstatuto?.contasExercicios?.files}
                renderItem={(file, i) => (
                  <CustomButton
                    className="justify-start"
                    path={`${process.env.NEXT_PUBLIC_STRAPI_URL}${file.url}` || ""}
                    icon={<FilePdf size={32} weight="duotone" />}
                    variant="ghost"
                    label={file.caption || ""}
                  />
                )}
                margin={false}
              />
            </div>
          )
          }
        </div>

        <div className="my-2">
          <h2 className="font-semibold heading-xl text-primary">Publicações editadas</h2>
          <p className="mt-2">Notícias da CEDEMA</p>
          {OrganizacaoEstatutos?.organizacaoEEstatuto?.publicacoesEditadas?.files && (
            <div className="mt-2">
              <ContentItemListCarousel
                items={OrganizacaoEstatutos?.organizacaoEEstatuto?.publicacoesEditadas?.files}
                renderItem={(file, i) => (
                  <CustomButton
                    className="justify-start"
                    path={`${process.env.NEXT_PUBLIC_STRAPI_URL}${file.url}` || ""}
                    icon={<FilePdf size={32} weight="duotone" />}
                    variant="ghost"
                    label={file.caption || ""}
                  />
                )}
                margin={false}
              />
            </div>
          )
          }
        </div>
        <div className="my-2">
          <h2 className="font-semibold heading-xl text-primary">Código de ética e conduta</h2>
          <CustomButton
            className="lg:w-2/5 justify-start mt-2"
            path={`${process.env.NEXT_PUBLIC_STRAPI_URL}${OrganizacaoEstatutos?.organizacaoEEstatuto.codigoEticaConduta.url}` || ""}
            icon={<FilePdf size={32} weight="duotone" />}
            variant="ghost"
            label={OrganizacaoEstatutos?.organizacaoEEstatuto?.codigoEticaConduta?.caption || ""}
          />
        </div>
        {/* <RichTextRenderer content={Financiamneto?.financiamento?.content || ""} /> */}
      </div>
      <div className="col-span-full lg:col-span-2 ">
        {/* {Parcerias?.parceria.media_connection.nodes && (
          <ImageCarousel aspectRatio="4/3" images={Parcerias?.parceria.media_connection.nodes} />
        )} */}
      </div>
    </div>
  </div>;
};
