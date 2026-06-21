import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const headingScript = Caveat({
  weight: ["500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
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
    <html lang="ru" className={headingScript.variable}>
      <body>{children}</body>
    </html>
  );
}
