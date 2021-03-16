import styled from "styled-components"

const Section = styled.div`
  background: ${(props) => props.bgcolor};
  max-height: ${(props) => props.height};
  width: 100vw;
  max-width: 100%;
  padding: 0.2em;
`

export default Section
