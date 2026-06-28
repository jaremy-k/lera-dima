import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const headingScript = Caveat({
  weight: ["500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
});

const officialHeading = localFont({
  src: "./fonts/Pierrot.ttf",
  variable: "--font-official-heading",
  display: "swap",
});

const officialAccent = localFont({
  src: "./fonts/7111.ttf",
  variable: "--font-official-accent",
  display: "swap",
});

const officialText = Montserrat_Alternates({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat-alternates",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://lera-dima.wedding",
  ),
  title: "Лера и Дима | 09.09.2026",
  description:
    "Свадебное приглашение Леры и Димы на 9 сентября 2026 года. Локация, программа и дресс-код.",
  openGraph: {
    title: "Лера и Дима — свадьба 09.09.2026",
    description:
      "Приглашаем вас разделить с нами этот день. Дом Культур, Москва.",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/memory-couple-sticker.png",
        width: 853,
        height: 1280,
        alt: "Лера и Дима",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Лера и Дима — свадьба 09.09.2026",
    description: "Приглашаем вас на нашу свадьбу 9 сентября 2026 года.",
    images: ["/images/memory-couple-sticker.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${headingScript.variable} ${officialHeading.variable} ${officialAccent.variable} ${officialText.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
