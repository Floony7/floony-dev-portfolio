import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
import { Wide, Inner } from "../styles/container"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" />
        <title>Floony Dev &mdash; one Kiwi's journey into web code</title>
      </Head>
      <Header />
      <Wide>
        <Inner>{children}</Inner>
      </Wide>
      <Footer />
    </>
  )
}

export default Layout
