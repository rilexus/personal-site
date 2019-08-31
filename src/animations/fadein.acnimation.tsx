import * as React from "react"
import { ReactNode } from "react"

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
    <div
      style={{
        transition: `opacity ${duration}ms`,
        opacity: animate ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}
export default FadeinAnimation
