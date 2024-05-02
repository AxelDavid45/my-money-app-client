import type { Metadata } from "next";
import "../static/globals.css";
import { lato } from "../static/fonts";

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
      <body className={lato.className}>{children}</body>
    </html>
  );
}
