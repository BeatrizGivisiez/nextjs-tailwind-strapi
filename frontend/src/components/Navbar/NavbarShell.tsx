import NavbarLogo from "./NavbarLogo";
import NavbarActions from "./NavbarActions";
import NavbarMenu from "./NavbarMenu";

interface Props {
  isMobileHidden?: boolean;
  isDesktopHidden?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function NavbarShell({
  isMobileHidden,
  isDesktopHidden,
  className = "",
  children,
}: Props) {
  return (
    <div
      className={`navbar items-start justify-between lg:items-center bg-white ${className}`}
    >
      {/* Logo */}
      <div className="flex items-center z-20">
        <NavbarLogo />
      </div>

      {/* Mobile */}
      <div
        className={`flex lg:hidden items-center gap-2 px-4 py-2 z-20 ${
          isMobileHidden ? "pointer-events-none opacity-0" : ""
        }`}
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
            />
          </svg>
        </label>
      </div>

      {/* Desktop */}
      <div
        className={`hidden lg:flex flex-col items-end gap-2 w-full z-20 ${
          isDesktopHidden ? "pointer-events-none opacity-0" : ""
        }`}
      >
        <NavbarActions />
        <NavbarMenu />
      </div>

      {children}
    </div>
  );
}
