import '../styles/global.css';

import { useCounter, useInterval } from 'ahooks';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import type { ReactElement, ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  const [healthCheckCount, { inc: incHealthCheckCount }] = useCounter();

  useInterval(() => {
    incHealthCheckCount();

    console.log(`health check`, healthCheckCount);
  }, 5000);

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

      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

// @ts-ignore
export default MyApp;
