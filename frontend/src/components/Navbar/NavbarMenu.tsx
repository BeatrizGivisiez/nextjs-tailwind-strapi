"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../../assets/CedemaBlueLogo.png";

const NavbarMenu: React.FC = () => {
  return (
    <ul className="menu font-header text-primary lg:menu-horizontal z-30 m-0 gap-2 p-0 px-3 text-xs font-bold uppercase">
      {/* Mobile-only logo/icon */}
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
      <li className="group relative">
        <Link href="/quem-somos" className="cursor-pointer">
          Quem Somos
        </Link>
        <ul className="menu bg-base-100 z-50 mt-2 ml-4 block w-max space-y-1 lg:absolute lg:left-0 lg:!m-1 lg:!mt-7 lg:hidden lg:w-max lg:rounded-md lg:shadow lg:group-hover:block">
          {/* <li>
            <Link href="/quem-somos/mensagem-da-presidente">
              Mensagem da Presidente
            </Link>
          </li> */}
          <li>
            <Link href="/quem-somos#historia">História</Link>
          </li>
          <li>
            <Link href="/quem-somos#missao-valores">Missão e Valores</Link>
          </li>
          <li>
            <Link href="/quem-somos/organizacao-estatutos">
              Organização e Estatutos
            </Link>
          </li>
          <li>
            <Link href="/quem-somos/financiamento">Financiamento</Link>
          </li>  <li>
            <Link href="/quem-somos/canal-de-denuncias">Canal de Denúncias</Link>
          </li>
        </ul>
      </li>
      <li className="group relative">
        <Link href="/respostas-sociais" className="cursor-pointer">
          Respostas Sociais
        </Link>
        <ul className="menu bg-base-100 z-50 mt-2 ml-4 block w-max space-y-1 lg:absolute lg:left-0 lg:!m-1 lg:!mt-7 lg:hidden lg:w-max lg:rounded-md lg:shadow lg:group-hover:block">
          <li>
            <Link href="/respostas-sociais?centro-de-atividades-ocupacionais">
              Centro de Atividades Ocupacionais
            </Link>
          </li>
          <li>
            <Link href="/respostas-sociais?lares-e-residencias-autonomas">
              Lares e Residências Autónomas
            </Link>
          </li>
        </ul>
      </li>
      <li className="group relative">
        <Link href="/atividades-e-servicos" className="cursor-pointer">
          Atividades
        </Link>
        <ul className="menu bg-base-100 z-50 mt-2 ml-4 block w-max space-y-1 lg:absolute lg:left-0 lg:!m-1 lg:!mt-7 lg:hidden lg:w-max lg:rounded-md lg:shadow lg:group-hover:block">
          <li>
            <Link href="/atividades-e-servicos?colonias-de-ferias">
              Colónias de Férias
            </Link>
          </li>
          <li>
            <Link href="/atividades-e-servicos?gabinete-de-psicologia">
              Gabinete de Psicologia
            </Link>
          </li>
          <li>
            <Link href="/atividades-e-servicos?salas-snoezelen">Salas Snoezelen</Link>
          </li>
          <li>
            <Link href="/atividades-e-servicos?apoio-ambulatorio">Apoio Ambulatório</Link>
          </li>
          <li>
            <Link href="/atividades-e-servicos?grupo-de-teatro">Grupo de Teatro</Link>
          </li>
          <li>
            <Link href="/atividades-e-servicos?cozinha-para-todos">
              Cozinha para Todos
            </Link>
          </li>
          <li>
            <Link href="/atividades-e-servicos?oficina-das-artes">Oficina das Artes</Link>
          </li>
          <li>
            <Link href="/atividades-e-servicos?asas-arte-sem-amarras">
              ASAS - Arte Sem Amarras
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/parcerias">Parcerias</Link>
      </li>

      {/* Noticias Dropdown using DaisyUI with hover functionality */}
      <li className="group relative">
        <Link href="/noticias" className="cursor-pointer">
          Notícias
        </Link>
        {/* Updated dropdown with absolute positioning and proper visibility */}
        <ul className="menu bg-base-100 z-50 mt-2 ml-4 block space-y-1 lg:absolute lg:left-0 lg:!m-1 lg:!mt-7 lg:hidden lg:w-max lg:rounded-md lg:shadow lg:group-hover:block">
          <li>
            <Link href="/noticias?eventos">Eventos</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/contactos">Contactos</Link>
      </li>
    </ul>
  );
};

export default NavbarMenu;
