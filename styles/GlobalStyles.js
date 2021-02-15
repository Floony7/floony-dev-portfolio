import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
html {
 --red: #E85A4F;
 --tomato: #E98074;
 --dark-grey: #8E8D8A;
 --grey: #EAE7DC;
 --apricot: #D8C3A5;
 --green: #17e9bb;
 --black: #141414;
--padding: 2px;
--gradient: linear-gradient(0deg, rgba(23,208,251,1) 0%, rgba(45,5,251,1) 100%);
height: 100%;
}

@font-face {
  font-family: 'Josefin-Sans';
  src: url('/fonts/Cardo.ttf');
}

@font-face {
  font-family: 'Josefin-Sans';
  src: url('/fonts/JosefinSans.ttf');
  font-weight: normal;
  font-style: normal;
}

*, *.before, *.after {
  box-sizing: inherit;
}

h1, h2, h3, h4 {
  font-family: 'Josefin-Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 3rem;
}

p, a, ul, ol {
  font-family: 'Cardo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
}

body {
  background: var(--grey);
  box-sizing: border-box;
  padding: 0 1rem;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
  color: var(--black);
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
`
export default GlobalStyles
