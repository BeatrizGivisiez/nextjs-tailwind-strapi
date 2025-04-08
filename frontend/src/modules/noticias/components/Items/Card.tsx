import { NewsArticle } from "@/hooks/News/useNews";
import { formatDateInPortuguese } from "@/utils/dateHelpers";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  item: NewsArticle;
  viewMode?: string;
}

export const NoticiasItemListCard: React.FC<Props> = ({ item, viewMode }) => {
  const router = useRouter();
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Imagens[0].url}`;

  const handleButtonClick = () => {
    router.push(`/noticias/${item.slug}`);
  };

  return (
    <div
      className={`card ${viewMode === "list" ? "flex flex-row" : ""} bg-base-100 w-full shadow-sm h-full`}
    >
      <figure>
        <Image
          src={imageUrl}
          alt={item.Imagens[0].alternativeText || ""}
          width={800}
          height={200}
          unoptimized
          className={`${viewMode === "list" ? "aspect-[5/1] object-cover h-full" : ""} `}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-neutral font-extrabold body-2xl font-header">
          {item.Titulo}
        </h2>
        <p className="text-primary text-base font-medium">
          {formatDateInPortuguese(item.publicadoEm)}
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={handleButtonClick}
            className="btn btn-primary btn-md"
          >
            Saber Mais
          </button>
        </div>
      </div>
    </div>
  );
};
