import { ReactNode, useEffect, useState } from "react"
import posed from "react-pose"
import * as React from "react"
import styled from "styled-components"

const Animation = posed.div({
  visible: {
    y: "0%",
    delay: ({ delay }) => delay,
    transition: ({ duration }) => ({
      y: { duration },
    }),
  },
  hidden: {
    y: "30%",
    transition: ({ duration }) => ({
      y: { duration },
    }),
  },
})

interface SlideUpAnimationPropsI {
  children: ReactNode | ReactNode[]
  duration: number
  animate: boolean
  delay?: number
}
function SlideUpAnimation({
  animate,
  duration,
  children,
  delay,
}: SlideUpAnimationPropsI) {
  return (
    <Animation
      duration={duration}
      delay={delay}
      pose={animate ? "visible" : "hidden"}
    >
      {children}
    </Animation>
  )
}

export default SlideUpAnimation
