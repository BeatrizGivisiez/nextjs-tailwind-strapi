"use client";
import { NavbarProps } from "./types";
import NavbarMenu from "./NavbarMenu";
import NavbarLogo from "./NavbarLogo";
import NavbarActions from "./NavbarActions";

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full min-h-[80px] pt-2 pb-0 lg:pr-10 lg:pl-10 justify-between items-start lg:items-center">
            {/* Logo */}
            <div className="flex items-center">
              <NavbarLogo />
            </div>

            {/* Mobile: Button + Hamburger */}
            <div className="flex lg:hidden items-center gap-2 px-4 py-2">
              <NavbarActions small />
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            {/* Desktop: Button + Icons + Menu */}
            <div className="hidden lg:flex flex-col items-end gap-2 w-full">
              <NavbarActions />
              <NavbarMenu />
            </div>
          </div>

          {/* Page content */}
          {children}
        </div>

        {/* Mobile Drawer */}
        <div className="drawer-side">
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
    </>
  );
};
