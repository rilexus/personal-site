import * as React from "react"
import { CSSProperties, ReactNode } from "react"
import styled from "styled-components"

const Styled = styled.div`
  position: sticky;
`
interface StickyPropsI {
  children: ReactNode | ReactNode[]
  top?: string
  bottom?: string
  style?: CSSProperties
}
const Sticky = ({ style, children, top, bottom }: StickyPropsI) => {
  return (
    <Styled
      style={{
        ...style,
        top: top ? top : null,
        bottom: bottom ? bottom : null,
      }}
    >
      {children}
    </Styled>
  )
}
export default Sticky
