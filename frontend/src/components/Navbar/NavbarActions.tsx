"use client";
import { FacebookLogo, YoutubeLogo, Hand } from "phosphor-react";

const NavbarActions = ({ small }: { small?: boolean }) => {
  return (
    <div className={`flex items-center gap-2 ${small ? "py-2" : "pr-5"}`}>
      {/* APOIAR button - visible on sm and up */}
      <button
        className={`btn ${small ? "btn-xs" : "btn-sm"} p-3 bg-primary text-white hidden sm:flex items-center justify-center`}
      >
        APOIAR
      </button>

      {/* Icon-only button - visible only on mobile */}
      <button className="bg-primary text-white rounded-full p-1 flex sm:hidden items-center justify-center">
        <Hand size={20} weight="fill" />
      </button>

      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline text-primary"
      >
        <FacebookLogo size={20} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline text-primary"
      >
        <YoutubeLogo size={20} />
      </a>
    </div>
  );
};

export default NavbarActions;
