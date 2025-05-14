// ItemList.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ContentItemListCard } from "../Content/Card";
import { NewsArticle } from "@/hooks/News/useNews";
import { ProjectsArticle } from "@/hooks/Projects/useProjects";
import { motion } from "framer-motion";

interface Props {
  items: NewsArticle[] | ProjectsArticle[];
}

const slideVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

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
             <motion.div
              className=""
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideVariants}
            >

            </motion.div>
            <ContentItemListCard item={item} key={item.slug} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentItemListCarousel;
