import styled from "styled-components"
import { Wider } from "../styles/container"
import Navbar from "./Nav"

const HeaderContainer = styled.header`
  width: 100vw;
  /* min-height: 20vw; */
`

const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <Wider>
          <Navbar />
        </Wider>
      </HeaderContainer>
    </>
  )
}

export default Header
