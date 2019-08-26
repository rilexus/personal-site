import * as React from "react"
import styled from "styled-components"
import { ReactNode } from "react"

const Styled = styled.div<{ position: "center" | "left" | "right" }>`
  text-align: ${({ position }) => position};
`

interface AlignPropsI {
  position: "center" | "left" | "right"
  children: ReactNode | ReactNode[]
}
const Align = ({ children, position }: AlignPropsI) => (
  <Styled position={position}>{children}</Styled>
)
export default Align
