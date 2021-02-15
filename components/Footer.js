import styled from "styled-components"

const Colophon = styled.footer`
  width: 100%;
  max-height: 10vh;
  height: auto;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = (props) => {
  return (
    <Colophon>
      <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
        Made with NextJS
      </a>
    </Colophon>
  )
}

export default Footer
