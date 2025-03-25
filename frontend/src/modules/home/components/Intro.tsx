import { YoutubeLogo } from "phosphor-react";

export const Intro = () => {
  return (
    <div className="min-h-screen">
      <section className=" h-full custom-container py-24">
        <div className="grid grid-cols-12">
          <div className="col-span-full md:col-span-7">
            <p className="text-2xl">
              <span className="text-8xl font-header uppercase text-primary font-extrabold">
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
          <div className="col-span-full md:col-span-5"></div>
        </div>
        <div className="grid grid-cols-12 mt-16">
          <div className="col-span-full md:col-span-7 md:order-2">
            <h3 className="text-primary text-6xl md:text-right font-extrabold">
              ONDE ESTAMOS
            </h3>
            <p className="text-2xl md:text-right m-2">
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
          <div className="col-span-full md:col-span-5 md:order-1"></div>
        </div>
        <div className="mt-16">
          <h3 className="text-primary text-6xl font-extrabold">
            conheça o nosso trabalho
          </h3>
          <div className="flex justify-end">
            <button className="btn btn-primary btn-lg">
              <YoutubeLogo size={32} /> Ver Videos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
