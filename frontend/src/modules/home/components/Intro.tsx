import { YoutubeLogo } from "phosphor-react";
import image1 from "@/assets/HeroBG.jpg";
import Image from "next/image";
import MyGoogleMap from "@/components/Map/Map";
import CustomButton from "@/components/Buttons/CustomButton";

export const Intro = () => {
  return (
    <div className="min-h-screen">
      <section className=" h-full custom-container py-24">
        <div className="grid grid-cols-12">
          <div className="col-span-full md:col-span-7">
            <p className="body-2xl">
              <span className="heading-8xl font-header uppercase text-primary font-extrabold">
                CEDEMA
              </span>
              <span className="text-neutral ml-0.5">
                {" "}
                somos uma instituição Privada de Solidariedade Social, sem fins
                lucrativos, fundada em 16 de Fevereiro de 1982 por um grupo de
                pais que, ao ver-se envelhecer, vivia a angústia de deixar os
                filhos deficientes a familiares que não os desejavam, na rua, ou
                em locais inadequados, sem as condições mínimas de reabilitação
                exigidas
              </span>
            </p>
          </div>
          <div className="col-span-full md:col-span-5">
            <div className="mt-3 md:mt-0 grid grid-cols-4 md:grid-cols-2 gap-3">
              <Image
                src={image1}
                alt=""
                className="rounded-lg h-64 lg:h-auto object-cover"
              />
              <Image
                src={image1}
                alt=""
                className="rounded-lg h-64 lg:h-auto object-cover"
              />
              <Image
                src={image1}
                alt=""
                className="rounded-lg h-64 lg:h-auto object-cover"
              />
              <Image
                src={image1}
                alt=""
                className="rounded-lg h-64 lg:h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-16">
          <div className="col-span-full md:col-span-7 md:order-2">
            <h3 className="text-primary heading-6xl md:text-right font-extrabold">
              ONDE ESTAMOS
            </h3>
            <p className="body-2xl md:text-right m-2">
              <span className="text-neutral">
                Localizados no municipio de Lisboa na freguesia da Ameixoeira,
                temos como missão o alojamento, a reabilitação, a felicidade e a
                inclusão social da pessoa adulta portadora de deficiência
                mental, desenvolvendo e promovendo as suas capacidades. Por
                outro lado, dar apoio às suas famílias em todas as suas formas e
                vertentes lutando pela igualdade de oportunidades e direitos,
                com vista a uma plena inclusão social.
              </span>
            </p>
          </div>
          <div className="col-span-full md:col-span-5 md:order-1">
            <MyGoogleMap />
            <p className="text-neutral text-sm text-center mt-2">
              Rua Varela Silva, Lote 8 – Loja A
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-primary heading-6xl font-extrabold">
            conheça o nosso trabalho
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
            {Array.from({ length: 5 }, (_, i) => {
              return (
                <div className="relative" key={i}>
                  <Image
                    src={image1}
                    alt=""
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute left-0 top-0 w-full h-full  z-[1]">
                    <div className="flex items-center justify-center h-full">
                      <YoutubeLogo
                        weight="fill"
                        color="var(--color-error)"
                        size={80}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-4">
            <CustomButton
              color="primary"
              icon={<YoutubeLogo size={32} />}
              size="lg"
              label="Ver Videos"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
