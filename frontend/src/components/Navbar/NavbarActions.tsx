"use client";
import { FacebookLogo, YoutubeLogo } from "phosphor-react";

const NavbarActions = ({ small }: { small?: boolean }) => {
  return (
    <div className={`flex items-center gap-2 ${small ? "py-2" : "pr-5"}`}>
      <button
        className={`btn ${small ? "btn-xs" : "btn-sm"} p-3`}
        style={{
          backgroundColor: "var(--color-brand)",
          color: "white",
        }}
      >
        APOIAR
      </button>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline"
      >
        <FacebookLogo size={20} style={{ color: "var(--color-brand)" }} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline"
      >
        <YoutubeLogo size={20} style={{ color: "var(--color-brand)" }} />
      </a>
    </div>
  );
};

export default NavbarActions;
