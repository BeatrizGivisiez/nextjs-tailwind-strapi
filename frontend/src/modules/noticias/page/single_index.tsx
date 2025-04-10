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

const NoticiaImageCarousel = dynamic(
  () => import("../../../components/Carousel/ImageCarousel"),
  {
    loading: () => <CarouselSkeletonLayout nSlides={1} />,
    ssr: false,
  }
);

interface NoticiasPageProps {
  item: NewsArticle;
  lastNews: NewsArticle[];
}

export const NoticiaPage: React.FC<NoticiasPageProps> = ({
  item,
  lastNews,
}) => {
  const router = useRouter();

  const handleLastNewsDivClick = () => {
    router.push(`/noticias`);
  };

  return (
    <>
      <div className="custom-container mt-12">
        <div className="grid grid-cols-6 gap-16">
          <div className="col-span-full lg:col-span-4 flex flex-col gap-4">
            <h1 className="text-primary heading-4xl font-extrabold">
              {item.Titulo}
            </h1>
            <p className="text-justify lineHeight-2rem">{item.SubTitulo}</p>
            <div className="flex gap-4 justify-between items-center">
              <p className="text-neutral font-medium">
                {formatDateInPortuguese(item.publicadoEm)}
              </p>
              <button className="btn btn-outline btn-primary btn-sm">
                Partilhar
                <ShareNetwork size={20} />
              </button>
            </div>
            {item.Imagens.length > 1 ? (
              <div className="">
                <NoticiaImageCarousel images={item.Imagens} />
              </div>
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
          <div className="col-span-full lg:col-span-2 ">
            <div
              className="flex items-center gap-2 hover:underline transition-all cursor-pointer"
              onClick={handleLastNewsDivClick}
            >
              <h4 className="heading-xl text-primary font-semibold">
                Últimas Noticías
              </h4>
              <CaretRight />
            </div>
            <div className="grid gap-3 mt-4">
              {lastNews?.map((newsItem) => {
                return (
                  <NoticiasItemLastNewCard
                    key={newsItem.slug}
                    item={newsItem}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
