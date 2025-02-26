import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Trooqi - Troquei e saí feliz",
  description: "Compra e venda na Trooqi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className='bg-[#fffbf1]'>
        {/* Adicione o Header aqui */}
        <Header />

        {/* Conteúdo das páginas */}
        <main className="container mx-auto p-4 pt-32">
          {children}
        </main>
      </body>
    </html>
  );
}
