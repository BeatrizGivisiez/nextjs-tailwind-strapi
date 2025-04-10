"use client";

import Image from "next/image";
import Logo from "@/assets/CedemaBlueWhiteLogo.png";

export const Footer = () => {
  return (
    <section className="mt-20 bg-primary px-6 py-16 text-sm text-white lg:px-40">
      <div className="flex flex-col justify-between gap-12 lg:flex-row">
        {/* Left Section: Logo + Address */}
        <div className="max-w-md space-y-4">
          <Image
            src={Logo} // replace with your actual image path
            alt="Cedema Logo"
            className="mb-4 h-auto w-60 rounded-md object-cover"
          />
          <div className="space-y-1">
            <p>ASSOCIAÇÃO DE PAIS E AMIGOS DOS</p>
            <p>DEFICIENTES MENTAIS</p>
            <p>RUA VARELA SILVA LOTE 8, LOJA A 1750-403</p>
            <p>LISBOA</p>
            <p>TELEFONE: 218 149 314</p>
            <p>FAX: 218 149 315</p>
            <p>E-MAIL: COMUNICACAO@CEDEMA.ORG.PT</p>
          </div>
        </div>

        {/* Middle + Right Section: Links */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="font-semibold">QUEM SOMOS</p>
            <p className="font-semibold">CONTACTOS</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">TESTEMUNHOS</p>
            <p className="font-semibold">LEIS</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">NOTÍCIAS</p>
            <p className="font-semibold">EVENTOS</p>
            <p className="font-semibold">LIVRO DE RECLAMAÇÕES</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-right text-xs text-white/70">
        ©COPYRIGHT 2025
      </div>
    </section>
  );
};
