import '../styles/global.css';

import { ApolloProvider } from '@apollo/client';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import type { ReactElement, ReactNode } from 'react';
import { useState } from 'react';

import { client } from '@/libs/apollo';
import { AppConfig } from '@/utils/AppConfig';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        {[16, 32].map((size, i) => (
          <link
            key={i}
            rel="icon"
            type="image/png"
            sizes={`${size}x${size}`}
            href={`${router.basePath}/favicon-${size}x${size}.png`}
          />
        ))}
      </Head>

      <NextSeo
        titleTemplate={`%s - ${AppConfig.title}`}
        defaultTitle={AppConfig.title}
      />

      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <ApolloProvider client={client}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </SessionContextProvider>
    </>
  );
};

// @ts-ignore
export default MyApp;
