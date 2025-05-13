"use client";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/hooks/News/useNews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";

type NewsProps = {
  news?: NewsArticle[];
};

export const DestaquesNoticias = ({ news = [] }: NewsProps) => {
  const destaqueNews = news.filter((n) => n.Destaque === true);
  const latestNews = news.slice(0, 8);

  const router = useRouter();

  return (
    <div className="bg-primary">
      <section className="custom-container mx-auto flex flex-col gap-2 py-24 lg:flex-row">
        {/* Destaques */}
        <div className="flex-[0.7]">
          <h3 className="text-5xl font-extrabold text-white mb-5">Destaques</h3>
          {destaqueNews.length > 0 && (
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper m-0 ml-0 mr-0 max-w-full md:max-w-[650px] lg:max-w-[450px] xl:max-w-[650px]"
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
                  <div
                    className="card bg-base-100 w-full shadow-sm cursor-pointer"
                    onClick={() => {
                      router.push(`/noticias/${article.slug}`);
                    }}
                  >
                    <figure>
                      <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Imagens?.[0]?.url || ""}`}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {new Date(article.publicadoEm).toLocaleString("pt-PT", {
                          dateStyle: "long",
                          timeStyle: "short",
                        })}
                      </h2>
                      <p className="line-clamp-6"> {article.Conteudo}</p>
                    </div>
                  </div>
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
          <h3 className="text-5xl font-extrabold text-white mb-5">
            ÚLTIMAS NOTÍCIAS
          </h3>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {latestNews.map((article) => (
              <div
                className="card lg:card-side bg-base-100 shadow-sm cursor-pointer"
                key={article.slug}
                onClick={() => {
                  router.push(`/noticias/${article.slug}`);
                }}
              >
                <figure className="min-w-1/3">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Imagens?.[0]?.url || ""}`}
                    alt={article.Titulo}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="card-body min-w-3/5">
                  <h2 className="card-title ">
                    {new Date(article.publicadoEm).toLocaleString("pt-PT", {
                      dateStyle: "long",
                      timeStyle: "short",
                    })}
                  </h2>
                  <p className="line-clamp-6">{article.Conteudo}</p>
                </div>
              </div>
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
