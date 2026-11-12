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

export const metadataFor = (content: Content): Metadata => {
  const path = content.lang === "en" ? "/" : "/tr";
  return {
    metadataBase: new URL(SITE),
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: path,
      languages: { en: "/", tr: "/tr", "x-default": "/" },
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: path,
      type: "profile",
      locale: content.lang === "en" ? "en_US" : "tr_TR",
    },
    icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  };
};

export const Shell = ({
  lang,
  children,
}: {
  lang: Content["lang"];
  children: React.ReactNode;
}) => (
  <html lang={lang}>
    <body
      className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}
    >
      {children}
    </body>
  </html>
);
