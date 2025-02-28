import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ClientLayout from "@/components/ui/clinetonly";

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
      <body className='bg-[#d8d1c1] '>
        {/* Adicione o Header aqui */}
        <ClientLayout children /> 

        {/* Conteúdo das páginas */}
        <main className="container mx-auto pt-32">
          {children}
        </main>
      </body>
    </html>
  );
}
