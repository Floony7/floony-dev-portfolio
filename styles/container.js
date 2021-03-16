import styled from "styled-components"
import { device } from "../styles/devices"

export const Wider = styled.div`
  width: 90%;
  padding: 0 1rem;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 85vw;
  }
`

export const Wide = styled.div`
  width: 90%;
  padding: 0 1rem;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 67%;
  }
`

export const Thin = styled.div`
  @media ${device.tablet} {
    width: 50%;
  }
`

export const Inner = styled.div`
  padding: 0;
`

export const ThreeCol = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`
