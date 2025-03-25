"use client";
import Image from "next/image";
import logo from "@/assets/destaquesNoticias.png";

export const DestaquesNoticias = () => {
  return (
    <div className="bg-primary w-full px-4 py-10">
      <section className="flex flex-col lg:flex-row p-10 gap-2 max-w-screen-xl mx-auto">
        {/* Destaques */}
        <div className="flex-[0.7]">
          <h3 className="text-white text-5xl font-extrabold">Destaques</h3>
          <div className="bg-white rounded-lg overflow-hidden shadow p-2">
            <Image
              src={logo} // replace with your actual image path
              alt="Destaque"
              className="rounded-md mb-4 w-full h-auto object-cover"
            />
            <p className="text-xs font-semibold text-neutral-500 mb-1">
              segunda-feira, 03 fevereiro 2025 12:12
            </p>
            <p className="text-xs text-neutral-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <a href="#" className="text-sm text-white underline mt-4 block">
            VER MAIS DESTAQUES
          </a>
        </div>

        {/* Últimas Notícias */}
        <div className="flex-1">
          <h3 className="text-white text-5xl font-extrabold">
            ÚLTIMAS NOTÍCIAS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-1 flex gap-2 items-start"
              >
                <div className="w-30 h-24 flex-shrink-0">
                  <Image
                    src={logo} // replace with your actual image path
                    alt="Destaque"
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-neutral-500 mb-1">
                    03 fevereiro 2025 12:12
                  </p>
                  <p className="text-xs text-neutral-700">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="text-sm text-white underline mt-4 block">
            VER MAIS NOTÍCIAS
          </a>
        </div>
      </section>
    </div>
  );
};
