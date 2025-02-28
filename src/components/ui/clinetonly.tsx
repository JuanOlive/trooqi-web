'use client'; // Marca este componente como um componente do cliente

import { usePathname } from 'next/navigation';
import Header from '../layout/header';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Verifica se a rota atual é a de login
  const isLoginPage = pathname === '/login';

  return (
    <>
      {/* Renderiza a Header apenas se não for a página de login */}
      {!isLoginPage && <Header />}
      {children}
    </>
  );
}