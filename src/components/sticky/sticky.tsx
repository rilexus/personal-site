import * as React from "react"
import { ReactNode } from "react"
import styled from "styled-components"

const Styled = styled.div`
  position: sticky;
`
interface StickyPropsI {
  children: ReactNode | ReactNode[]
  top?: string
  bottom?: string
}
const Sticky = ({ children, top, bottom }: StickyPropsI) => {
  return (
    <Styled
      style={{
        top: top ? top : null,
        bottom: bottom ? bottom : null,
      }}
    >
      {children}
    </Styled>
  )
}
export default Sticky
