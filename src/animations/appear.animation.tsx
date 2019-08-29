import * as React from "react"
import { ReactNode } from "react"
import useSignal from "../hooks/useSignal"
import styled from "styled-components"

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
