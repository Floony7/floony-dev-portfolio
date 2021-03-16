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
  font-weight: 700;
  letter-spacing: 1px;

  a {
    text-decoration: none;
    color: #e3e3e3;
  }
`

const Navbar = () => {
  return (
    <Inner>
      <ul>
        <NavItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </NavItem>
      </ul>
    </Inner>
  )
}

export default Navbar
