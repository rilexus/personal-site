import * as React from "react"
import { ReactNode, useEffect, useState } from "react"

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
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setAnimate(true)
  }, [])
  return (
    <div
      style={{
        transition: `transform ${duration}ms, opacity ${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: animate ? 1 : 0,
        transform: `translateY(${animate ? "0%" : "20%"})`,
      }}
    >
      {children}
    </div>
  )
}

export default AppearAnimation
