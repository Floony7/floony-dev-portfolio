import styled from "styled-components"
import Link from "next/link"

const Inner = styled.nav`
  width: 100%;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
`

const Navbar = () => {
  return (
    <Inner>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>Contact</li>
      </ul>
    </Inner>
  )
}

export default Navbar
