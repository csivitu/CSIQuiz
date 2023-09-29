import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Merriweather, Roboto, Anton } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--anton-font',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--roboto-font',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--merriweather-font',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${merriweather.variable} ${roboto.variable} ${anton.variable}`}>
      <Head>
        <link rel="shortcut icon" href="images/favicon.ico" />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </main>
  )
}
