import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webnox Technologies Pvt Ltd",
  description: "Webnox Technologies Pvt Ltd — Innovative software solutions and digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ background: '#000714', minHeight: '100%' }}
    >
      <body style={{ background: '#000714', minHeight: '100%', margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
