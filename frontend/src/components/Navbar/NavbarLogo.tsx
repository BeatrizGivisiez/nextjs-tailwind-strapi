"use client";
import Image from "next/image";
import logo from "../../assets/CedemaBlueLogo.png";

const NavbarLogo = () => {
  return (
    <a href="/" className="flex items-center justify-center pt-1 pl-6">
      <Image
        src={logo}
        alt="Logo"
        className="h-15 w-auto lg:h-20 object-contain"
        priority
      />
    </a>
  );
};

export default NavbarLogo;
