import { NavBarSide } from "./ui/nav-side";
import { TopNavBar } from "./ui/top-bar";

export default function Home() {
  return (
    <section className="flex min-h-screen min-w-full w-screen">
      <NavBarSide />
      <section className="flex flex-col w-full">
        <TopNavBar />
        <section className="flex-1 p-3">main content</section>
      </section>
    </section>
  );
}
