import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";

import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Romero & Locksley | Premium Business Consulting",
  description:
    "Romero & Locksley helps small businesses scale—designed for contractors and built for operational consistency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body className="min-h-screen bg-slate-50 text-gray-900 antialiased">

        {/* 🔵 VERY SUBTLE BACKGROUND ACCENT */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-[-120px] left-[-120px] h-[300px] w-[300px] bg-[#080c49]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] bg-[#080c49]/10 rounded-full blur-[120px]" />
        </div>

        <NavBar />

        <main className="relative z-10">{children}</main>

        <Footer />

      </body>
    </html>
  );
}