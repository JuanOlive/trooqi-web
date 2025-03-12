import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ui/clinetonly";

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
      <body className='bg-[#fbf4e3]'>
        {/* Passa o children para o ClientLayout */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}