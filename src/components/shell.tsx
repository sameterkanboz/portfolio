import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import type { Content } from "@/content/types";
import { SITE } from "@/content/types";
import "@/app/globals.css";

const display = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
});
const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});
const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
});

export const metadataFor = (content: Content): Metadata => ({
  metadataBase: new URL(SITE),
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: "/",
    type: "profile",
    locale: "en_US",
  },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
});

export const Shell = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body
      className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}
    >
      {children}
    </body>
  </html>
);
