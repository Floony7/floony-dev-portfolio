import Head from "next/head"
import Grid from "../components/Grid"
import Footer from "./Footer"
import Header from "./Header"
import GlobalStyles from "../styles/GlobalStyles"
import { Wide, Inner } from "../styles/container"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" />
        <title>Floony Dev &mdash; one Kiwi's journey into web code</title>
      </Head>
      {/* <Header /> */}
      <Inner>{children}</Inner>
      <Footer />
    </>
  )
}

export default Layout
