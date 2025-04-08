import NavbarShell from "./NavbarShell";

export default function StaticNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 min-h-[40px] z-[20]">
      <NavbarShell className="w-full" />
    </div>
  );
}
