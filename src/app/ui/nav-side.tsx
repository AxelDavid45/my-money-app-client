import { PageProps } from "../../../.next/types/app/layout";
import { Logo } from "./logo";

import { Links } from "./sidenav/links";

export function NavBarSide() {
  return (
    <nav className="hidden md:flex bg-white max-w-[260px] w-full px-3 flex-col content-between">
      <section className="mt-5">
        <Logo />
      </section>

      <section className="mt-10 flex-1 flex flex-col">
        <Links />
      </section>
    </nav>
  );
}
