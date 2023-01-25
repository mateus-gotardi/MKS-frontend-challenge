import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '@/styles/global'
import { store } from '../store'
import { Provider } from 'react-redux'


export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Head>
        <title>MKS Store</title>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="description" content="MKS frontend challenge" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}
