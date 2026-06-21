import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"]
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Dan Hodeanu — Head of SEO & Product",
  description:
    "Head of SEO and product-minded operator based in Vienna. Currently looking for Head of SEO & Product roles.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable} ${mono.variable}`}>
      <body className="grain">
        <Nav />
        {children}
      </body>
    </html>
  );
}
