import * as React from "react"
import { ReactNode } from "react"
import posed from "react-pose"

const Animation = posed.div({
  visible: {
    opacity: 1,
    transition: ({ duration }) => ({
      opacity: { duration },
    }),
  },
  hidden: {
    opacity: 0,
    transition: ({ duration }) => ({
      opacity: { duration },
    }),
  },
})

interface FadeinAnimationPropsI {
  duration: number
  children: ReactNode | ReactNode[]
  animate: boolean
}
const FadeinAnimation = ({
  children,
  duration,
  animate,
}: FadeinAnimationPropsI) => {
  return (
    <Animation duration={duration} pose={animate ? "visible" : "hidden"}>
      {children}
    </Animation>
  )
}
export default FadeinAnimation
