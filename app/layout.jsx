import { Anton, Caveat, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const caveat = Caveat({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Kopi KHA — Support Your Local Caffeine Dealers",
  description:
    "Landing page Kopi KHA, local coffee brand dengan karakter bold, menu kopi dan bukan kopi, serta channel order.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#004AAD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${anton.variable} ${caveat.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
