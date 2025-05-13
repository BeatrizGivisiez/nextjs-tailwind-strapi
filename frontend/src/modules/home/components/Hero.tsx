import Image from "next/image";
import CustomButton from "@/components/Buttons/CustomButton";
import { HandCoins } from "@phosphor-icons/react";
import cmOdivelas from "@/assets/cmOdivelas.png";
import iefp from "@/assets/iefp.png";
import gnr from "@/assets/gnr.png";
import { CaretDoubleDown } from "phosphor-react";

type HeroProps = {
  imagemHero: string;
};

export const Hero = ({ imagemHero }: HeroProps) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${imagemHero}`;

  return (
    <div
      className="flex min-h-[100vh] flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <section className="relative flex flex-grow items-center justify-center bg-black/40 pt-[80px] text-white">
        <div className="custom-container z-[1] text-left">
          <h1 className="heading-5xl leading-tight font-extrabold">
            <span className="block">SABEMOS QUE</span>
            <span className="heading-8xl block">MELHOR QUE SORRIR</span>
            <span className="block">É SORRIREM CONNOSCO</span>
          </h1>

          <h2 className="heading-xl mx-auto mt-6 font-bold">
            Ajude-nos a transformar vidas através do voluntariado e apoio
            solidário
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <CustomButton
              color="primary"
              label="Apoie Agora"
              icon={<HandCoins size={32} />}
              size="xl"
              path={"apoiar"}
            />
            <CustomButton
              variant="outline"
              color="secondary"
              label="Saber Mais"
              size="xl"
              path={"apoiar"}
            />
          </div>

          <div className="mt-10 flex flex-col gap-4 text-lg font-normal md:flex-row md:items-center">
            PARCEIROS:
            <div className="flex gap-4">
              <Image src={cmOdivelas} alt="Odivelas Câmara Municipal" />
              <Image src={iefp} alt="IEFP" />
              <Image src={gnr} alt="GNR" />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            <CaretDoubleDown weight="bold" size={32} />
            <p className="font-header text-sm font-extrabold uppercase md:text-base">
              Continue a Explorar
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
