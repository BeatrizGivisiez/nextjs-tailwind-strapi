import CustomButton from "@/components/Buttons/CustomButton";
import RichTextRenderer from "@/components/RichTextRenderer/RichTextRenderer";
import { NewsArticle } from "@/hooks/News/useNews";
import CarouselSkeletonLayout from "@/layouts/CarouselSkeletonLayout";
import { NoticiasItemLastNewCard } from "@/modules/noticias/components/Items/LastNewCard";
import { formatDateInPortuguese } from "@/utils/dateHelpers";
import { ShareNetwork } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CaretRight } from "phosphor-react";
import { useRouter } from "next/navigation";
import { ProjectsArticle } from "@/hooks/Projects/useProjects";

const ImageCarousel = dynamic(
  () => import("@/components/Carousel/ImageCarousel"),
  {
    loading: () => <CarouselSkeletonLayout nSlides={1} />,
    ssr: false,
  }
);

interface ProjetosPageProps {
  item: ProjectsArticle;
}

export const SingleProjectPage: React.FC<ProjetosPageProps> = ({ item }) => {
  return (
    <>
      <div className="custom-container mt-12">
        <div className="grid grid-cols-6 gap-16">
          <div className="col-span-full lg:col-span-4 flex flex-col gap-4">
            <h1 className="text-primary heading-4xl font-extrabold">
              {item.Titulo}
            </h1>
            <p className="text-justify lineHeight-2rem">{item.Descricao}</p>
            <RichTextRenderer content={item.Conteudo} />
          </div>
          <div className="col-span-full lg:col-span-2 ">
            <div className="mt-4 static top-7">
              {item.Imagens.length > 1 ? (
                <div className="w-full">
                  <ImageCarousel aspectRatio="1/1" images={item.Imagens} />
                </div>
              ) : (
                <div>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Imagens[0].url}`}
                    alt={item.Imagens[0].alternativeText || ""}
                    width={800}
                    height={200}
                    layout="responsive"
                    className={`aspect-[1/1] object-cover h-full shadow-sm`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
