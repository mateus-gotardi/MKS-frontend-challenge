import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '@/styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MKS Store</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="MKS frontend challenge" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
