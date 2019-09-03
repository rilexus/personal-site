import * as React from "react"
import styled from "styled-components"

const GIFBackground = styled.div`
  background-image: url("${"https://media.giphy.com/media/l0HlS6yEDc4eUM4E0/source.gif"}");
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
`

const PortfolioPageHero = () => {
  return (
    <div>
      <GIFBackground />
    </div>
  )
}

export default PortfolioPageHero
