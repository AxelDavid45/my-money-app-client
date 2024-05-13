import type { Metadata } from "next";
import "../static/globals.css";
import { lato } from "../static/fonts";
import { TopNavBar } from "./ui/top-bar";
import { NavBarSide } from "./ui/nav-side";

export const metadata: Metadata = {
  title: {
    template: "MyMoneyApp %s",
    default: "MyMoneyApp",
  },
  description:
    "Simple, concise and effective way to document my expenses o en español también",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <section className="flex min-h-screen w-full">
          <NavBarSide />

          <section className="flex flex-col flex-1">
            <TopNavBar />
            <section className="px-10 py-5">{children}</section>
          </section>
        </section>
      </body>
    </html>
  );
}
