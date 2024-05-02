import Link from "next/link";
import { Logo } from "./logo";

import { Links } from "./sidenav/links";

export function NavBarSide() {
  return (
    <nav className="bg-white max-w-[260px] w-full px-3   flex flex-col">
      <Logo />
      <section className="mt-10">
        <Links />
      </section>
    </nav>
  );
}
