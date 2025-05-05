"use client";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/hooks/News/useNews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type NewsProps = {
  news?: NewsArticle[];
};

export const DestaquesNoticias = ({ news = [] }: NewsProps) => {
  const destaqueNews = news.filter((n) => n.Destaque === true);
  const latestNews = news.slice(0, 8);

  return (
    <div className="bg-primary">
      <section className="custom-container mx-auto flex flex-col gap-2 py-24 lg:flex-row">
        {/* Destaques */}
        <div className="flex-[0.7]">
          <h3 className="text-5xl font-extrabold text-white">Destaques</h3>
          {destaqueNews.length > 0 && (
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper m-0 max-w-full md:max-w-[650px] lg:max-w-[450px] xl:max-w-[650px]"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
            >
              {destaqueNews.map((article) => (
                <SwiperSlide key={article.slug}>
                  <Link href={`/noticias/${article.slug}`} passHref>
                    <div className="max-w-[600px] overflow-hidden rounded-lg bg-white p-2 shadow">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Imagens?.[0]?.url || ""}`}
                        alt={article.Titulo}
                        className="mb-4 min-h-[400px] w-fit rounded-md object-cover"
                        width={300}
                        height={300}
                      />
                      <p className="mb-1 text-xs font-semibold text-neutral-500">
                        {new Date(article.publicadoEm).toLocaleDateString(
                          "pt-PT",
                          {
                            weekday: "long",
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </p>
                      <p className="mb-4 text-xs text-neutral-700">
                        {article.Conteudo}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <Link
            href={{ pathname: "/noticias", query: { destaques: "true" } }}
            passHref
          >
            <button
              type="button"
              className="mt-4 block cursor-pointer text-sm text-white underline"
            >
              VER MAIS DESTAQUES
            </button>
          </Link>
        </div>

        {/* Últimas Notícias */}
        <div className="flex-1">
          <h3 className="text-5xl font-extrabold text-white">
            ÚLTIMAS NOTÍCIAS
          </h3>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {latestNews.map((article) => (
              <Link
                key={article.slug}
                href={`/noticias/${article.slug}`}
                className="flex items-start gap-2 rounded-lg bg-white p-1 shadow"
              >
                <div className="relative h-24 w-32 flex-shrink-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Imagens?.[0]?.url || ""}`}
                    alt={article.Titulo}
                    className="h-full w-full rounded-md object-cover"
                    fill
                  />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-xs font-semibold text-neutral-500">
                    {new Date(article.publicadoEm).toLocaleString("pt-PT", {
                      dateStyle: "long",
                      timeStyle: "short",
                    })}
                  </p>
                  <p className="text-xs text-neutral-700">{article.Conteudo}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/noticias" passHref>
            <button
              type="button"
              className="mt-4 block cursor-pointer text-sm text-white underline"
            >
              VER MAIS NOTÍCIAS
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
