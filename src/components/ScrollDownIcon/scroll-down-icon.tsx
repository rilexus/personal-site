import * as React from "react"
import "./scroll-down-icon-component.style.scss"
import useScrollPosition from "../../hooks/useScrollPosition"
import posed from "react-pose"

const FadeOutAnimation = posed.div({
  hide: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
})

const ScrollDownIcon = ({ timeout }) => {
  const scrollPos = useScrollPosition()
  return (
    <div className={"mouse-container"}>
      <FadeOutAnimation pose={scrollPos > 50 ? "hide" : "visible"}>
        <div className="mouse">
          <span className="scroll-down" />
        </div>
      </FadeOutAnimation>
    </div>
  )
}

export default ScrollDownIcon
