import * as React from "react"
import styled from "styled-components"
import { ReactNode } from "react"

const Styled = styled.div<{ height: string }>`
  height: ${({ height }) => height};
`
interface ViewportPropsI {
  height: string
  children: ReactNode | ReactNode[]
}
const Viewport = ({ height, children }: ViewportPropsI) => {
  return <Styled height={height}>{children}</Styled>
}
export default Viewport
