// ItemList.tsx
import { NewsArticle } from "@/hooks/News/useNews";
import React from "react";
import { NoticiasItemListCard } from "./Items/Card";
import dynamic from "next/dynamic";

interface Props {
  items: NewsArticle[];
  viewMode: string;
}

const NoticiasItemListCarousel = dynamic(
  () => import("./Items/ItemListCarousel"),
  {
    ssr: false,
  }
);

const NoticiasItemList: React.FC<Props> = ({ items, viewMode }) => {
  return (
    <div className="mt-4">
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <NoticiasItemListCard
              item={item}
              key={item.slug}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}

      {viewMode === "list" && (
        <div className="grid grid-cols-1 gap-4">
          {items.map((item) => (
            <NoticiasItemListCard
              item={item}
              key={item.slug}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}

      {viewMode === "carousel" && <NoticiasItemListCarousel items={items} />}
    </div>
  );
};

export default NoticiasItemList;
