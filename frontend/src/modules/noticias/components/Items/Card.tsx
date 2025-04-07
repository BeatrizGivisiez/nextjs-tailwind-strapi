import { NewsArticle } from "@/hooks/useNews";
import { formatDateInPortuguese } from "@/utils/dateHelpers";
import Image from "next/image";

interface Props {
  item: NewsArticle;
  viewMode?: string;
}

export const NoticiasItemListCard: React.FC<Props> = ({ item, viewMode }) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Imagens[0].url}`;

  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <Image
          src={imageUrl}
          alt={item.Imagens[0].alternativeText || ""}
          width={800}
          height={200}
          layout="responsive"
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
          <button className="btn btn-primary btn-md">Saber Mais</button>
        </div>
      </div>
    </div>
  );
};
