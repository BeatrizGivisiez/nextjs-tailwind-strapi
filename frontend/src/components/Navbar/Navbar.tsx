"use client";

import { NavbarProps } from "./types";
import AnimatedNavbar from "./AnimatedNavbar";
import NavbarMenu from "./NavbarMenu";

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <AnimatedNavbar />
        {children}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-max p-4">
          <NavbarMenu />
        </ul>
      </div>
    </div>
  );
};
