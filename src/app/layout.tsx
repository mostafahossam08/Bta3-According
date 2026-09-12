import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const latinFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
});

const arabicFont = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bta3 According — Classified IGCSE Question Banks for Teachers",
  description:
    "Ready-made classified IGCSE question banks organized by paper, chapter, topic, year and variant — built specifically for teachers. Cambridge IGCSE Physics OL available now.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${latinFont.variable} ${arabicFont.variable} bg-[var(--bg)] text-[var(--text)] antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}

