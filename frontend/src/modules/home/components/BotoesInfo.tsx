"use client";

export const BotoesInfo = () => {
  return (
    <section className="bg-white px-20 py-20 lg:px-40">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="group bg-opacity-50 relative flex h-27 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[url('@/assets/parcerias.png')] bg-cover bg-center">
          <span className="text-lg font-bold tracking-wide text-white">
            PARCERIAS
          </span>
        </div>
        <div className="group bg-opacity-50 relative flex h-27 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[url('@/assets/projetos.png')] bg-cover bg-center">
          <span className="text-lg font-bold tracking-wide text-white">
            PROJETOS
          </span>
        </div>
        <div className="group bg-opacity-50 relative flex h-27 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[url('@/assets/leis.png')] bg-cover bg-center">
          <div className="">
            <span className="text-lg font-bold tracking-wide text-white">
              LEIS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
