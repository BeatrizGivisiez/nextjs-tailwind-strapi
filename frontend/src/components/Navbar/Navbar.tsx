"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavbarProps } from "./types";
import NavbarMenu from "./NavbarMenu";
import NavbarLogo from "./NavbarLogo";
import NavbarActions from "./NavbarActions";

export const Navbar = ({ children }: NavbarProps) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasMounted, setHasMounted] = useState(false); // 🚀

  useEffect(() => {
    const checkScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    checkScroll(); // ✅ Get scroll position immediately
    setHasMounted(true); // ✅ Now safe to render the navbar
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* ✅ Only render navbar once scroll is known */}
          {hasMounted && (
            <motion.div
              className={`fixed z-[20] mt-[5vh] min-h-[40px] px-6 lg:px-10 p-0 pb-0 navbar items-start justify-between lg:items-center bg-white overflow-hidden`}
              animate={{
                width: isAtTop ? "70%" : "100%",
                opacity: 1,
                WebkitMaskImage: isAtTop
                  ? "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)"
                  : "linear-gradient(to right, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)",
                maskImage: isAtTop
                  ? "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)"
                  : "linear-gradient(to right, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)",
              }}
              style={{
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="flex items-center z-20">
                <NavbarLogo />
              </div>

              <motion.div
                className={`flex lg:hidden items-center gap-2 px-4 py-2 z-20 ${
                  isAtTop ? "pointer-events-none" : "pointer-events-auto"
                }`}
                animate={{ opacity: isAtTop ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
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
              </motion.div>

              <motion.div
                className={`hidden lg:flex flex-col items-end gap-2 w-full z-20 ${
                  isAtTop ? "pointer-events-none" : "pointer-events-auto"
                }`}
                animate={{ opacity: isAtTop ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <NavbarActions />
                <NavbarMenu />
              </motion.div>
            </motion.div>
          )}

          {/* Page content */}
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
    </>
  );
};
