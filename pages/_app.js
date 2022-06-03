import dynamic from 'next/dynamic'
import Head from "next/head";

import "../public/vendor/bootstrap/css/bootstrap.min.css"
import "../public/assets/css/fontawesome.css"
import "../public/assets/css/templatemo-eduwell-style.css"
import "../public/assets/css/owl.css"
import "../public/assets/css/lightbox.css"

const ExtJS = dynamic(() => import('../components/scripts'))
const Header = dynamic(() => import('../components/header'))

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>
      <Header />
      <Component {...pageProps} /> 
      <ExtJS/>
    </>
  )
}

export default MyApp
