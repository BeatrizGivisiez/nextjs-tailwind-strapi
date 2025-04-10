// ItemList.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface Props {
  images: {
    url: string;
    alternativeText?: string;
    caption?: string;
  }[];
}

const NoticiaImageCarousel: React.FC<Props> = ({ images }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper pb-10"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="pb-10">
            <div className="w-full h-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
                alt={image.alternativeText || ""}
                width={800}
                height={200}
                layout="responsive"
                className="aspect-[5/2] object-cover w-full h-full shadow-sm"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NoticiaImageCarousel;
