export const ApoiarHero = () => {
  return (
    <div className="mt-[100px] flex flex-col min-h-[90vh] justify-center bg-[url('@/assets/apoiar.jpg')] bg-cover bg-center clip-hero">
      <section className="relative flex-grow flex items-center justify-center text-white bg-black/40   ">
        <div className="custom-container z-[1] text-left">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-full md:col-span-7">
              <h1 className="heading-6xl font-extrabold leading-tight">
                Doe e ajude a escrever uma nova história!
              </h1>
              <h2 className="mt-6 font-bold heading-xl mx-auto">
                Faça parte da mudança que o mundo precisa!
              </h2>
            </div>
            <div className="col-span-full md:col-span-5 bg-white rounded-sm"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
