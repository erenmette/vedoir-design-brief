import type { Metadata } from "next";
import { cormorant, inter, jetbrainsMono } from "@/lib/fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VEDOIR — Een verhaal om je pols",
    template: "%s | VEDOIR",
  },
  description:
    "Ontwerp een horloge dat jouw verhaal vertelt. Handgemaakt met 904L staal en saffierglas. Volledig personaliseerbaar vanaf €599.",
  keywords: [
    "custom horloge",
    "horloge ontwerpen",
    "gepersonaliseerd horloge",
    "904L staal horloge",
    "saffierglas horloge",
    "horloge configurator",
    "luxe horloge Nederland",
  ],
  openGraph: {
    title: "VEDOIR — Een verhaal om je pols",
    description:
      "Ontwerp een horloge dat jouw verhaal vertelt. Handgemaakt met 904L staal en saffierglas.",
    locale: "nl_NL",
    type: "website",
    siteName: "VEDOIR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="film-grain min-h-screen flex flex-col antialiased">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
