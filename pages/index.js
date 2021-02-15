import Head from "next/head"
import Header from "../components/Header"
import Navbar from "../components/Nav"
import Section from "../components/Section2"
import Layout from "../components/Layout"
import { Thin, Wide, Wider } from "../styles/container"
import { device } from "../styles/devices"
import { Profile } from "../styles/image"
import styled from "styled-components"

const SectionGrid = styled.div`
  @media ${device.tablet} {
    display: grid;
    width: 67vw;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    min-height: 60vh;
    text-align: left;
  }
`

const SectionGridCentered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`

const ThreeCol = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`

const Home = () => {
  return (
    <>
      <Layout>
        <Section bgcolor="inherit">
          <Thin>
            <SectionGrid>
              <div>
                <h1>
                  Making the <br />
                  modern web
                </h1>
                <h2>Left</h2>
              </div>
              <div>
                <h2>Right</h2>
              </div>
            </SectionGrid>
            {/* <SectionGridCentered>
              <Profile />
            </SectionGridCentered> */}
          </Thin>
        </Section>
      </Layout>
    </>
  )
}

export default Home
