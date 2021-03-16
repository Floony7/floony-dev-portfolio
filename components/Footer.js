import styled from "styled-components"
import { Wide, Wider } from "../styles/container"

const Colophon = styled.footer`
  width: 100%;
  min-height: 10vh;
  height: auto;
  color: #e6e6e6;
  line-height: 1.2rem;
  font-size: 1.2rem;
  border-top: 1px solid #eaeaea;
  text-align: center;
  /* display: grid;
  grid-template-columns: 1fr; */
`

const Footer = (props) => {
  return (
    <Wide>
      <Colophon>
        <p>Pixels handcrafted by Fred Lunjevich, Auckland, New Zealand &copy; {new Date().getFullYear()}</p>
        <p>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            Made with NextJS
          </a>
        </p>
      </Colophon>
    </Wide>
  )
}

export default Footer
