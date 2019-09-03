import * as React from "react"
import Viewport from "../../viewport/viewport"
import Sticky from "../../sticky/sticky"
import styled from "styled-components"
import useWindowDimensions from "../../../hooks/useWindowDimensions"
import {
  EasingFunctionNames,
  useMapScrollToValue,
} from "../../../hooks/useMapedValue"
import PortfolioPageHero from "../hero/portfolio-hero"

const Scale = ({ scale, children, height, width }) => {
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        width: `${width}px`,
        height: `${height}px`,
        display: "inline-block",
      }}
    >
      {children}
    </div>
  )
}

const HeroScaleContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`
const HeroScaleWrapper = ({ scale, children, height, width }) => {
  return (
    <Scale height={height} width={width} scale={scale}>
      <HeroScaleContent>{children}</HeroScaleContent>
    </Scale>
  )
}
const ScalingView = () => {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions()

  const animationPxDistance = windowHeight * 3

  const pictureEndScaleValue = 0.3
  const pictureScalingEndPosition = windowHeight

  const screenScaleValue = pictureEndScaleValue + 0.1
  const screenViewportHeight = windowHeight * 2
  const screenAppearPos = pictureScalingEndPosition

  const pictureMappedScaleValue = useMapScrollToValue(
    1,
    pictureEndScaleValue,
    0,
    pictureScalingEndPosition,
    EasingFunctionNames.sineOut
  )
  return (
    <Viewport
      /* whole scale animation height */
      height={`${animationPxDistance}px`}
    >
      <div
        /*
         * push picture and screen image animation area over each other (overlap)
         * put screen image on top to appear before picture on the screen
         * */
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
        }}
      >
        <Viewport
          height={`${screenAppearPos}px`}
          /*
           * scroll distance from top at this point picture mapped
           * value reached its end value (stopped scaling) and the
           * "screen" image appears from the bottom
           */
        />
        <Viewport
          // screen image wrapper height
          height={`${screenViewportHeight}px`}
        >
          <Sticky top={`${0}px`}>
            <div
              style={{
                display: "inline-block",
                transform: `scale(${screenScaleValue})`,
                width: `${windowWidth}px`,
                height: `${windowHeight}px`,
                backgroundColor: "red",
              }}
            >
              s
            </div>
          </Sticky>
        </Viewport>
      </div>
      <div
        // push picture and screen image animation area over each other (overlap)
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
        }}
      >
        <Viewport height={`${animationPxDistance}px`}>
          <Sticky top={`${0}px`}>
            <HeroScaleWrapper
              scale={pictureMappedScaleValue}
              width={windowWidth}
              height={windowHeight}
            >
              <PortfolioPageHero />
            </HeroScaleWrapper>
          </Sticky>
        </Viewport>
      </div>
    </Viewport>
  )
}

export default ScalingView
