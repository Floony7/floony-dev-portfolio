import styled from "styled-components"
import { Wider } from "../styles/container"
import Navbar from "./Nav"

const HeaderContainer = styled.header`
  width: 100vw;
  background-color: inherit;
  padding: var(--padding);
  margin: 0;
  max-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
