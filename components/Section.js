import styled from "styled-components"
import { Wide } from "../styles/container"

const Inner = styled.section`
  padding: 1rem;
`

const Section = ({ children }) => {
  return (
    <>
      <Wide>
        <Inner>{children}</Inner>
      </Wide>
    </>
  )
}

export default Section
