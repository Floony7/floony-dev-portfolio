import Head from "next/head"
import Header from "../components/Header"
import Navbar from "../components/Nav"
import Section from "../components/Section"
import { Wide, Wider } from "../styles/container"

const Home = () => {
  return (
    <>
      <Wider>
        <h1>Welcome to our website</h1>
        <Navbar />
      </Wider>
      <div>
        <Section>
          <h1>Section</h1>
        </Section>
      </div>
    </>
  )
}

export default Home
