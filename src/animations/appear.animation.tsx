import * as React from "react"
import posed from "react-pose"
import { ReactNode, useEffect, useState } from "react"
import useSignal from "../hooks/useSignal"

const Animation = posed.div({
  init: {
    opacity: "0",
    y: "20%",
  },
  visible: {
    opacity: "1",
    y: "0%",
    transition: ({ duration }) => ({
      y: { ease: "easeOut", duration: duration },
      opacity: { duration: duration },
    }),
  },
  hidden: {
    opacity: "0",
    y: "20%",
    transition: ({ duration }) => ({
      y: { ease: "easeOut", duration: duration },
      opacity: { duration: duration },
    }),
  },
})
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
  const animate = useSignal(delay)
  return (
    <Animation
      key={"appear-animation"}
      duration={duration}
      pose={animate ? "visible" : "hidden"}
    >
      {children}
    </Animation>
  )
}

export default AppearAnimation
