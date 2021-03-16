import styled from "styled-components"
import { device } from "../styles/devices"

const CardInner = styled.div`
  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

const Card = (props) => {
  return (
    <CardInner>
      <p>Text</p>
    </CardInner>
  )
}

export default Card
