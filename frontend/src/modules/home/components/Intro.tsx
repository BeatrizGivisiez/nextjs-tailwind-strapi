import { YoutubeLogo } from "phosphor-react";
import image1 from "@/assets/HeroBG.jpg";
import Image from "next/image";
import CustomButton from "@/components/Buttons/CustomButton";

export const Intro = () => {
  return (
    <div className="min-h-screen">
      <section className="custom-container h-full py-24">
        <div className="grid grid-cols-12">
          <div className="col-span-full md:col-span-7">
            <p className="body-2xl">
              <span className="heading-8xl font-header text-primary font-extrabold uppercase">
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
            <div className="mt-3 grid grid-cols-2 gap-3 md:mt-0 md:grid-cols-2">
              <Image
                src={image1}
                alt=""
                className="h-64 rounded-lg object-cover lg:h-auto"
              />
              <Image
                src={image1}
                alt=""
                className="h-64 rounded-lg object-cover lg:h-auto"
              />
              <Image
                src={image1}
                alt=""
                className="h-64 rounded-lg object-cover lg:h-auto"
              />
              <Image
                src={image1}
                alt=""
                className="h-64 rounded-lg object-cover lg:h-auto"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-12">
          <div className="col-span-full md:order-2 md:col-span-7">
            <h3 className="text-primary heading-6xl font-extrabold md:text-right">
              ONDE ESTAMOS
            </h3>
            <p className="body-2xl m-2 md:text-right">
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
          <div className="col-span-full md:order-1 md:col-span-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.095159258481!2d-9.15975391724226!3d38.78685903820371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19335b579b5107%3A0x1d5d8f072787d322!2sCEDEMA%20-%20Associa%C3%A7%C3%A3o%20de%20Pais%20e%20Amigos%20dos%20Deficientes%20Mentais%20Adultos!5e0!3m2!1sen!2spt!4v1743513651354!5m2!1sen!2spt&zoom=disable"
              width="100%"
              height="450"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />

            <p className="text-neutral mt-2 text-center text-sm">
              Rua Varela Silva, Lote 8 – Loja A
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-primary heading-6xl font-extrabold">
            conheça o nosso trabalho
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {Array.from({ length: 5 }, (_, i) => {
              return (
                <div className="relative" key={i}>
                  <Image
                    src={image1}
                    alt=""
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute top-0 left-0 z-[1] h-full w-full">
                    <div className="flex h-full items-center justify-center">
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
          <div className="mt-4 flex justify-end">
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
