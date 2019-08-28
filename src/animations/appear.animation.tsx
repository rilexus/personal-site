import * as React from "react"
import posed, { PoseGroup } from "react-pose"
import { ReactNode, useEffect, useState } from "react"
import useSignal from "../hooks/useSignal"
import styled from "styled-components"

// const Animation = posed.div({
//   init: {
//     opacity: 0,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: ({ duration, delay }) => ({
//       y: { ease: "easeOut", duration: duration, delay },
//       opacity: { duration: duration, delay },
//     }),
//   },
//   hidden: {
//     opacity: 0,
//     y: 20,
//     transition: ({ duration, delay }) => ({
//       y: { ease: "easeOut", duration: duration, delay },
//       opacity: { duration: duration, delay },
//     }),
//   },
// })

const Animation = styled.div<{ duration: number; pose: string; delay: number }>`
  transition: transform ${({ duration }) => duration}ms,
    opacity ${({ duration }) => duration}ms;
  opacity: ${({ pose }) => (pose === "visible" ? 1 : 0)};
  transition-delay: ${({ delay }) => delay}ms;
  transform: translateY(${({ pose }) => (pose === "visible" ? 0 : "20%")});
`
interface AppearAnimationPropsI {
  children: ReactNode | ReactNode[]
  duration: number
  delay: number
}
const AppearAnimation = ({
  children,
  duration,
  delay,
}: AppearAnimationPropsI) => {
  const animate = useSignal(0)
  return (
    <Animation
      key={"appear-animation"}
      pose={animate ? "visible" : "hidden"}
      duration={duration}
      delay={delay}
    >
      {children}
    </Animation>
  )
}

export default AppearAnimation
