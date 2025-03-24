import Image from "next/image";
import CustomButton from "@/components/Buttons/CustomButton";
import { HandCoins } from "@phosphor-icons/react";

import cmOdivelas from "@/assets/cmOdivelas.png";
import iefp from "@/assets/iefp.png";
import gnr from "@/assets/gnr.png";
import { CaretDoubleDown } from "phosphor-react";

export const Hero = () => {
  return (
    <div className="min-h-screen">
      <section className="relative hero text-white h-full">
        <div className="absolute inset-0 bg-[url('@/assets/HeroBG.jpg')] bg-cover bg-center brightness-[0.4]" />

        <div className="z-10 custom-container text-left">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
            <span className="block">SABEMOS QUE</span>
            <span className="block text-5xl md:text-8xl">
              MELHOR QUE SORRIR
            </span>
            <span className="block">É SORRIREM CONNOSCO</span>
          </h1>

          <h2 className="mt-6 font-bold text-sm md:text-xl mx-auto">
            Ajude-nos a transformar vidas através do voluntariado e apoio
            solidário
          </h2>

          <div className="mt-8 flex gap-4 flex-wrap">
            <CustomButton
              color="primary"
              label="Apoie Agora"
              icon={<HandCoins size={32} />}
              size="xl"
            />
            <CustomButton
              variant="outline"
              color="secondary"
              label="Saber Mais"
              size="xl"
            />
          </div>

          <div className="mt-10 text-lg flex flex-col md:flex-row gap-4 md:items-center font-normal">
            PARCEIROS:
            <div className="flex gap-4">
              <Image src={cmOdivelas} alt="Odivelas Câmara Municipal" />
              <Image src={iefp} alt="IEFP" />
              <Image src={gnr} alt="GNR" />
            </div>
          </div>

          <div className="flex gap-4 justify-center md:justify-start items-center mt-8">
            <CaretDoubleDown weight="bold" size={32} />
            <p className="uppercase text-sm md:text-base font-extrabold font-header">
              Continue a Explorar
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
