import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    "header header header header header header"
    ". main main main main ."
    "footer footer footer footer footer footer";
  width: 100%;
  gap: 0.2em;
`

export default Grid
