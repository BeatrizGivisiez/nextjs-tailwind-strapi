"use client";

import { Quotes } from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Testemunho } from "@/hooks/PaginaPrincipal/usePaginaPrincipal";

type IntroProps = {
  testemunhos: Testemunho[];
};

export const FeedbackSection = ({ testemunhos }: IntroProps) => {
  return (
    <section className="bg-white px-2">
      <div className="custom-container h-full pb-15">
        <h2 className="text-primary mb-12 text-6xl font-extrabold">
          O QUE DIZEM DE NÓS
        </h2>
        <div className="relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
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
            {testemunhos.map((testemunho, index) => (
              <SwiperSlide key={index} className="pb-20">
                <div className="border-primary relative mt-8 flex h-full flex-col items-center rounded-lg border bg-white p-6 pt-10 text-sm">
                  <div className="bg-primary absolute -top-5 flex items-center justify-center rounded-full p-2">
                    <Quotes size={30} color="#fcfcfc" weight="fill" />
                  </div>
                  <p className="mb-4 flex-grow text-center">
                    {testemunho.Testemunho}
                  </p>
                  <span className="text-primary mt-auto text-sm font-bold">
                    {testemunho.Nome}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
