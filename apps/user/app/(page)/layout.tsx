import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navigation } from "../_components/layout/Navigation";
import { Footer } from "../_components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "문학수첩 - 독자와 작가가 함께 만들어가는 문학의 가치",
  description:
    "해리포터 시리즈를 비롯한 국내외 우수 문학 작품을 소개하는 출판사 문학수첩입니다. 반연간 문예지와 김종철문학상을 통해 한국 문학의 발전에 기여합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
