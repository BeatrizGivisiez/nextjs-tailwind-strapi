import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { Footer } from "@/components";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cedema | cuidar e amar",
  description: "Associação de Pais e Amigos dos Deficientes Mentais Adultos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" data-theme="CedemaTheme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <Navbar> </Navbar>
          <Breadcrumb />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
