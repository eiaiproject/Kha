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
  metadataBase: new URL("https://kopikha.com"),
  title: {
    default: "Kopi KHA — Support Your Local Caffeine Dealers",
    template: "%s | Kopi KHA",
  },
  description:
    "Kopi lokal dengan karakter bold, rasa serius, dan gaya santai untuk kebutuhan kafein harianmu. Order sekarang!",
  keywords: ["kopi", "coffee", "local", "Indonesia", "kopi susu", "KHA"],
  authors: [{ name: "Kopi KHA" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Kopi KHA",
    title: "Kopi KHA — Support Your Local Caffeine Dealers",
    description:
      "Kopi lokal dengan karakter bold, rasa serius, dan gaya santai untuk kebutuhan kafein harianmu.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kopi KHA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kopi KHA — Support Your Local Caffeine Dealers",
    description:
      "Kopi lokal dengan karakter bold, rasa serius, dan gaya santai untuk kebutuhan kafein harianmu.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#004AAD",
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${anton.variable} ${caveat.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
