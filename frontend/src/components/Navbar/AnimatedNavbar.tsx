"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavbarShell from "./NavbarShell";

export default function AnimatedNavbar() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY === 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed z-[20] mt-[5vh] min-h-[40px] overflow-hidden"
      animate={{
        width: isAtTop ? "70%" : "100%",
        opacity: 1,
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
      <NavbarShell isMobileHidden={isAtTop} isDesktopHidden={isAtTop} />
    </motion.div>
  );
}
