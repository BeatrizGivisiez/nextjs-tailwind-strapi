// components/Carousel/ContentItemListCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface Props<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  margin?: boolean
}

function ContentItemListCarousel<T>({ items, renderItem, margin = true }: Props<T>) {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={`mySwiper ${margin ? " mt-10 " : ""} pb-16`}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ContentItemListCarousel;
