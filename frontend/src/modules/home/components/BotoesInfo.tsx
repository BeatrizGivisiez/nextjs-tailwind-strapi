"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const BotoesInfo = () => {
  const router = useRouter();

  return (
    <section className="bg-white px-20 py-25 lg:px-40">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 lg:grid-cols-3">
        {/* PARCERIAS */}
        <motion.div
          whileHover="hover"
          initial="rest"
          animate="rest"
          className="group bg-opacity-50 relative flex h-27 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[url('@/assets/parcerias.png')] bg-cover bg-center"
        >
          <motion.span
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: { y: -20, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-lg font-bold tracking-wide text-white"
          >
            PARCERIAS
          </motion.span>

          <motion.button
            variants={{
              rest: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="cursor-pointer absolute bottom-4 z-10 rounded bg-white px-4 py-2 text-sm font-semibold text-black shadow"
            onClick={() => router.push("/parcerias")}
          >
            SABER MAIS
          </motion.button>
        </motion.div>

        {/* PROJETOS */}
        <motion.div
          whileHover="hover"
          initial="rest"
          animate="rest"
          className="group bg-opacity-50 relative flex h-27 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[url('@/assets/projetos.png')] bg-cover bg-center"
        >
          <motion.span
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: { y: -20, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-lg font-bold tracking-wide text-white"
          >
            PROJETOS
          </motion.span>

          <motion.button
            variants={{
              rest: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="cursor-pointer absolute bottom-4 z-10 rounded bg-white px-4 py-2 text-sm font-semibold text-black shadow"
            onClick={() => router.push("/projetos")}
          >
            SABER MAIS
          </motion.button>
        </motion.div>

        {/* LEIS */}
        <motion.div
          whileHover="hover"
          initial="rest"
          animate="rest"
          className="group bg-opacity-50 relative flex h-27 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[url('@/assets/leis.png')] bg-cover bg-center"
        >
          <motion.span
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: { y: -20, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-lg font-bold tracking-wide text-white"
          >
            LEIS
          </motion.span>

          <motion.button
            variants={{
              rest: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="cursor-pointer absolute bottom-4 z-10 rounded bg-white px-4 py-2 text-sm font-semibold text-black shadow"
            onClick={() => router.push("/leis")}
          >
            SABER MAIS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
