import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { NextPage } from 'next';
import type { AppType, AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { DefaultLayout } from '~/components/Layout/DefaultLayout';
import { trpc } from '~/utils/trpc';
// import app from './api/trpc/Firebase';

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps,
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (({ Component, pageProps, ...appProps }: AppPropsWithLayout) => {
  if ([`/login`].includes(appProps.router.pathname))
    return (
      <>
        <Component {...pageProps} />
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap');
          html {
          }
          body {
            font-family: 'Noto Sans KR', sans-serif;
            margin: 0px;
          }
          a {
            text-decoration: none;
          }
        `}</style>
      </>
    );

  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);
  const queryClient = new QueryClient();
  return getLayout(
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap');
          html {
          }
          body {
            font-family: 'Noto Sans KR', sans-serif;
            margin: 0px;
          }
          a {
            text-decoration: none;
          }
        `}</style>
      </QueryClientProvider>
    </>,
  );
}) as AppType;

export default trpc.withTRPC(MyApp);
