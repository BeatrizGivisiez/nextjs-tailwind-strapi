// ItemList.tsx
import { NewsArticle } from "@/hooks/useNews";
import React from "react";
import { NoticiasItemListCard } from "./Items/Card";

interface Props {
  items: NewsArticle[];
  viewMode: string;
}

const NoticiasItemList: React.FC<Props> = ({ items, viewMode }) => {
  return (
    <div className="mt-4">
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <NoticiasItemListCard item={item} key={item.slug} />
          ))}
        </div>
      )}

      {viewMode === "list" && (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.slug} className="border p-4">
              <h3>{item.Titulo}</h3>
              <p>{item.SubTitulo}</p>
            </div>
          ))}
        </div>
      )}

      {viewMode === "carousel" && (
        <div className="carousel">
          {items.map((item) => (
            <div key={item.slug} className="carousel-item">
              <h3>{item.Titulo}</h3>
              <p>{item.SubTitulo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoticiasItemList;
