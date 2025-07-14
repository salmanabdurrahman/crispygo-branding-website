import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { googleAnalytics } from "@/constants/data";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CrispyGo - Ayam Goreng Krispi Kekinian, Renyahnya Gak Ada Lawan!",
  description:
    "Selamat datang di CrispyGo! Nikmati ayam goreng krispi kekinian yang renyah di luar, juicy di dalam. Pesan online atau datang langsung ke outlet terdekat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleAnalytics gaId={googleAnalytics} />
      <body className={`${plusJakarta.className} antialiased`}>{children}</body>
    </html>
  );
}
