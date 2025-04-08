"use client";

import { usePathname } from "next/navigation";
import { NavbarProps } from "./types";
import AnimatedNavbar from "./AnimatedNavbar";
import StaticNavbar from "./StaticNavbar";
import NavbarMenu from "./NavbarMenu";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export const Navbar = ({ children }: NavbarProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {isHome ? <AnimatedNavbar /> : <StaticNavbar />}
        {children}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <NavbarMenu />
        </ul>
      </div>
    </div>
  );
};
