"use client";
import Link from "next/link";
import React from "react";

const NavbarMenu: React.FC = () => {
  return (
    <ul className="menu p-0 m-0 px-3 gap-2 text-xs font-bold uppercase text-[var(--color-brand)] lg:menu-horizontal">
      <li>
        <Link href="/quem-somos">Quem Somos</Link>
      </li>
      <li>
        <Link href="/respostas-sociais">Respostas Sociais</Link>
      </li>
      <li>
        <Link href="/atividades">Atividades</Link>
      </li>
      <li>
        <Link href="/parcerias">Parcerias</Link>
      </li>
      <li>
        <Link href="/noticias">Noticias</Link>
      </li>
      <li>
        <Link href="/contactos">Contactos</Link>
      </li>
    </ul>
  );
};

export default NavbarMenu;
