import { NavBarSide } from "./ui/nav-side";
import { TopNavBar } from "./ui/top-bar";

export default function Home() {
  return (
    <section className="flex min-h-screen min-w-full w-screen">
      <NavBarSide />
      <section className="flex flex-col w-full">
        <TopNavBar />
        <section className="bg-orange-500 flex-1">main content</section>
      </section>
    </section>
  );
}
