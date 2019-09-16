import React, { useEffect, useState } from "react"
import { HeroHeadline } from "../../../hero-headline/hero-headline"
import PageHeroTitle from "../../../page-hero-title/page-hero-title"
import AppearAnimation from "../../../../animations/appear.animation"
import styled from "styled-components"
import useScrollPosition from "../../../../hooks/useScrollPosition"

const Background = styled.div<{ url: string }>`
  background-image: url("${({ url }) => url}");
  position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    background-position: center;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
`

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
`

const FadeinOnMount = ({ children, duration, delay, style }) => {
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setAnimate(true)
  }, [])
  return (
    <div
      style={{
        ...style,
        transition: `opacity ${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: animate ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}

// const GrowFadeOut = ({ animate, duration, children }) => {
//   return (
//     <div
//       style={{
//         opacity: animate ? 0 : 1,
//         transform: `scale(${animate ? 2 : 1})`,
//         transition: `transform ${duration}ms, opacity ${duration}ms`,
//       }}
//     >
//       {children}
//     </div>
//   )
// }

const ScreenContent = () => {
  const scroll = useScrollPosition()
  return (
    <Wrapper>
      <FadeinOnMount
        duration={1800}
        delay={3000}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Background
          url={"https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif"}
        />
      </FadeinOnMount>
      <AppearAnimation duration={1000} delay={1500}>
        <div
          style={{
            marginTop: "40vh",
          }}
        >
          <HeroHeadline
            fontSize={"7rem"}
            style={{
              color: "white",

              textShadow: "2px 2px 5px rgba(0,0,0,0.6)",
            }}
          >
            It's almost art
          </HeroHeadline>
        </div>
      </AppearAnimation>
    </Wrapper>
  )
}

export default ScreenContent
