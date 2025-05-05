"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavbarShell from "./NavbarShell";
import { heroPages } from "@/lib/navbarConfig";

export default function AnimatedNavbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const pathName = usePathname();
  const isHeroPage = heroPages.includes(pathName);
  const isAtTopLandingPage = isAtTop && pathName === "/";

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY === 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className={`${isHeroPage ? "fixed" : ""} z-[20] ${isAtTopLandingPage ? "mt-[5vh]" : ""} navbar overflow-show min-h-[50px] items-start justify-between bg-white p-0 px-6 pb-0 shadow-lg lg:items-center lg:px-10`}
      animate={{
        width: isAtTopLandingPage ? "70%" : "100%",
        opacity: 1,
      }}
      style={{
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        maskImage: isAtTopLandingPage
          ? "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)"
          : "",
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <NavbarShell
        isMobileHidden={isAtTopLandingPage}
        isDesktopHidden={isAtTopLandingPage}
      />
    </motion.div>
  );
}
