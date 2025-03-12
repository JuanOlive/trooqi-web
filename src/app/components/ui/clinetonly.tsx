'use client'; // Marca este componente como um componente do cliente

import { usePathname } from 'next/navigation';
import Header from '../layout/header';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Lista de rotas onde a Header não deve ser exibida
  const noHeaderPages = ['/login', '/register', '/forgot-password', '/reset-password'];

  // Verifica se a rota atual está na lista de rotas sem Header
  const isNoHeaderPage = noHeaderPages.includes(pathname);

  return (
    <>
      {/* Renderiza a Header apenas se não for uma página sem Header */}
      {!isNoHeaderPage && <Header />}

      {/* Conteúdo das páginas com pt-32 condicional */}
      <main className={!isNoHeaderPage ? 'container mx-auto pt-32' : 'container mx-auto'}>
        {children}
      </main>
    </>
  );
}