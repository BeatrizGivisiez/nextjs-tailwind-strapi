// ItemList.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ContentItemListCard } from "../Content/Card";
import { NewsArticle } from "@/hooks/News/useNews";
import { ProjectsArticle } from "@/hooks/Projects/useProjects";

interface Props {
  items: NewsArticle[] | ProjectsArticle[];
}

const ContentItemListCarousel: React.FC<Props> = ({ items }) => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={4}
        spaceBetween={16}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper pb-10"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="pb-10">
            <ContentItemListCard item={item} key={item.slug} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentItemListCarousel;
