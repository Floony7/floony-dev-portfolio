import Head from "next/head"
import Header from "../components/Header"
import Navbar from "../components/Nav"
import { Wide, Wider } from "../styles/container"
import Layout from "../components/Layout"

const about = () => {
  return (
    // <Wider>
    //   <h1>Welcome to about page</h1>
    //   <Navbar />
    // </Wider>
    <Layout>
      <h1>About page</h1>
    </Layout>
  )
}

export default about
