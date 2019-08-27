import * as React from "react"
import styled from "styled-components"
import { useState } from "react"

const Wrapper = styled.div`
  height: 190px;
  overflow: hidden;
  position: relative;
  margin: 35px 0 35px 0;
`

const ScrollbarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  border-radius: 2px;
  width: 100%;
  background-color: #f5f5f5;
`
const Scrollbar = styled.div`
  border-radius: 2px;
  position: absolute;
  width: ${({ width }) => width}px;
  left: ${({ left }) => left}px;
  top: 0;
  height: 2px;
  background-color: #8b8b8b;
`

const ScrollView = ({ children }) => {
  const [scrollPos, setScrollPos] = useState(0)
  const visibleViewWidth = 700
  const scrollViewWidth = 800
  return (
    <Wrapper>
      <div
        onScroll={(e: any) => {
          setScrollPos(e.target.scrollLeft)
        }}
        style={{
          width: `${visibleViewWidth}px`,
          overflowX: "scroll",
        }}
      >
        <div
          style={{
            width: `${scrollViewWidth}px`,
          }}
        >
          {children}
        </div>
      </div>
      <ScrollbarWrapper>
        <Scrollbar
          left={scrollPos}
          width={visibleViewWidth - (scrollViewWidth - visibleViewWidth)}
        />
      </ScrollbarWrapper>
    </Wrapper>
  )
}
export default ScrollView
