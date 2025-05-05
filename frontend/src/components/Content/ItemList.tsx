// ItemList.tsx
import React from "react";
import { ContentItemListCard } from "./Card";
import dynamic from "next/dynamic";
import CarouselSkeletonLayout from "@/layouts/CarouselSkeletonLayout";
import { NewsArticle } from "@/hooks/News/useNews";
import { ProjectsArticle } from "@/hooks/Projects/useProjects";

interface Props {
  items: NewsArticle[] | ProjectsArticle[];
  viewMode: string;
}

const ItemListCarousel = dynamic(() => import("../Carousel/ItemListCarousel"), {
  loading: () => <CarouselSkeletonLayout nSlides={4} />,
  ssr: false,
});

const ContentItemList: React.FC<Props> = ({ items, viewMode }) => {
  return (
    <div className="mt-4">
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <ContentItemListCard
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
            <ContentItemListCard
              item={item}
              key={item.slug}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}
      {viewMode === "carousel" && <ItemListCarousel items={items} />}
    </div>
  );
};

export default ContentItemList;
