"use client";
import Image from "next/image";
import logo from "../../assets/CedemaBlueLogo.png";

const NavbarLogo = () => {
  return (
    <a href="/" className="pl-6 pr-6 pt-1 flex items-center justify-center">
      <Image
        src={logo}
        alt="Logo"
        className="h-15 w-auto lg:h-22 object-contain"
        priority
      />
    </a>
  );
};

export default NavbarLogo;
