"use client";

import { Quotes } from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Foi uma experiência incrível assistir à peça. Senti-me completamente envolvido na história e emocionado com cada detalhe. Parabéns pelo excelente trabalho!",
    author: "Carlos Mendes",
  },
  {
    text: "A dedicação e o talento de todos os envolvidos são evidentes. Foi um privilégio poder assistir a algo tão bem executado. Obrigado por essa experiência!",
    author: "Ana Costa",
  },
  {
    text: "Fiquei muito impressionado com a qualidade da apresentação. Foi uma noite memorável cheia de emoção e talento. Continuem com esse trabalho maravilhoso!",
    author: "João Pereira",
  },
  {
    text: "Fiquei muito impressionado com a qualidade da apresentação. Foi uma noite memorável cheia de emoção e talento. Continuem com esse trabalho maravilhoso!",
    author: "João Pereira",
  },
  {
    text: "Fiquei muito impressionado com a qualidade da apresentação. Foi uma noite memorável cheia de emoção e talento. Continuem com esse trabalho maravilhoso!",
    author: "João Pereira",
  },
  {
    text: "Fiquei muito impressionado com a qualidade da apresentação. Foi uma noite memorável cheia de emoção e talento. Continuem com esse trabalho maravilhoso!",
    author: "João Pereira",
  },
];

export const FeedbackSection = () => {
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="pb-20">
                <div className="border-primary relative mt-8 flex h-full flex-col items-center rounded-lg border bg-white p-6 pt-10 text-sm">
                  <div className="bg-primary absolute -top-5 flex items-center justify-center rounded-full p-2">
                    <Quotes size={30} color="#fcfcfc" weight="fill" />
                  </div>
                  <p className="mb-4 flex-grow text-center">
                    {testimonial.text}
                  </p>
                  <span className="text-primary mt-auto text-sm font-bold">
                    {testimonial.author}
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
