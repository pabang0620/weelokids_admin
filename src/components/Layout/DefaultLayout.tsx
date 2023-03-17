import Head from 'next/head';
import { ReactNode } from 'react';
import LayoutNav from './LayoutNav';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <LayoutNav></LayoutNav>
      <Head>
        <title>Weelo Kids | 관리자 페이지</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </>
  );
};
