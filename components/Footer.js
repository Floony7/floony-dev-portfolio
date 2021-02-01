import styled from "styled-components"

const Colophon = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = (props) => {
  return (
    <Colophon>
      <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </Colophon>
  )
}

export default Footer
