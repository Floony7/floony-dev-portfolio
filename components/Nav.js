import styled from "styled-components"
import Link from "next/link"

const Inner = styled.nav`
  width: 70%;
  margin: 0 auto;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
`

const NavItem = styled.li`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
`

const Navbar = () => {
  return (
    <Inner>
      <ul>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">About</Link>
        </NavItem>
        <NavItem>Contact</NavItem>
      </ul>
    </Inner>
  )
}

export default Navbar
