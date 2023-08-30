
import '@/styles/scss/index.scss'
import Head from 'next/head'; 
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function App({ Component, pageProps }) {
  return (
    <> 
    <Head>
      <title>GoldenDiscAwards</title>
      <meta name="description" content="GoldenDiscAwards" />
      <link rel="icon" type="image/png" href="favicon.ico"></link>
    </Head>
    <Header />
      <Component {...pageProps} /> 
    <Footer />
    </>
  )
}
