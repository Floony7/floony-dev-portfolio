import Head from "next/head"
import Header from "../components/Header"
import Navbar from "../components/Nav"
// import Section from "../components/Section2"
import Layout from "../components/Layout"
import { Thin, Wide, Wider } from "../styles/container"
import { device } from "../styles/devices"
import { Profile } from "../styles/image"
import styled from "styled-components"
import ProjectList from "../components/ProjectList"
const fs = require("fs")
import Image from "next/image"

const Section = styled.section`
  width: 100vw;
  max-width: 100%;
`

const About = styled.section`
  background-color: var(--paper);
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  padding: 1em;
`

const Work = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 2rem 0;
  padding: 1em;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  padding: 1em;
  background-color: var(--paper);
`

const Home = (props) => {
  return (
    <>
      <Layout>
        <Wide>
          <Navbar />
        </Wide>
        <h1>Page</h1>
        <Wider>
          <Work>
            <Card>Box 1</Card>
            <Card>Box 2</Card>
            <Card>Box 3</Card>
          </Work>
        </Wider>
        <Wider>
          <About>
            <Wide>
              <h2>About me</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex totam inventore nobis fugit excepturi maiores voluptates? Quo optio hic, molestias quod commodi in. Quidem asperiores libero et aliquam repellat. Rem accusamus deserunt ullam, repellat nostrum tempora eos consequuntur omnis veritatis vitae totam laudantium molestias. Voluptas, qui dolore itaque, necessitatibus harum deleniti hic asperiores nesciunt voluptatibus ullam et sunt accusamus. Nemo, quidem esse?</p>
            </Wide>
          </About>
        </Wider>
      </Layout>
    </>
  )
}

export default Home

export function getStaticProps() {
  const data = fs.readFileSync(`${process.cwd()}/data/projects.json`)
  const projects = JSON.parse(data)

  return {
    props: {
      posts: projects,
    },
  }
}
