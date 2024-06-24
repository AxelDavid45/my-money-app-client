import { Lato, Poppins } from "next/font/google";

export const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans"
});

export const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});
