import * as React from "react"
import "./scroll-down-icon-component.style.scss"
import useScrollPosition from "../../hooks/useScrollPosition"
import posed from "react-pose"

const FadeOutAnimation = posed.div({
  hide: {
    opacity: 0,
    transition: ({}) => ({
      opacity: { duration: 100 },
    }),
  },
  visible: {
    opacity: 1,
  },
})

const ScrollDownIcon = () => {
  const scrollPos = useScrollPosition()
  return (
    <FadeOutAnimation pose={scrollPos > 50 ? "hide" : "visible"}>
      <div className="mouse">
        <span className="scroll-down" />
      </div>
    </FadeOutAnimation>
  )
}

export default ScrollDownIcon
