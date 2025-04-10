import { formatDateInPortuguese } from "@/utils/dateHelpers";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  item: any;
  viewMode?: string;
}

export const ContentItemListCard: React.FC<Props> = ({ item, viewMode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Imagens[0].url}`;
  const handleButtonClick = () => {
    router.push(`${pathname}/${item.slug}`);
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
          loading="lazy"
          className={`${viewMode === "list" ? "aspect-[5/1] object-cover h-full" : ""} `}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-neutral font-extrabold body-2xl font-header">
          {item.Titulo}
        </h2>
        {item.publicadoEm && (
          <p className="text-primary text-base font-medium">
            {formatDateInPortuguese(item.publicadoEm)}
          </p>
        )}
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
