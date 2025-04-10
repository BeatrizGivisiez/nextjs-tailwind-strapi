"use client";
import Link from "next/link";
import Image from "next/image"; // or any icon lib
import React from "react";
import logo from "../../assets/CedemaBlueLogo.png";

const NavbarMenu: React.FC = () => {
  return (
    <ul className="menu p-0 m-0 px-3 gap-2 text-xs font-bold font-header uppercase text-primary lg:menu-horizontal">
      {/* 👇 Mobile-only logo/icon */}
      <li className="block lg:hidden">
        <Link href="/">
          <Image
            src={logo} // replace with your actual logo path
            alt="Logo"
            width={200}
            height={132}
            className="h-auto w-auto"
          />
        </Link>
      </li>
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
