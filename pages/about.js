import Head from "next/head"
import Header from "../components/Header"
import Navbar from "../components/Nav"
import Section from "../components/Section2"
import { Wide, Wider } from "../styles/container"
import Layout from "../components/Layout"

const about = () => {
  return (
    <Layout>
      <Section>
        <Wide>
          <h1>About page</h1>
        </Wide>
      </Section>
    </Layout>
  )
}

export default about
