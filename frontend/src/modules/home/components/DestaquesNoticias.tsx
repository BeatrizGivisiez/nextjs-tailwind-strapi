"use client";
import Image from "next/image";
import logo from "@/assets/destaquesNoticias.png";

export const DestaquesNoticias = () => {
  return (
    <div className="bg-primary">
      <section className="custom-container mx-auto flex h-full flex-col gap-2 py-24 lg:flex-row">
        {/* Destaques */}
        <div className="flex-[0.7]">
          <h3 className="text-5xl font-extrabold text-white">Destaques</h3>
          <div className="overflow-hidden rounded-lg bg-white p-2 shadow">
            <Image
              src={logo} // replace with your actual image path
              alt="Destaque"
              className="mb-4 h-auto w-full rounded-md object-cover"
            />
            <p className="mb-1 text-xs font-semibold text-neutral-500">
              segunda-feira, 03 fevereiro 2025 12:12
            </p>
            <p className="mb-4 text-xs text-neutral-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <button
            type="button"
            className="mt-4 block cursor-pointer text-sm text-white underline"
          >
            VER MAIS DESTAQUES
          </button>
        </div>

        {/* Últimas Notícias */}
        <div className="flex-1">
          <h3 className="text-5xl font-extrabold text-white">
            ÚLTIMAS NOTÍCIAS
          </h3>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg bg-white p-1 shadow"
              >
                <div className="h-24 w-30 flex-shrink-0">
                  <Image
                    src={logo} // replace with your actual image path
                    alt="Destaque"
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-xs font-semibold text-neutral-500">
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
          <button
            type="button"
            className="mt-4 block cursor-pointer text-sm text-white underline"
          >
            VER MAIS NOTÍCIAS
          </button>
        </div>
      </section>
    </div>
  );
};
