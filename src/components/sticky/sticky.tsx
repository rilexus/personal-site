import * as React from "react"
import { ReactNode } from "react"
import styled from "styled-components"

const Styled = styled.div<{ top: string }>`
  position: sticky;
  top: ${({ top }) => top};
`
interface StickyPropsI {
  children: ReactNode | ReactNode[]
  top: string
}
const Sticky = ({ children, top }: StickyPropsI) => {
  return <Styled top={top}>{children}</Styled>
}
export default Sticky
