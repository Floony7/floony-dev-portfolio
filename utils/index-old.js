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

const PageWrap = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SectionGrid = styled.div`
  margin: 0 auto;
  @media ${device.tablet} {
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    text-align: left;
  }
`

const Wrap = styled.div`
  width: 100vw;
  position: relative;
  max-width: 100%;
  background: var(--gradient-green-aqua);
  background-image: url("/img/bg-header.jpg");
  background-size: cover;
  padding: var(--padding);
  color: #fff;
  min-height: 100vh;

  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: var(--happy-acid);
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  > * {
    z-index: 10;
  }
`

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`
const Section2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
`

const ImageHeader = styled.img`
  object-fit: cover;
  opacity: 0.5;
`

const Home = (props) => {
  return (
    <>
      <Layout>
        <Wrap>
          <Navbar />
          <Section>
            <h1>Fred Lunjevich</h1>
          </Section>
        </Wrap>
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
