import styled from "styled-components"
import * as React from "react"

const StyledSection = styled.section`
  padding-bottom: 10vh;
  padding-top: 10vh;
  min-height: 100vh;
`

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export { Section }
