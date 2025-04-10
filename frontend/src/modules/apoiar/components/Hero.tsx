import CustomButton from "@/components/Buttons/CustomButton";
import cmOdivelas from "@/assets/cmOdivelas.png";
import iefp from "@/assets/iefp.png";
import gnr from "@/assets/gnr.png";

export const ApoiarHero = () => {
  return (
    <div className="flex flex-col min-h-[100vh] justify-center bg-[url('@/assets/apoiar.jpg')] bg-cover bg-center">
      <section className="relative flex-grow flex items-center justify-center text-white bg-black/40 pt-[80px]">
        <div className="custom-container z-[1] text-left">
          <h1 className="heading-6xl font-extrabold leading-tight">
            Doe e ajude a escrever uma nova história!
          </h1>
          <h2 className="mt-6 font-bold heading-xl mx-auto">
            Faça parte da mudança que o mundo precisa!
          </h2>
        </div>
      </section>
    </div>
  );
};
