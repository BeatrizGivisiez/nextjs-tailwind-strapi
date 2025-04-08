import { NewsArticle } from "@/hooks/useNews";
import { formatDateInPortuguese } from "@/utils/dateHelpers";

interface Props {
  item: NewsArticle;
  viewMode?: string;
}

export const NoticiasItemListCard: React.FC<Props> = ({ item, viewMode }) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Imagens[0].url}`;
  console.log("Image URL:", imageUrl); // Debugging line

  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img
          src={imageUrl}
          alt="Test"
          style={{ width: "100%", height: "auto" }}
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
