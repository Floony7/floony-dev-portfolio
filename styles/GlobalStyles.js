import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
html {
 --red: #E85A4F;
 --tomato: #E98074;
 --dark-grey: #8E8D8A;
 --grey: #EAE7DC;
 --apricot: #D8C3A5;
 --yellow: #ffc600;
 --green: #17e9bb;
 --black: #141414;
 --paper: rgba(255, 255, 255, 0.8);
--padding: 2px;
--sharp-blues: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
--happy-acid: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
--gradient-blue-green: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
--gradient-green-aqua: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
}

@font-face {
  font-family: 'Ubuntu';
  src: url('/fonts/Ubuntu.ttf');
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
  font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 3rem;
}

p, a, ul, ol {
  font-family: 'Josefin-Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
}

a {
  color: var(--yellow);
  text-decoration: none;

  ::after {
    content: "";

  }
}

body {
  /* background: rgb(2,246,100);
  background: linear-gradient(293deg, rgba(2,246,100,1) 0%, rgba(45,5,251,1) 100%); */
  background-image: radial-gradient(circle at 27% 6%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 3%, transparent 3%, transparent 100%), radial-gradient(circle at 27% 18%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 3%, transparent 3%, transparent 100%), radial-gradient(circle at 56% 8%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 3%, transparent 3%, transparent 100%), radial-gradient(circle at 93% 87%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 3%, transparent 3%, transparent 100%), radial-gradient(circle at 38% 97%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 7%, transparent 7%, transparent 100%), radial-gradient(circle at 42% 29%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 7%, transparent 7%, transparent 100%), radial-gradient(circle at 91% 92%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 7%, transparent 7%, transparent 100%), radial-gradient(circle at 96% 29%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 7%, transparent 7%, transparent 100%), radial-gradient(circle at 12% 48%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 7%, transparent 7%, transparent 100%), radial-gradient(circle at 80% 83%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 7%, transparent 7%, transparent 100%), radial-gradient(circle at 1% 11%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 7%, transparent 7%, transparent 100%), radial-gradient(circle at 14% 13%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 5%, transparent 5%, transparent 100%), radial-gradient(circle at 35% 44%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 5%, transparent 5%, transparent 100%), radial-gradient(circle at 55% 89%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 5%, transparent 5%, transparent 100%), radial-gradient(circle at 26% 19%, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 5%, transparent 5%, transparent 100%), radial-gradient(circle at 50% 94%, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 5%, transparent 5%, transparent 100%), linear-gradient(
45deg
, rgb(76, 47, 183), rgb(52, 241, 132));
  box-sizing: border-box;
  max-width: 100%; 
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--black);
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
`
export default GlobalStyles
