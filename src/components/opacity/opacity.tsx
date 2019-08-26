import * as React from "react"
import styled from "styled-components"
import { ReactNode } from "react"

const Styled = styled.div<{ opacity: number }>`
  opacity: ${({ opacity }) => opacity};
`
interface OpacityPropsI {
  opacity: number
  children: ReactNode | ReactNode[]
}
const Opacity = ({ children, opacity }: OpacityPropsI) => {
  return <Styled opacity={opacity}>{children}</Styled>
}
export default Opacity
