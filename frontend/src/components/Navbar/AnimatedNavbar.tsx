"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavbarShell from "./NavbarShell";
import { heroPages } from "@/lib/navbarConfig";

export default function AnimatedNavbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const pathName = usePathname();
  const isLandingPage = heroPages.includes(pathName);
  const isAtTopLandingPage = isAtTop && isLandingPage;

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY === 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className={`${isLandingPage ? "fixed" : ""} z-[20] ${isAtTopLandingPage ? "mt-[5vh]" : ""} min-h-[40px] px-6 lg:px-10 p-0 pb-0 navbar items-start justify-between lg:items-center bg-white overflow-hidden shadow-lg `}
      animate={{
        width: isAtTopLandingPage ? "70%" : "100%",
        opacity: 1,
        maskImage: isAtTopLandingPage
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
      <NavbarShell
        isMobileHidden={isAtTopLandingPage}
        isDesktopHidden={isAtTopLandingPage}
      />
    </motion.div>
  );
}
