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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
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
