import CustomButton from "@/components/Buttons/CustomButton";
import RichTextRenderer from "@/components/RichTextRenderer/RichTextRenderer";
import { NewsArticle } from "@/hooks/News/useNews";
import { formatDateInPortuguese } from "@/utils/dateHelpers";
import { ShareNetwork } from "@phosphor-icons/react";
import Image from "next/image";

interface NoticiasPageProps {
  item: NewsArticle;
}

export const NoticiaPage: React.FC<NoticiasPageProps> = ({ item }) => {
  return (
    <>
      <div className="custom-container mt-12">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
            <h1 className="text-primary heading-4xl font-extrabold">
              {item.Titulo}
            </h1>
            <p className="text-justify lineHeight-2rem">{item.SubTitulo}</p>
            <div className="flex justify-between items-center">
              <p className="text-neutral font-medium">
                {formatDateInPortuguese(item.publicadoEm)}
              </p>
              <button className="btn btn-outline btn-primary btn-sm">
                Partilhar
                <ShareNetwork size={20} />
              </button>
            </div>
            {item.Imagens.length > 1 ? (
              <></> // adicionar carrosel se mais que uma imagem
            ) : (
              <div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Imagens[0].url}`}
                  alt={item.Imagens[0].alternativeText || ""}
                  width={800}
                  height={200}
                  layout="responsive"
                  className="aspect-[5/2] object-cover h-full shadow-sm"
                />
              </div>
            )}
            <RichTextRenderer content={item.Conteudo} />
          </div>
        </div>
      </div>
    </>
  );
};
