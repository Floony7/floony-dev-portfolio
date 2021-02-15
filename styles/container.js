import styled from "styled-components"
import { device } from "../styles/devices"

export const Wider = styled.div`
  @media ${device.tablet} {
    width: 85vw;
    margin: 0 auto;
  }
`

export const Wide = styled.div`
  @media ${device.tablet} {
    width: 67%;
    margin: 0 auto;
  }
`

export const Thin = styled.div`
  @media ${device.tablet} {
    width: 50%;
    margin: 0 auto;
  }
`

export const Inner = styled.div`
  padding: 0;
`
