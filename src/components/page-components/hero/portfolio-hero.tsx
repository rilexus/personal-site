import * as React from "react"
import { HeroHeadline } from "../../hero-headline/hero-headline"
import PageHeroTitle from "../../page-hero-title/page-hero-title"
import styled from "styled-components"

const Background = styled.div`
  background-image: url("${"https://media.giphy.com/media/l0HlS6yEDc4eUM4E0/source.gif"}");
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
`

// const GIFBackground = () => {
//   return (
//
//   )
// }

const PortfolioPageHero = () => {
  return (
    <div>
      <Background />
    </div>
  )
}

export default PortfolioPageHero
