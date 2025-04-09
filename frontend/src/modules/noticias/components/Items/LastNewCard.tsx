import { NewsArticle } from "@/hooks/News/useNews";
import {
  formatDateInPortuguese,
  formatDateInShortPortuguese,
} from "@/utils/dateHelpers";
import { Circle } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  item: NewsArticle;
}

export const NoticiasItemLastNewCard: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Imagens[0].url}`;

  const handleDivClick = () => {
    router.push(`/noticias/${item.slug}`);
  };

  return (
    <div className="cursor-pointer" onClick={handleDivClick}>
      <div className="flex gap-1 text-error items-center font-medium ">
        <Circle weight="fill" />
        <span>{formatDateInShortPortuguese(item.publicadoEm)}</span>
      </div>
      <div className="pl-4 grid grid-cols-3 justify-around gap-3">
        <p className="col-span-2 line-clamp-6 text-sm font-medium">
          {item.SubTitulo}
        </p>
        <Image
          src={imageUrl}
          alt={item.Imagens[0].alternativeText || ""}
          width={800}
          height={200}
          layout="responsive"
          className={" object-cover h-full rounded-md"}
        />
      </div>
    </div>
  );
};
