
import '@/styles/scss/index.scss'
import Head from 'next/head'; 
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav';
import { useState } from 'react'; 
import { prefix } from '@/config/config'
import { GolenDiscProvider } from '@/context/context'

export default function App({ Component, pageProps }) { 
  const [show, setShow] = useState(false)
  const handlMenu = () => { 
    setShow(true) 
    document.querySelector('body').classList.add('active')
  }
  const handlClose = () => {
    setShow(false)
    document.querySelector('body').classList.remove('active')
  }
  return (
    <GolenDiscProvider value={{prefix}}> 
    <Head>
      <title>GoldenDiscAwards</title>
      <meta name="description" content="GoldenDiscAwards" />
      <link rel="icon" type="image/png" href="favicon.ico"></link>
    </Head>
      <Header onclick={() => {handlMenu()}}/>
      <Nav show={show} onClose={() => {handlClose()}} />
      <Component {...pageProps} /> 
    <Footer />
    </GolenDiscProvider>
  )
}
