import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社ミヨシキャスティング | 徳島県三好市の鋳造・機械加工・建設",
  description: "FC/FCD鋳物、ステンレス鋳物、機械部品加工から総合建設業、鉄骨工事まで。徳島県三好市の株式会社ミヨシキャスティング。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} ${inter.variable} antialiased bg-bg text-text`}
      >
        {children}
      </body>
    </html>
  );
}

