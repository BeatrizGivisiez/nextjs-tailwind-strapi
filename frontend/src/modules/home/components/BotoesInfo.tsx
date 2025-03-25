"use client";

export const BotoesInfo = () => {
  return (
    <section className="bg-white py-20 px-20 lg:px-40">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="relative h-27 rounded-lg overflow-hidden group cursor-pointer bg-opacity-50 flex items-center justify-center bg-[url('@/assets/parcerias.png')] bg-cover bg-center">
          <span className="text-white text-lg font-bold tracking-wide">
            PARCERIAS
          </span>
        </div>
        <div className="relative h-27 rounded-lg overflow-hidden group cursor-pointer bg-opacity-50 flex items-center justify-center bg-[url('@/assets/projetos.png')] bg-cover bg-center">
          <span className="text-white text-lg font-bold tracking-wide">
            PROJETOS
          </span>
        </div>
        <div className="relative h-27 rounded-lg overflow-hidden group cursor-pointer bg-opacity-50 flex items-center justify-center bg-[url('@/assets/leis.png')] bg-cover bg-center ">
          <div className="">
            <span className="text-white text-lg font-bold tracking-wide">
              LEIS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
